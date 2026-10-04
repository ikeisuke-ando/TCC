'use client'
import {default as MenuArea} from '../components/Menu'; 
import ItemMenu from '../components/ItemMenu';
 
 

export default function AreaMenu(){
    return(
            <MenuArea>
                <ItemMenu content="Inicio" value="Inicio" href='/'/>
                <ItemMenu content="Sobre" value="Sobre" href='/sobre'/>
                <ItemMenu content="Titulo 3" value="Titulo3" href='/'/> 
            </MenuArea>
            )
}