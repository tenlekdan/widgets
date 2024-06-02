import { ReactNode, createContext, useEffect, useReducer } from "react";

// Define Types
interface RegionObjState {
    inputRegion: string;
    selectedRegion: string;
}
interface RegionContextType {
    regionObj: RegionObjState;
    regionList: string[];
    handleSelectRegion: (region: string) => void;
    regionInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    filterRegion: () => string[] | null;
}

// Initial state values
const initalRegionObjState: { inputRegion: string; selectedRegion: string } = {
    inputRegion: "",
    selectedRegion: "",
};
const initialRegionListState: string[] = [];

// Create region context object
export const RegionContext = createContext<RegionContextType>({
    regionObj: { inputRegion: "", selectedRegion: "" },
    regionList: [""],
    handleSelectRegion: () => { },
    regionInputChange: () => { },
    filterRegion: () => [],
});

// Reducers
function regionObjReducer(state: RegionObjState, 
    action: { type: string; payload: string }): RegionObjState {
    if (action.type === "UPDATE_INPUT") {
        return {...state, inputRegion: action.payload,};
    } else if (action.type === "SELECT_REGION") {
        return {inputRegion: action.payload,selectedRegion: action.payload};
    }
    return state;
}
function regionListReducer(state: string[],
    action: { type: string; payload: string[] }): string[] {
    if (action.type === "SET_REGIONLIST") {
        return [...action.payload];
    }
    return state;
}

export default function ContextStore({ children }: { children: ReactNode }) {
    const [regionObj, regionObjDispatch] = useReducer(
        regionObjReducer,
        initalRegionObjState
    );
    const [regionList, regionListDispatch] = useReducer(
        regionListReducer,
        initialRegionListState
    );
    useEffect(() => {
        fetch("http://localhost:5173/public/countries.json")
            .then((res: Response) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error('Network issue')
            })
            .then((data) => {
                regionListDispatch({
                    type: "SET_REGIONLIST",
                    payload: data,
                });
            });
    }, []);

    function regionInputChange(event: any) {
        regionObjDispatch({
            type: "UPDATE_INPUT",
            payload: event.target.value,
        });
    }

    function handleSelectRegion(selectedRegion: string) {
        regionObjDispatch({
            type: "SELECT_REGION",
            payload: selectedRegion,
        });
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
        regionInputChange,
        filterRegion,
    };
    return (
        <RegionContext.Provider value={context}>{children}</RegionContext.Provider>
    );
}
