import axios from "axios";

export function apiErrors(error:unknown){
    if(axios.isAxiosError(error)){
        console.log('func api code ---------------------------- '+error.code)
        console.log('func api name ---------------------------- '+error.name)
        console.log('func api stack ---------------------------- '+error.stack)
        console.log('func api message ---------------------------- '+error.message)
        console.log(error.config)
        return error.message
    }else{
        return 'Ой, щось пішло не так'
    }
}