'use client'
import { useState } from "react";
import { verifica } from "../models/buttonActions/showNextContent";
import { Data } from "../models/getData";
import {ArrowBigLeft,ArrowBigRight} from "@/src/assets/icons";
import ButtonNavigation from "../components/ButtonNavigation";

interface conteudo {
    dadoJson:Data[]
} 



export default function AreaConteudo({dadoJson} : conteudo){
    const [indiceConteudo,setIndiceConteudo] = useState(0);

    return (
        <div>
            <main className="w-full rounded-2xl h-96 bg-white p-4 mt-4 overflow-auto">
                {verifica(indiceConteudo,dadoJson) ? dadoJson[indiceConteudo].texto : ''}
            </main>

            <div className="flex justify-between mt-5 ">
                    <ButtonNavigation 
                        icon={<ArrowBigLeft/>} 
                        tipoAcao="subtrair" 
                        acao={setIndiceConteudo} 
                        indiceDado={indiceConteudo}
                        listaConteudo={dadoJson}
                        />


                    <ButtonNavigation 
                        icon={<ArrowBigRight/>} 
                        acao={setIndiceConteudo}
                        tipoAcao="somar" 
                        indiceDado={indiceConteudo}
                        listaConteudo={dadoJson}
                    />
            </div>
        </div>
    )
    
}