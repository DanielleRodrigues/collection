"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Felino_1 = require("./Felino");
var Leao_1 = require("./Leao");
var felino = new Felino_1.Felino();
var simba = new Leao_1.Leao('Simba');
felino.emitSound('ROOOOARRRR');
simba.emitSound('MIUUUUU MIUUUU');
simba.caca(' Javali');
simba.caca('Zebra', 2);
simba.caca('Girafa', 1, 'Mamifero');
var leoes = [];
//leoes.push(simba); // push joga o item na ultima posição no vetor
var leao1 = new Leao_1.Leao('Scar');
var leao2 = new Leao_1.Leao('Mufasa');
var leao3 = new Leao_1.Leao('Nala');
leoes.push(simba, leao1, leao2, leao3);
leoes.pop(); // pop remove o ultimo elemento do vetor
leoes.forEach(function (leao) {
    console.log(leao.name);
}); // foreach percorre todo vetor e em cada elemento podemos fazer alguma coisa
