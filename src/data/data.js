var data = [
    { id: 0, country: 'US', gdp: 20.94, hci: 0.926, gini: 0.48, breakdown: [
        { year: '2000', gdp: 10.25, hci: 0.866, gini: 0.46 }, 
        { year: '2010', gdp: 14.99, hci: 0.916, gini: 0.47 }, 
        { year: '2022', gdp: 20.94, hci: 0.926, gini: 0.48 }
    ]},
    { id: 1, country: 'UK', gdp: 2.71, hci: 0.932, gini: 0.34, breakdown: [
        { year: '2000', gdp: 1.66, hci: 0.874, gini: 0.39 },
        { year: '2010', gdp: 2.48, hci: 0.766, gini: 0.34 },
        { year: '2022', gdp: 2.71, hci: 0.932, gini: 0.34 }
    ]},
    { id: 2, country: 'China', gdp: 14.72, hci: 0.761, gini: 0.48, breakdown: [
        { year: '2000', gdp: 1.21, hci: 0.588, gini: 0.42 },
        { year: '2010', gdp: 6.09, hci: 0.699, gini: 0.48 },
        { year: '2022', gdp: 14.72, hci: 0.761, gini: 0.48 }
    ]},
];

export function getData() {
    return data;
}

export function getChartData(index) {
    for(var i = 0; i < data.length; i++) {
        if(data[i].id == index) {
            return data[i].breakdown;
        }
    }
    return data[0].breakdown;
}