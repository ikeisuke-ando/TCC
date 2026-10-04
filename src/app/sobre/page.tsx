import { Data, getData } from "@/src/models/getData";
import AreaPrincipal from "@/src/widgets/AreaPrincipal";
import Topo from "@/src/widgets/Topo";
import AreaConteudo from "@/src/widgets/AreaConteudo";

export default async function Sobre() { 
    const dado:Data[] = await getData();

    return (
          <AreaPrincipal>
                    <Topo/>
                    <AreaConteudo dadoJson={dado}/>
          </AreaPrincipal>
    );
}
