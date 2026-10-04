import AreaMenu from "./AreaMenu";
export default function Topo(){
    return (
        <header className="w-full p-5 mb-5 h-fit border-amber-900 shadow-md shadow-gray-400 bg-fundo-topo text-white">
                <div className="w-11/12 flex justify-between mx-auto">
                    <h1 className=" flex items-center">TITULO</h1>
                    <AreaMenu/>
                </div>
        </header>
    );
}