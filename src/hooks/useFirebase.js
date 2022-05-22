import { useEffect, useState } from "react";
import firebaseInitAuthentication from "../Firebase/firebaseInit";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, onAuthStateChanged, signOut, createUserWithEmailAndPassword, updateProfile, sendEmailVerification, sendPasswordResetEmail } from 'firebase/auth'
import { toast } from "react-toastify";


firebaseInitAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [isLoading2, setIsLoading2] = useState(true);

    const auth = getAuth()

    // Google SignIn
    const googleSignIn = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
    }

    // Email Sign In
    const login = (email, password, location, navigate, reset) => {
        setIsLoading(true);
        setError('');
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user)
                const url = location?.state?.from || '/dashboard';
                navigate(url);
                reset();
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    // Reset Password
    const resetPassword = (email) => {
        setError('');
        sendPasswordResetEmail(auth, email)
            .then(() => {
                toast.success('Password reset email sent successfully');
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
            .finally(() => {
                setIsLoading(false);
            });
    }


    // Create User with  Email And Pass
    const signUp = (email, password, name, reset, navigate) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                user.displayName = name;
                updateProfile(auth.currentUser, { displayName: name })
                    .then(() => {

                    })
                    .catch((error) => {
                        setError(error.Message)
                    })
                setUser(user);
                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        toast.success('Verification Mail Sent Your Email');
                    });
                navigate('/dashboard')
                reset();
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    // Current User
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {

            }
            setIsLoading(false);
            setIsLoading2(false);
        })
    }, [auth]);

    // Logout
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser(null);
                console.log('Logged Out Successfully');
            })
    };


    return {
        user, setUser,
        error, setError,
        googleSignIn,
        login,
        resetPassword,
        signUp,
        isLoading,
        setIsLoading,
        isLoading2,
        setIsLoading2,
        logOut
    }

}

export default useFirebase;