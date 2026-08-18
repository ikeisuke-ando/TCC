import { ReactNode as nodeChild } from "react"
interface buttonIcon{
    icon: nodeChild,
    acao():void
}

export default function ButtonNavigation({icon, acao}: buttonIcon) {

    return (
        <button className="border-3 border-gray-400 rounded-3xl p-2  bg-white transition duration-500  hover:bg-gray-600 hover:text-white cursor-pointer" onClick={acao}>
            {icon}
        </button>
    )
}