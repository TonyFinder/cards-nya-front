let initialState: LoginInitialStateType = {
    isLoggedIn: false,
    error: "",
}

export const loginReducer = (state: LoginInitialStateType = initialState, action: LoginActionTypes): LoginInitialStateType => {
    switch (action.type) {
        case 'SET_IS_LOGIN':
            return {...state, isLoggedIn: action.value}
        case "SET_ERROR":
            return {...state, error: action.value}
        default:
            return state
    }
}


// actions
export const setIsLogin = (value: boolean) => ({type: 'SET_IS_LOGIN', value} as const)
export const setError = (value: string) => ({type: 'SET_ERROR', value} as const)

// thunks

// types
export type LoginActionTypes = setIsLoginType | setErrorType

export type LoginInitialStateType = {
    isLoggedIn: boolean
    error: null | string,
}

export type setIsLoginType = ReturnType<typeof setIsLogin>
export type setErrorType = ReturnType<typeof setError>
