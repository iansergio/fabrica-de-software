let colors = [
    ['rgb(0, 158, 96)', 'rgb(0, 255, 153)', 'rgb(0, 150, 255)', 'rgb(54, 113, 202)']
]

let data = [{
    type: "pie",
    hole: .6,
    textinfo: 'none',
    labels: ["Assinaturas", "Alimentação", "Entretenimento", "Outros"],

    values: [2, 3, 7, 4],
    // marker: {
    //     colors: ultimateColors[0]
    // },
}]

let layout = {
    height: 200,
    width: 200,
    margin: { "t": 10, "b": 10, "l": 0, "r": 0 },
    showlegend: false,

}

Plotly.newPlot('pie-graph', data, layout)