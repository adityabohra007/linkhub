// utils/withAuth.js
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const withAuth = (Component) => {
    return function ProtectedComponent(props) {
        const router = useRouter()
        const token = useSelector((state) => state.auth.token)


        const [checked, setChecked] = useState(false);

        useEffect(() => {
            const localToken = localStorage.getItem('token');

            if (!token && !localToken) {
                router.replace('/login');
            }
            setChecked(true)
        }, [token])
        if (!checked) return <div>Loading...</div>;
        if (!token && !localStorage.getItem('auth_token')) return null;
        return <Component {...props} />
    }
}

export default withAuth
