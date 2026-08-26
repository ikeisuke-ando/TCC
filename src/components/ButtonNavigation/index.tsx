import { ReactNode as nodeChild } from "react"
import { tipoAcao,Data } from "@/src/models/getData"

interface buttonIcon{
    icon: nodeChild,
    tipoAcao:tipoAcao,
    indiceDado:number,
    listaConteudo: Data[],
    acao: React.Dispatch<React.SetStateAction<number>>;
}

type setFunction = React.Dispatch<React.SetStateAction<number>>

 function navegar(acao: tipoAcao, indiceConteudo:number ,funcao:setFunction, listaConteudo:Data[]){
            if(acao === "somar" && (indiceConteudo + 1 < listaConteudo.length) )
                    funcao(indiceConteudo + 1)
            
            
            if(acao === "subtrair" && (indiceConteudo - 1 > -1))
                    funcao(indiceConteudo - 1)
            
        } 

export default function ButtonNavigation({icon, tipoAcao, indiceDado,acao,listaConteudo}: buttonIcon) { 

    return (
        <button className="border-3 border-gray-400 rounded-3xl p-2  bg-white transition duration-500  hover:bg-gray-600 hover:text-white cursor-pointer" onClick={() => navegar(tipoAcao,indiceDado,acao,listaConteudo)}>
            {icon}
        </button>
    )
}