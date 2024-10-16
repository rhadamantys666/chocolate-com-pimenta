export function criarGrafico(id, dados, layout) {
    Plotly.newPlot(id, [dados], layout);
}
