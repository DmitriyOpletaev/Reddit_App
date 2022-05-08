import {AppState} from "../Redux_Store";

export const communitySelector={
    isLoadingCommunityInfo:(state:AppState)=>state.communityReducer.isLoadingCommunityInfo
}