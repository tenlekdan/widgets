import { useContext } from "react";
import DropdownList from './DropdownList';
import './Region.css'
import ContextStore, { RegionContext } from "../ContextStore";
const Region = () => {

    let { regionObj, regionInputChange } = useContext(RegionContext)


    return (

        <div className="region-container">
            <div className="drop-down">
                <input type="text" value={regionObj.inputRegion} onChange={regionInputChange} />
                {regionObj.inputRegion && regionObj.inputRegion !== regionObj.selectedRegion &&
                    <DropdownList ></DropdownList>}
            </div>
            <div className="selected-value">
                You chose: {regionObj.selectedRegion}
            </div>
            <button>Submit</button>
        </div>
    )
}

export default Region;