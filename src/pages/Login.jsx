import React, { useEffect } from "react";
import { app } from "../components/config/firebase.config";
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { FcGoogle } from 'react-icons/fc'
import { useNavigate } from "react-router-dom";
import { LoginBg } from '../assets'
import { logo } from "../assets";

const Login = ({ setAuth }) => {
    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const navigate = useNavigate();

    const loginWithGoogle = async () => {
        await signInWithPopup(firebaseAuth, provider).then((userCred) => {
            if (userCred) {
                setAuth(true);
                window.localStorage.setItem("auth", "true");
                firebaseAuth.onAuthStateChanged((userCred) => {
                    if (userCred) {
                        userCred.getIdToken().then((token) => {

                        })
                        navigate("/", { replace: true })
                    }
                    else {
                        setAuth(false);
                        navigate("/login")
                    }
                })
            }

        })
    }
    useEffect(() => {
        if (window.localStorage.getItem('auth') === "true") {
            navigate("/", { replace: true })
        }
    }, [])
    return (
        <div className="relative w-screen h-screen">
            <video src={LoginBg}
                type="video/mp4"
                autoPlay
                muted
                loop
                className='w-full h-full object-cover'

            />
            <div className="absolute inset-0 bg-darkOverlay flex items-center justify-center p-4">
                <div className="w-800 md:w-375 p-4 bg-black shadow-2xl rounded-md backdrop-blur-md flex flex-col items-center justify-center">
                    <h1 className="font-bold text-bblue text-4xl mb-2 cursor-default"
                    >
                        Welcome to Beats
                    </h1>

                    <p className="text-bbblue text-lg text-center mb-4 cursor-default">

                        A Popular digital music streaming service
                    </p>

                    <img src={logo} alt="logo" className="w-full h-14 mb-20 object-contain" />
                    <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-cardOverlay cursor-pointer hover:bg-card hover:shadow-md duration-100 ease-in-out transition-all" onClick={loginWithGoogle}>
                        <FcGoogle className='text-xl' />
                        Sign in with Google
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;