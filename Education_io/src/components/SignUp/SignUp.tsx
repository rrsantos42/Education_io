import React, { useState } from "react";
import "firebase/auth";
import { createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import {Button, Card, Checkbox, Input, Typography} from "@material-tailwind/react";
import auth from '../../Services/firebaseconfig';
import { useNavigate } from 'react-router-dom';
const SignUp: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleSignUp = async () => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Update user's profile with the name they've entered
            if (user) {
                await updateProfile(user, {
                    displayName: name
                });
                navigate('/');
            }
            console.log("User registered successfully!", user);
        } catch (err) {
            setError(err.message);
            console.error("Error during sign up:", err);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen p-6 bg-blue-gray-50 dark:bg-blue-gray-900">
            <Card color="transparent" shadow={false}>
                {error && <p className="text-red-500">{error}</p>}
                <Typography variant="h4" color="blue-gray">
                    Sign Up
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Enter your details to register.
                </Typography>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={(e) => e.preventDefault()}>
                    <div className="mb-4 flex flex-col gap-6">
                        <Input size="lg" label="Name" value={name} onChange={(e) => setName(e.target.value)} />
                        <Input size="lg" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <Input type="password" size="lg" label="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <Checkbox
                        label={
                            <Typography
                                variant="small"
                                color="gray"
                                className="flex items-center font-normal"
                            >
                                I agree to the
                                <a
                                    href="#"
                                    className="font-medium transition-colors hover:text-gray-900"
                                >
                                    &nbsp;Terms and Conditions
                                </a>
                            </Typography>
                        }
                        containerProps={{ className: "-ml-2.5" }}
                    />
                    <Button className="mt-6" fullWidth onClick={handleSignUp}>
                        Register
                    </Button>
                    <Typography color="gray" className="mt-4 text-center font-normal">
                        Already have an account?{" "}
                        <a href="/SignIn" className="font-medium text-gray-900">
                            Sign In
                        </a>
                    </Typography>
                </form>
            </Card>
        </div>
    );
}

export default SignUp;