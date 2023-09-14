import { useEffect, useState} from "react";
import React from "react";
import NavBarList from "./NavBarList/NavBarList.tsx";
import {
    Navbar,
    Collapse,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";
import {Bars3Icon, XMarkIcon,} from "@heroicons/react/24/outline";
import { useNavigate} from 'react-router-dom';
import { useAuth} from '../../Context/ContextAuth';
import {signOut, onAuthStateChanged } from "firebase/auth";
import auth from "../../Services/firebaseconfig"
import LogOut from "./LogOut/LogOut.tsx";

const  NavBar : React.FC = () =>{
    const [openNav, setOpenNav] = React.useState(false);
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false)


    // This function is used to close the navbar when the screen size is greater than 960px
    useEffect(() => {
        // Set up an auth state listener
        const unsubscribe = onAuthStateChanged(auth, user => {
            setIsLoggedIn(!!user);  // Update isLoggedIn based on whether a user is present
        });
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
        return () => unsubscribe();
    }, []);


    // This function is used to navigate to the SignUpPage page
    const SignUpHandler = () => {
         navigate('/SignUp');
        console.log("SignUp");
    }

    const SignInHandler = () => {
        navigate('/SignIn');
        console.log("SignIn");
    }

    return (
        <Navbar className="mx-auto max-w-screen-3xl" variant="filled">
            <div className="flex items-center justify-between text-blue-gray-900">
                <Typography
                    as="a"
                    href="#"
                    variant="h6"
                    className="mr-4 cursor-pointer py-1.5 lg:ml-2"
                >
                    EDUCATION.IO
                </Typography>
                <div className="hidden lg:block">
                    <NavBarList />
                </div>
                <div className="hidden gap-2 lg:flex">
                    {isLoggedIn ? (
                        <LogOut auth={auth}/>
                    ) : (
                        <>
                            <Button variant="text" size="sm" color="blue-gray" onClick={SignInHandler}>
                                Sign In
                            </Button>
                            <Button variant="gradient" size="sm" onClick={SignUpHandler}>
                                Sign Up
                            </Button>
                        </>
                    )}
                </div>
                <IconButton
                    variant="text"
                    color="blue-gray"
                    className="lg:hidden"
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                    ) : (
                        <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <NavBarList/>
                <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
                    <Button variant="outlined" size="sm" color="blue-gray" fullWidth onClick={SignInHandler}>
                        Sign In
                    </Button>
                    <Button variant="gradient" size="sm" fullWidth onClick={SignUpHandler}>
                        Sign Up
                    </Button>
                </div>
            </Collapse>
        </Navbar>
    );
}
export default NavBar