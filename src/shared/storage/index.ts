const setItem = (key: string, value: string) => {
    window.localStorage.setItem(key, value)
}

const getItem = (key: string) => {
    return window.localStorage.getItem(key)
}

export const storage = {
    setItem,
    getItem
}