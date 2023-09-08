import { useContext } from "react";
import DispatchVideoContext from "../context/DispatchVideoContext";

function useVideoDispatch(){
    return useContext(DispatchVideoContext)
}

export default useVideoDispatch;