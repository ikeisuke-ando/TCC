import Link from "next/link"

interface itemMenu{
    content: string,
    value: string, 
    href: string,
    className ?: string
}

export default function ItemMenu({content, value,href, className} : itemMenu){
  
    return(
        <li value={value} className="p-3 text-center inline-block 
                                hover:text-white">                       
            <Link href={href} className="block hover:underline hover:underline-offset-4 hover:decoration-[#4e90f1]">
                {content} 
            </Link>
        </li>
    )
}