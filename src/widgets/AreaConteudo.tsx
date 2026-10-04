'use client'
import { useState } from "react";
import { verifica } from "../models/buttonActions/showNextContent";
import { Data } from "../models/getData";
import {ArrowLeft,ArrowRight} from "@/src/assets/icons";
import ButtonNavigation from "../components/ButtonNavigation";

interface conteudo {
    dadoJson:Data[]
} 



export default function AreaConteudo({dadoJson} : conteudo){
    const [indiceConteudo,setIndiceConteudo] = useState(0);

    return (
        <div className="w-11/12 mx-auto">
            <main className="w-full rounded-2xl h-96 bg-white p-4 mt-8 overflow-auto border-[1px] border-dotted border-blue-300">
                {verifica(indiceConteudo,dadoJson) ? dadoJson[indiceConteudo].texto : ''}
            </main>

            <div className="flex justify-center gap-4 p-3  mt-5">
                    <ButtonNavigation 
                        icon={<ArrowLeft/>} 
                        tipoAcao="subtrair" 
                        acao={setIndiceConteudo} 
                        indiceDado={indiceConteudo}
                        listaConteudo={dadoJson}
                        texto="Anterior"
                        className="bg-botao-anterior hover:shadow-botao-anterior/50"
                        />


                    <ButtonNavigation 
                        icon={<ArrowRight/>} 
                        acao={setIndiceConteudo}
                        tipoAcao="somar" 
                        indiceDado={indiceConteudo}
                        listaConteudo={dadoJson}
                        texto="Próximo"
                        className="bg-botao-proximo hover:shadow-botao-proximo/50 flex-row-reverse"
                    />
                
            </div>
        </div>
    )
    
}