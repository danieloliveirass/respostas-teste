var faturamentoDiario = [22174.1664,24537.6698,26139.6134,0.0,26742.6612,42889.2258,46251.174,11191.4722,3847.4823,373.7838,2659.7563,48924.2448,18419.2614,35240.1826,43829.1667,18235.6852,4355.0662,13327.1025,25681.8318,1718.1221,13220.495,8414.61];

// calculando o maior e o menor faturamento diário
const faturamentoMax = Math.max.apply(Math,faturamentoDiario);
const faturamentoMin = Math.min.apply(Math,faturamentoDiario);

console.log(`\nO maior faturamento diário é:\nR$ ${faturamentoMax}\nO menor faturamento diário é:\nR$ ${faturamentoMin}.`);

