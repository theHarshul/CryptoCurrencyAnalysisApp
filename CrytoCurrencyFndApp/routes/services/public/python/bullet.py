import csv
import os
import datetime
import numpy as np
import cvxpy

dat_dir='data_hist/'

bad_list=['btg','zec','etc','bch','pivx']

'''
The information provided is for educational purposes only.
It is not meant as financial advice and should not be considered as this.
Please consult a financial advisor to determine actions to take
and retrain from taking big financial decisions on your own.
We do not make any guarantee or promises that the contents provided are correct. No investments decisions should be made based on this.
'''

def file_names_gen():
    xs=[]
    for x in os.walk(dat_dir):
        y=x
    for name in y[2]:
        if '.csv' in name:
            xs.append(name)
    return xs


def coin_map_gen(names):
    name_dict_f={}
    name_dict_b={}
    for i,name in enumerate(names):
        name_dict_f[i]=name
        name_dict_b[name]=i
    return name_dict_f,name_dict_b

def prices(names,i):
    prices=[]
    first=True
    with open(dat_dir+names[i],'rb') as csvf:
        reader=csv.reader(csvf)
        for row in reader:
            if first:
                first=False
            else:
                p=float(row[4])
                prices.append([datetime.datetime.strptime(row[0],'%Y-%m-%d'), float(row[4])])
    return prices

def prices_to_log_rates(price_lists):
    rets=[]
    for pl in price_lists:
        sub_ret=[]
        for i,p in enumerate(pl[:-1]):
            sub_ret.append(np.log(pl[i+1][1]/p[1]))
        rets.append(sub_ret)
    return rets

def cov_mat(rets):
    k=len(rets)
    covmat=np.zeros((k,k))

    s_l=min(365,len(rets[0]))
    for e in rets:
        s_l=min(s_l,len(e))
    
    #for i in range(k):
    #    for j in range(i-1):
    #        px=rets[i]
    #        lx=len(px)
    #        py=rets[j]
    #        ly=len(py)
#
#
 #           s_mat=np.cov(px[lx-s_l:],py[ly-s_l:])
#           covmat[i,i]=s_mat[0,0]
 #           covmat[i,j]=s_mat[0,1]
  #          covmat[j,i]=s_mat[1,0]
   #         covmat[j,j]=s_mat[1,1]
    vs=np.zeros([s_l,0])
    for i in range(k):
        vs=np.append(vs,np.asarray(rets[i][-s_l:]).reshape([s_l,1]),1)
    vs=np.transpose(vs)
    covmat=np.cov(vs)
    return covmat

#inds is all the names of the coins
def stats_from_inds(inds):
    names=file_names_gen()
    nd_f,nd_b=coin_map_gen(names)
    ind_prices=[prices(names,nd_b[ind_n+'.csv']) for ind_n in inds]
    ret_list=prices_to_log_rates(ind_prices)
    #return ret_list

    cvm=cov_mat(ret_list)
    expected_returns=[np.mean(ret_sub) for ret_sub in ret_list]
    return expected_returns,cvm


def name_list_gen(file_names):
    return [name.split('.')[0] for name in file_names]

def opt_port_prob(t_cost,cov,ret,N,prin,days,tc=False):
    l=len(ret)
    t_cost=(20+np.random.normal(np.zeros(l))*5)/float(prin)

    w=cvxpy.Variable(l)
    gamma=cvxpy.Parameter(sign='positive')
    val=ret.T*w*days
    risk=cvxpy.quad_form(w,cov)*days
    buy_list=cvxpy.Bool(l)
    t_sum=t_cost.T*buy_list
    #not properly balanced
    if tc:
        prob=cvxpy.Problem(cvxpy.Maximize(val-t_sum-gamma*risk),
                       [cvxpy.sum_entries(w)==1,w>=0,w<=buy_list])
    else:
        prob=cvxpy.Problem(cvxpy.Maximize(val-gamma*risk),
                       [cvxpy.sum_entries(w)==1,w>=0])

    ret_d=np.zeros(N)
    risk_d=np.zeros(N)
    w_d=[]
    buy_d=[]
    gam_l=[]
    
    gv=np.logspace(-2,3,N)
    for i in range(N):
        gamma.value=gv[i]
        prob.solve()
        risk_d[i]=np.sqrt(risk.value)
        ret_d[i]=val.value
        w_d.append(w.value)
        buy_d.append(buy_list.value)
        gam_l.append(gv[i])

    return ret_d,risk_d,w_d,buy_d,gam_l


def process(inds,money,tc=False):
    N=100
    days=365
    
    ret,cov=stats_from_inds(inds)
    ret=np.asarray(ret)
    return opt_port_prob(None,cov,ret,N,money,days,tc)

def get_portfolios(inds,money,tc):
    rs,risks,ws,_,gammas=process(inds,money,tc)

    new_ports=[]
    for w in ws:
        nd={}
        for i,x in enumerate(w):
            nd[inds[i]]=int(money*x)
        new_ports.append(nd)

    dump='['
    for i in xrange(len(rs)):
        dump+=format_point(risks[i],rs[i],gammas[i],new_ports[i])
    dump+=']'
    return dump
    


def format_point(x,y,gamma,w_dict):
    xs='risk:'+str(x)+','
    ys='rateOfReturn:'+str(y)+','
    gs='conversion:'+str(gamma)+','
    cs='coinList:['
    for key in w_dict.keys():
        cs+='{coinName:\''+key+'\',investment:'+str(w_dict[key])+'},'
    cs+=']'
    return '{'+xs+ys+gs+cs+'},'

def main():
    arg1 = sys.argv[1] #value1
    arg2 = sys.argv[2] #value2
    arg3 = sys.argv[3] #value3
    get_portfolios(arg1, arg2, arg3)



test=True
if test:
    name_list=name_list_gen(file_names_gen())

    best_list=set(name_list)
    best_list-=set(bad_list)
    best_list=list(best_list)

    dict_f,dict_b=coin_map_gen(name_list)

    principle=1000

    a,b,w,gs,bl=process(best_list,principle)
    ac,bc,wc,gsc,blc=process(best_list,principle,True)






