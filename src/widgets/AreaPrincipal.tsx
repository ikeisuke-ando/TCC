interface elementos {
    children: React.ReactNode
}

export default function AreaPrincipal({children}:elementos){
    return (
        <div className="w-full p-10">
            {children}
        </div>
    )
}