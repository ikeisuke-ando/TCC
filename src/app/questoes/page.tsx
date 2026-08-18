'use client';
import Topo from "@/src/widgets/Topo";
import ButtonNavigation from "@/src/components/ButtonNavigation";
import AreaPrincipal from "@/src/widgets/AreaPrincipal";
import AreaMenu from "@/src/widgets/AreaMenu";
import AreaConteudo from "@/src/widgets/AreaConteudo";
import {ArrowBigLeft,ArrowBigRight} from "@/src/assets/icons";
import { useState } from "react";
 
export default function Questions(){
      return (
    /*main*/
      <AreaPrincipal>
            <header className="text-center">
              <Topo/>
            </header>

          <button>
            <AreaMenu/>
          </button>

          <AreaConteudo contentNumber={1}/>
          
          <div className="flex justify-between mt-3 ">
              <ButtonNavigation icon={<ArrowBigLeft/>} acao={()=>console.log('teste')}/>
              <ButtonNavigation icon={<ArrowBigRight/>} acao={()=> console.log('teste')}/>
          </div>
      </AreaPrincipal>
    
  );
}