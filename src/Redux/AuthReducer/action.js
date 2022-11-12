export const AUTH = "AUTH"

export const isAuth = (token)=>{
    return {
        type : AUTH,
        payload : token
    }
}