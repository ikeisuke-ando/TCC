import { verifica } from "../models/buttonActions/showNextContent";

interface conteudo {
    contentNumber:number
}

export default function AreaConteudo({contentNumber} : conteudo){
     const conteudos = ['conteudo 1', 'conteudo 2', 'conteudo 3'];

    return (
        <main className="w-full rounded-2xl h-96 bg-white">
            {verifica(contentNumber,conteudos) ? conteudos[contentNumber] : ''}
        </main>
    )
}