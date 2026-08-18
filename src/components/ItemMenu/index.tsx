import Link from "next/link"
import { twMerge } from "tailwind-merge"

interface itemMenu{
    content: string,
    value: string,
    href: string,
    className ?: string
}

export default function ItemMenu({content, value,href, className} : itemMenu){
    const estilos = "p-3 text-center hover:text-white hover:bg-gray-600 duration-300 ease-in z-20";
    return(
        <li value={value} className={twMerge(estilos,className)}>
            <Link href={href} className="block">
                {content} 
            </Link>
        </li>
    )
}