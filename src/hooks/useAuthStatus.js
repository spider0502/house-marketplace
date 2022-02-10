import { useEffect, useState, useRef } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

export function useAuthStatus() {
    const [loggedIn, setLoggedIn] = useState(false)
    const [checkingStatus, setCheckingStatus] = useState(true)

    //The memory leak issue seems no business with useRef
    //but of course useRef is the right way to do it
    const isMounted = useRef(true)

    useEffect(() => {
        if (isMounted.current) {
            const auth = getAuth()
            onAuthStateChanged(auth, (user) => {

                if (user) {
                    setLoggedIn(true)
                }
                setCheckingStatus(false)

            })
        }
        //the return alone also fix the memory leak
        return () => isMounted.current = false
        //the [] alone fix the memory leak
    }, [isMounted])
    return [loggedIn, checkingStatus]
}
