import ContextStore from "../ContextStore";
import Modal from "../Modal/Base";
import Region from "../Region/Region";

export default function Home() {
    return (
        <>
            Home page
            <ContextStore>
               <Region></Region>
            </ContextStore>
            <Modal></Modal>
        </>
    )
}