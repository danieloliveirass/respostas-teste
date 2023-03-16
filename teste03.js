var sp = 67836.43,
rj = 36678.66, 
mg = 29229.88, 
es = 27165.48, 
out = 19849.53; 

//Calculo da soma para descobir o valor mensal total
var soma = sp + rj + mg + es + out;
var totalSoma = soma.toFixed(2);

// Calculo para descobrir o percentual que cada estado teve dentro do total mensal
var porcentagemSP = (sp/totalSoma)*100;
var valorDecimalSP = porcentagemSP.toFixed(1);

var porcentagemRJ = (rj/totalSoma)*100;
var valorDecimalRJ = porcentagemRJ.toFixed(1);

var porcentagemMG = (mg/totalSoma)*100;
var valorDecimalMG = porcentagemMG.toFixed(1);

var porcentagemES = (es/totalSoma)*100;
var valorDecimalES = porcentagemES.toFixed(1);

var porcentagemOUT = (out/totalSoma)*100;
var valorDecimalOUT = porcentagemOUT.toFixed(1);

console.log(`Logo abaixo você poderá ver o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora:\n\n* SP (R$67836.43) = ${valorDecimalSP}%\n* RJ (R$36678.66) = ${valorDecimalRJ}%\n* MG (R$29229.88) = ${valorDecimalMG}%\n* ES (R$27165.48) = ${valorDecimalES}%\n* OUTROS (R$19849.53) = ${valorDecimalOUT}%\n\nO valor total mensal da destribuidora é: R$${totalSoma}.\n`);