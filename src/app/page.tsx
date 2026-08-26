import { Data, getData } from "../models/getData";
import AreaPrincipal from "../widgets/AreaPrincipal";
import Topo from "@/src/widgets/Topo";
import AreaMenu from "../widgets/AreaMenu";
import AreaConteudo from "../widgets/AreaConteudo";

export default async function Home() {
    const dado:Data[] = await getData();

    return (
          <AreaPrincipal>
                    <Topo/>
                    <AreaMenu/> 
                    <AreaConteudo dadoJson={dado}/>
          </AreaPrincipal>
    );
}
