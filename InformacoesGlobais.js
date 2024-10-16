import { criarGrafico } from './common.js';

const dadosMundo = {
    x: ['Facebook', 'Instagram', 'Twitter', 'TikTok'],
    y: [2900, 1500, 330, 1000],  // Milhões de usuários globais
    type: 'bar'
};

const layoutMundo = {
    title: 'Número de Usuários Globais por Rede Social',
    xaxis: { title: 'Rede Social' },
    yaxis: { title: 'Usuários (milhões)' }
};

criarGrafico('grafico-mundo', dadosMundo, layoutMundo);
