import stateStorage from '../../../util/stateStorage';

const defaultState = {
    funds:0,
    withFees:false,
    tickerList:[],
    portfolioData:[],
    aciveDistribution:[],
    radarOptions:{},
    lineOption:{
        scales:{
            xAxis:[{type: 'liniar', position:'bottom'}]
        }
    },
    lineData:{
        labels:['Scatter'],
        datasets:[]
    }
};

function lineDataTransform(dataSet){
    var transformedDataSet = [];
    dataSet.forEach(function(dataPoint){
        transformedDataSet.push({x:dataPoint.risk, y:dataPoint.rateOfReturn});
    });
    
    var dataset = [{
        label: 'My First dataset',
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 2,
        pointHitRadius: 10,
        data: transformedDataSet
    }]
    return(dataset);
}

var templateReducer = (state = defaultState, action) => {
    var newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'CRYPTO_CHART_ADD_TICKER': {
            newState.tickerList.push(action.payload);
            break;
        }
        case 'CRYPTO_CHART_SET_PORTFOLIO_DATA':{
            newState.portfolioData = action.payload;
            break;
        }
        case 'CRYPTO_CHART_SET_LINE_DATA':{
            newState.lineData.datasets = lineDataTransform(newState.portfolioData);
            break;
        }
    }
    return(newState);
};

export default templateReducer;
