import {PostData} from "../types/redux_types/posts-types";

export function changeArrayElement(communityId:string, value:boolean,communityArray:Array<PostData>){


    const newArray:PostData[] =  communityArray.map((elem)=>{
       const newElem:PostData ={
           ...elem,
           community:{
               ...elem.community,
               authUserInfo:{
                   ...elem.community.authUserInfo,
                   isLoadingSubscribing:communityId === elem.community.communityId ? value :  elem.community.authUserInfo.isLoadingSubscribing
               }
           }
       }
       return newElem
    })
    return newArray
}

export function changeArrayElement2(communityId:string, value:boolean,communityArray:Array<PostData>){
    const newArray:PostData[] =  communityArray.map((elem)=>{
        const newElem:PostData ={
            ...elem,
            community:{
                ...elem.community,
                authUserInfo:{
                    ...elem.community.authUserInfo,
                    userIsSubscribed:communityId === elem.community.communityId ? value :  elem.community.authUserInfo.userIsSubscribed
                }
            }
        }
        return newElem
    })
    return newArray
}