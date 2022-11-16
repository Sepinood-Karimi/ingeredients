import {useReducer} from "react";

const initialHttpState = {
    loading: false,
    data: null,
    error: null,
    extra: null
};

const httpReducer = (prevHttpState, action) => {
    switch (action.type) {
        case 'SEND':
            return {
                loading: true,
                data: null,
                error: null,
                extra: null
            }
        case 'RESPONSE':
            return {
                ...prevHttpState,
                loading: false,
                data: action.data,
                extra: action.extra
            }
        case 'ERROR':
            return {
                loading: false,
                error: action.error
            }
        case 'CLEAR':
            return initialHttpState
        default:
            throw new Error('Should not get here!')
    }
};


const useHttp = ({successCallback, failCallback} = {}) => {
    const [httpState, httpDispatch] = useReducer(httpReducer, initialHttpState);

    const sendRequest = async (url, method, body, extra) => {
        httpDispatch({type: 'SEND'});
        try {
            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error('Oops!! Request Failed!')
            }
            if (response.ok) {
                httpDispatch({type: 'RESPONSE', data, extra});
            }
            successCallback?.({data, extra});
        } catch (e) {
            httpDispatch({type: 'ERROR', error: e.message});
            failCallback?.();
        }
    };

    const clear = () => {
        httpDispatch({type: 'CLEAR'});
    };

    return {
        data: httpState.data,
        loading: httpState.loading,
        error: httpState.error,
        extra:httpState.extra,
        clear,
        sendRequest
    };
};

export default useHttp;