type Key = 'refreshToken'

export const appLocalStorage={
    setItem:(key:Key,value:string)=>localStorage.setItem(key,value),
    getItem:(key:Key)=> localStorage.getItem(key),
    removeItem:(key:Key)=>localStorage.removeItem(key)
}
