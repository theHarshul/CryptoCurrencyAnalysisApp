import stateStorage from '../../../util/stateStorage';

const defaultState = {
    "portfolioData": [],
    "form":{
        "ticker":'',
        "funds":0,
        "withFees":false,
        "tickerList":[],
        "selectedNode":80
    },
    "lineRawData":{},
    "lineData":{},
    "radarRawData":{},
    "radarData":{}
};

function lineDataTransform(dataSet){
    var transformedDataSet = [];
    dataSet.forEach(function(dataPoint){
        var point = {x:dataPoint.risk, y:dataPoint.rateOfReturn};
        transformedDataSet.push(point);
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
    }];
    return(dataset);
}

function raderDataTransformation(dataSet, node){
    var labels = [];
    var data = [];
    dataSet[node].coinList.forEach(function(datapoint){
        if(datapoint.investment > 0){
            labels.push(datapoint.coinName);
            data.push(datapoint.investment);
        }
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
        labels: labels,
        datasets: dataset
    };
    
    return(transformedDataSet);
}

var templateReducer = (state = defaultState, action) => {
    var portfolioData = JSON.stringify(state.portfolioData);
    var lineRawData = JSON.stringify(state.lineRawData);
    var radarRawData = JSON.stringify(state.radarRawData);
    var form = JSON.stringify(state.form);

//    var jsonString = JSON.stringify(state);
    var newState = {};
    newState.portfolioData = JSON.parse(portfolioData);
    newState.lineData = JSON.parse(lineRawData);
    newState.lineRawData = JSON.parse(lineRawData);
    newState.radarData = JSON.parse(radarRawData);
    newState.radarRawData = JSON.parse(radarRawData);
    newState.form = JSON.parse(form);
    
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
            newState.lineRawData.datasets = lineDataTransform(newState.portfolioData);
            newState.lineData = JSON.parse(JSON.stringify(newState.lineRawData));
            break;
        }
        case 'CRYPTO_CHART_SET_RADAR_DATA':{
            newState.radarRawData = raderDataTransformation(newState.portfolioData, newState.form.selectedNode);
            newState.radarData = JSON.parse(JSON.stringify(newState.radarRawData));
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
