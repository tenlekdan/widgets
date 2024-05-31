import { createContext, useEffect, useReducer, useState } from "react";


export const RegionContext = createContext({
    regionObj: { inputRegion: '', selectedRegion: '' },
    regionList: [''],
    handleSelectRegion: (region: string) => { },
    regionInputChange: (event: any) => { },
    filterRegion: () => []
})

function regionObjReducer(state: any, action: { type: string, payload: {} }) {
    if (action.type === 'UPDATE_INPUT') {
        return {
            ...state,
            inputRegion: action.payload,
        }
    } else if (action.type === 'SELECT_REGION') {
        return {
            inputRegion: action.payload,
            selectedRegion: action.payload
        }
    }
    return state
}

function regionListReducer(state: any, action: { type: string, payload: [] }) {
    if (action.type === 'SET_REGIONLIST') {
        return [
            ...action.payload
        ]
    }
}
const initalRegionObjState = { inputRegion: '', selectedRegion: '' };
export default function ContextStore({ children }: { children: any }) {
    const [regionObj, regionObjDispatch] = useReducer(regionObjReducer, initalRegionObjState)
    const [regionList, regionListDispatch] = useReducer(regionListReducer, []);
    useEffect(() => {
        fetch('http://localhost:5173/public/countries.json')
            .then(((res: Response) => {
                if (res.status) {
                    return res.json();
                }
            })).then((data) => {
                regionListDispatch({
                    type: 'SET_REGIONLIST',
                    payload: data
                })
            })
    }, [])

    function regionInputChange(event: any) {
        regionObjDispatch({
            type: 'UPDATE_INPUT',
            payload: event.target.value
        })
    }

    function handleRegionSelect(region: string) {
        regionObjDispatch({
            type: 'UPDATE_INPUT',
            payload: region
        })
    }

    function handleSelectRegion(selectedRegion: string) {
        regionObjDispatch({
            type: 'SELECT_REGION',
            payload: selectedRegion
        })
    }

    function filterRegion(): Array<string> | null {
        if (regionObj.inputRegion && regionList) {
            return regionList.filter((text: string) => {
                return text.toLowerCase().includes(regionObj.inputRegion.toLowerCase());
            }) as any;
        }
        return null;
    }
    const context = {
        regionObj,
        regionList,
        handleSelectRegion,
        regionInputChange: regionInputChange,
        filterRegion
    }
    return <RegionContext.Provider value={context}>
        {children}
    </RegionContext.Provider>
}