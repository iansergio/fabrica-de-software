var config = {
    responsive: true
};

var trace1 = {
    x: [1, 2, 3, 4, 5, 6, 7, 8],
    y: [10, 15, null, 17, 14, 12, 10, null, 15],
    mode: 'lines',
    connectgaps: true
};

var trace2 = {
    x: [1, 2, 3, 4, 5, 6, 7, 8],
    y: [16, null, 13, 10, 8, null, 11, 12],
    mode: 'lines',
    connectgaps: true
};

var data = [trace1, trace2,];

var layout = {
    showlegend: false,
    margin: { t: 0 },
};
Plotly.newPlot('lineChart', data, layout, config);


// Gráfico de pizza
var data2 = [{
    values: [19, 26, 55],
    labels: ['Alimentação', 'Entretenimento', 'Assinaturas'],
    type: 'pie',
    hole: .6
}];

var layout = {
    showlegend: false,
};

Plotly.newPlot('pieChart', data2, layout, config);