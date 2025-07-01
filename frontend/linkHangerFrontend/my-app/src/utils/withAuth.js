// utils/withAuth.js
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useGetUserQuery, useUserQuery } from '@/api/authApi'

const withAuth = (Component) => {
    return <Component />
    return function ProtectedComponent(props) {
        const router = useRouter()
        const user = useUserQuery()


        const [checked, setChecked] = useState(false);

        useEffect(() => {

            if (user.isLoading == false && !user.isSuccess) {
                router.replace('/login');
            }
            setChecked(true)
        }, [user])
        if (user.isLoading) return <div>Loading...</div>;
        // if (!token && !localStorage.getItem('auth_token')) return null;
        return <Component {...props} />
    }
}

export default withAuth
