'use client'
import {default as MenuArea} from '../components/Menu'; 
import {Menu} from '@/src/assets/icons'
import { useState, useRef, useLayoutEffect } from 'react';
import ItemMenu from '../components/ItemMenu';

 

export default function AreaMenu(){
    const [open, setOpen] = useState(false);
    const menuArea = useRef(null);


    function hamburgerMenu(){
        setOpen(() => !open);   
}

    return(
            <button className=' relative group'>
                <Menu onClick={hamburgerMenu} className='inline-block'/>
                    <MenuArea>
                        <ItemMenu content="Inicio" value="Inicio" className='rounded-t-xl' href='/'/>
                        <ItemMenu content="Questões" value="Questoes" href='/questoes'/>
                        <ItemMenu content="titulo 3" value="titulo3" className='rounded-b-xl' href='/'/> 
                    </MenuArea>
            </button>  
    )
}