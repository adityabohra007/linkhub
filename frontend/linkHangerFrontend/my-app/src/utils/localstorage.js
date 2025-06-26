
export const setLocalStorage = (name, text) => {
    localStorage.setItem(name, text)
}

export const getLocalStorage = (name) => {
    const data = localStorage.getItem(name)
    return data
}
