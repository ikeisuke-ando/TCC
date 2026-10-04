interface itemMenu{
    children: React.ReactNode
}

export default function Menu({children}:itemMenu){
     return (
                <nav className="w-fit list-none" id='menu'>
                    {children}
                </nav>       
              
        )
} 