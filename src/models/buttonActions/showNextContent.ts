import { Data } from "../getData";

function verifica(conteudoNum: number, conteudos:Data[]){
    if(conteudoNum > -1 && conteudoNum < conteudos.length)
        return true;
    else{
        return false;
    }

}

export {verifica};