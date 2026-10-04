interface elementos {
    children: React.ReactNode
}

export default function AreaPrincipal( {children}:elementos){
     return (
        <div className="w-full h-screen">
                    {children}
        </div>
    )
}