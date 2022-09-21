import { Felino } from "./Felino";



class Leao extends Felino {

    public emitSound(sound: string): void {
        console.log(`Leao emite ${sound}`);

    }
    public caca(presa: string): void;
    public caca(presa: string, qtdPressas: number): void;
    public caca(presa: string, qtdPressas: number, tipoPresa: string): void; // sempre pegar a opção mais complexa para implementação


    public caca(presa: string, qtdPressas?: number, tipoPresa?: string) { // ? dps do argumento  = esse parametro nao é obrigatorio
        if (tipoPresa != undefined ){
                console.log(`Leão está caçando um ${tipoPresa}`);       
        }
        const numPresa = (qtdPressas == undefined)? 1: qtdPressas;
        console.log(`Leao está caçando ${numPresa}, ${presa}`);
        

    }

}
export { Leao };