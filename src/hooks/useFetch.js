import { useState } from "react"
import axios from 'axios'
export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null
    })

    const getFetch = async () =>{
        setState({
            ...state,
            isLoading: true,
        })
        const resp = await axios.get(url);
        const {results} = resp.data

        setState({
            data: results,
            isLoading: false,
            hasError: null
        })
    }

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
        getFetch,
    }
}
