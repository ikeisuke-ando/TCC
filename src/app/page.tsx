'use client';
import Topo from "@/src/widgets/Topo";
import ButtonNavigation from "../components/ButtonNavigation";
import AreaPrincipal from "../widgets/AreaPrincipal";
import AreaMenu from "../widgets/AreaMenu";
import AreaConteudo from "../widgets/AreaConteudo";
import {ArrowBigLeft,ArrowBigRight} from "@/src/assets/icons";
import { useState } from "react";

export default function Home() {
  const [conteudo,setConteudo] = useState(0);

  return (
        <AreaPrincipal>
              <Topo/>
              <AreaMenu/> 


          <AreaConteudo contentNumber={conteudo}/>
          
          <div className="flex justify-between mt-3 ">
              <ButtonNavigation icon={<ArrowBigLeft/>} acao={()=>{
                setConteudo(conteudo - 1)
                if(conteudo < 0){
                    setConteudo(1);
                  }
                }}/>
              <ButtonNavigation icon={<ArrowBigRight/>} acao={()=>{
                setConteudo(conteudo + 1)
                if(conteudo > 3)
                  setConteudo(2);
              }}/>
        </div>
      </AreaPrincipal>
    
  );
}
