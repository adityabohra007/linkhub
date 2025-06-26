import axios from 'axios'
export const loginUser = async (email: string, password: string) => {
    const res = await axios.post('/api/dj-rest-auth/login', { email, password })
    if (res.status != 200) {
        throw new Error('Unable to login')
    }
    const data = res.data
    return data
}
export const checkAuthStatus = async () => {
    const res = await axios.get('/api/dj-rest-auth/user/')
    if (res.status != 200) {
        throw new Error('Unable to authenicate')
    }
    const data = res.data
    return data

}