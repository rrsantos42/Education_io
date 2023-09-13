import React, { useState } from "react";
import {
    Card,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import { signInWithEmailAndPassword} from 'firebase/auth';
import auth from '../../Services/firebaseconfig';
import { useNavigate } from 'react-router-dom';
const SignIn: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleSignIn = async () => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            if (user) {
                navigate('/');
                console.log("User signed in with success!", user);
            } else {
                console.log("No user data available.");
            }

        } catch (err) {
            setError(err.message); 
            console.error("Error during sign in:", err);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen p-6 bg-blue-gray-50 dark:bg-blue-gray-900">
            <Card color="transparent" shadow={false}>
                {error && <p className="text-red-500">{error}</p>}
                <Typography variant="h2" color="blue-gray">
                    Sign In
                </Typography>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={e => e.preventDefault()}>
                    <div className="mb-4 flex flex-col gap-6">
                        <Input size="lg" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <Input type="password" size="lg" label="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <Button className="mt-10 text-1xl" fullWidth onClick={handleSignIn}>
                        Sign In
                    </Button>
                    <Typography color="gray" className="mt-4 text-center font-normal">
                        Don't have an account?{" "}
                        <a href="/signUp" className="font-medium text-gray-900">
                            Sign Up
                        </a>
                    </Typography>
                </form>
            </Card>
        </div>
    );
}

export default SignIn;