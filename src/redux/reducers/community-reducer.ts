import {BaseThunkType, InferActionsTypes} from "../Redux_Store"



let initialState = {
    a:'asd'
}
type InitialState = typeof initialState

export const communityReducer = (state = initialState, action: Actions): InitialState => {

    switch (action.type) {
        case 'REDDIT/SET_IS_LOADING':
            return {
                ...state, a: "asd"
            }

        default:
            return state
    }
}

type Actions = InferActionsTypes<typeof communityActions>
type ThunkType = BaseThunkType<Actions>

const communityActions = {
    setIsLoading: (isLoading: boolean) => ({
        type: 'REDDIT/SET_IS_LOADING', payload: isLoading
    } as const),
}





