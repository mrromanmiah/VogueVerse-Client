// /* eslint-disable react/prop-types */
// import { createContext, useEffect, useState } from "react";
// import auth from "../firebase/firebase.config";
// import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

// export const AuthContext = createContext(null);
// const googleProvider = new GoogleAuthProvider();
// const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const createUser = (email, password, displayName, photoURL) => {
//         setLoading(true);
//         return createUserWithEmailAndPassword(auth, email, password)
//             .then(result => {
//                 const updatedUser = {
//                     ...result.user,
//                     displayName,
//                     photoURL,
//                 };
//                 setUser(updatedUser);
//                 return result;
//             });
//     }

//     const signInUser = (email, password, displayName, photoURL) => {
//         setLoading(true);
//         return signInWithEmailAndPassword(auth, email, password)
//         .then(result => {
//             const updatedUser = {
//                 ...result.user,
//                 displayName,
//                 photoURL,
//             };
//             setUser(updatedUser);
//             return result;
//         });

//     }

//     const signInWithGoogle = () => {
//         setLoading(true);
//         return signInWithPopup(auth, googleProvider);
//     }

//     const signOutUser = () => {
//         setLoading(true);
//         return signOut(auth)
//     }

//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, currentUser => {
//             setUser(currentUser);
//             setLoading(false);
//         })
//         return () => {
//             unsubscribe()
//         }
//     }, [])

//     const authInfo = { user, loading, createUser, signInUser, signInWithGoogle, signOutUser }
//     return (
//         <AuthContext.Provider value={authInfo}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;


/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const initialUser = JSON.parse(localStorage.getItem('user')) || null;
    const [user, setUser] = useState(initialUser);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password, displayName, photoURL) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const updatedUser = {
                    ...result.user,
                    displayName,
                    photoURL,
                };
                setUser(updatedUser);
                // Store user information in localStorage
                localStorage.setItem('user', JSON.stringify(updatedUser));
                return result;
            });
    }

    const signInUser = (email, password, displayName, photoURL) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const updatedUser = {
                    ...result.user,
                    displayName,
                    photoURL,
                };
                setUser(updatedUser);
                // Store user information in localStorage
                localStorage.setItem('user', JSON.stringify(updatedUser));
                return result;
            });
    }

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const signOutUser = () => {
        setLoading(true);
        // Remove user information from localStorage
        localStorage.removeItem('user');
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = { user, loading, createUser, signInUser, signInWithGoogle, signOutUser }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
