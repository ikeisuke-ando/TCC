interface itemMenu{
    children: React.ReactNode;
}


export default function Menu({children}:itemMenu){
     return (
                <nav className="w-32 bg-gray-400 rounded-xl list-none absolute scale-y-50           transition-all group:scale-y-100 origin-top duration-300"
                  id='menu'>
                    {children}
                </nav>
    
        )
}