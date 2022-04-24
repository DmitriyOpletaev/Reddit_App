import {Action, applyMiddleware, combineReducers, createStore,compose} from "redux"
import thunkMiddleware,{ThunkAction} from "redux-thunk"
import authReducer from "./reducers/auth_reducer";
import postsReducer from "./reducers/posts_reducer";
import {searchReducer} from "./reducers/search_reducer";
import {communityReducer} from "./reducers/community_reducer";

const rootReducer = combineReducers({
    authReducer,
    postsReducer,
    searchReducer,
    communityReducer
})




// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace:true,traceLimit:25}) || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;
type RootReducer = typeof rootReducer
export type AppState = ReturnType<RootReducer>


export type InferActionsTypes<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never


export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppState, unknown, A>
