import { storage } from "./index"

const setIsAuth = (value: '1' | '0') => {
    storage.setItem('isAuth', value)
}

const getIsAuth = () => storage.getItem('isAuth')

export const adminStorage = {
    setIsAuth,
    getIsAuth
}