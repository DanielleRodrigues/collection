import { Felino } from "./Felino";
import {Leao} from "./Leao";

const felino = new Felino ();
const simba = new Leao ('Simba');


felino.emitSound('ROOOOARRRR');

simba.emitSound('MIUUUUU MIUUUU');
simba.caca(' Javali');
simba.caca ('Zebra', 2);
simba.caca ('Girafa', 1, 'Mamifero');

const leoes: Leao [] = [] ;
//leoes.push(simba); // push joga o item na ultima posição no vetor


const leao1 = new Leao ('Scar');
const leao2 = new Leao ('Mufasa');
const leao3 = new Leao ('Nala');

leoes.push(simba, leao1, leao2, leao3);

leoes.pop ();// pop remove o ultimo elemento do vetor

leoes.forEach((leao) => { // variavel leao pode ser qualquer coisa

    console.log(leao.name);
    
}); // foreach percorre todo vetor e em cada elemento podemos fazer alguma coisa

