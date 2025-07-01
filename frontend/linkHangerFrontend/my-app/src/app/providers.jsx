// app/providers.js
'use client';

import { Provider } from 'react-redux';
import { useEffect } from 'react';
import { store } from '../store';
import { addToken } from '../features/auth';
import { useUserQuery } from '@/api/authApi';
import { useRouter } from 'next/navigation';

export default function Providers({ children }) {
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            console.log('loading token', token)
            store.dispatch(addToken(token));
        }
    }, []);

    return <Provider store={store}>
        <Authenticate>
            {children}
        </Authenticate>
    </Provider>;
}

const Authenticate = ({ children }) => {
    const router = useRouter()
    const user = useUserQuery()

    useEffect(() => {
        if (!user.isUninitialized && user.isError) {
            console.log('Error in authenticate')
            router.push('/login')
        }
    }, [user])
    if (user.isLoading || user.isFetching || user.isUninitialized) return <h4>Loading</h4>
    else return <>{children}</>

}