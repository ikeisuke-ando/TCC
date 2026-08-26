export type Data = {
    id:number,
    titulo:string,
    texto:string
}

export type tipoAcao = "somar" | "subtrair";

export async function getData(){
        const data = await fetch('http://localhost:3000/data/data.json');
        const response:Data[] = await data.json();
        return response;
}

