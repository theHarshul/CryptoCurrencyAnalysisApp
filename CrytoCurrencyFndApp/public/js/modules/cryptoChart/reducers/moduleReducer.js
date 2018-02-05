import stateStorage from '../../../util/stateStorage';

const defaultState = {
    portfolioData:[],
    form:{
        ticker:'',
        funds:0,
        withFees:false,
        tickerList:[]
    },
    lineData:{
        labels:['Scatter'],
        datasets:[]
    },
    radarData:{},
    selectedNode:80
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

function raderDataTransformation(dataSet, node){
    var lables = [];
    var data = [];
    dataSet[node].coinList.forEach(function(datapoint){
        lables.push(datapoint.coinName);
        data.push(datapoint.investment);
    });
    
    var dataset = [    {
      label: 'Distribution',
      backgroundColor: 'rgba(179,181,198,0.2)',
      borderColor: 'rgba(179,181,198,1)',
      pointBackgroundColor: 'rgba(179,181,198,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(179,181,198,1)',
      data: data
    }];

    var transformedDataSet = {
        lables: lables,
        datasets: dataset
    }
    
    return(transformedDataSet);
}

var templateReducer = (state = defaultState, action) => {
    var jsonString = JSON.stringify(state)
    var newState = JSON.parse(jsonString);
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
        case 'CRYPTO_CHART_SET_RADAR_DATA':{
            newState.radarData = raderDataTransformation(newState.portfolioData, newState.selectedNode);
            break;
        }
        case 'CRYPTO_CHART_SET_FORM_VALUE':{
            newState.form[action.payload.field] = action.payload.value;
            break;
        }
    }
    return(newState);
};

export default templateReducer;
