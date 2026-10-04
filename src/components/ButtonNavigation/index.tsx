import { ReactNode as nodeChild } from "react"
import { tipoAcao,Data } from "@/src/models/getData"
import { twMerge } from "tailwind-merge";

type setFunction = React.Dispatch<React.SetStateAction<number>>
interface buttonIcon{
    icon: nodeChild,
    tipoAcao:tipoAcao,
    indiceDado:number,
    listaConteudo: Data[],
    texto: string,
    className ?: string,
    acao: setFunction;
}



 function navegar(acao: tipoAcao, indiceConteudo:number ,funcao:setFunction, listaConteudo:Data[]){
            if(acao === "somar" && (indiceConteudo + 1 < listaConteudo.length) )
                    funcao(indiceConteudo + 1)
            
            
            if(acao === "subtrair" && (indiceConteudo - 1 > -1))
                    funcao(indiceConteudo - 1)
            
        } 

export default function ButtonNavigation({icon, tipoAcao, indiceDado,acao,listaConteudo,texto, className}: buttonIcon) { 
    
    const estilos = `    w-44 rounded-[10px] p-2 
                     flex justify-center text-white
                     transition duration-500  hover:shadow-md
                     hover:text-white cursor-pointer`;

    return (
        
        <button className={twMerge(` w-44 rounded-[10px] p-2 
                     flex justify-center text-white
                     transition duration-500  hover:shadow-[0_0_20px_5px_rgba(99,102,241,0.5)]
                    cursor-pointer`,className)} 
        onClick={() => navegar(tipoAcao,indiceDado,acao,listaConteudo)}
        >
                {icon}
                <span className="mx-2">{texto}</span>
            
        </button>
    )
}