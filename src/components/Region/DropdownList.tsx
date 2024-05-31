
import { useContext } from 'react'
import './Dropdown.css'
import { RegionContext } from '../ContextStore';

const DropdownList = () => {
    let {handleSelectRegion, filterRegion} = useContext(RegionContext)
    let filteredList: Array<string | null> = filterRegion();

    return (
        <>
            {filteredList.length &&
                <ul className={`dropdown-list`} >
                    {filteredList && filteredList.map((region: string | null) => (region && <li key={region} onClick={() => handleSelectRegion(region)}>{region}</li>))}
                </ul>
            }
            {!filteredList.length && <ul className='dropdown-list'><li>No Match found</li></ul>}
        </>
    )
}

export default DropdownList