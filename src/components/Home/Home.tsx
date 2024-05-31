import ContextStore from "../ContextStore";
import Region from "../Region/Region";

export default function Home() {
    return (
        <>
            Home page
            <ContextStore>
               <Region></Region>
            </ContextStore>
        </>
    )
}