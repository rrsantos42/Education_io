import React from "react";
import {Button, Dialog, DialogBody, DialogFooter, DialogHeader} from "@material-tailwind/react";
import {useState} from "react";
import {signOut} from "firebase/auth";

interface Props{
    auth: any;
}

const LogOut: React.FC<Props> = (props:Props) => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);

    const LogOutHandler = async () => {
        try {
            await signOut(props.auth);  // Sign out using Firebase auth.
            console.log("User signed out with success!");
        } catch (err) {
            console.error("Error during sign out:", err);
        }
        setOpen(!open);
    }

    return (
        <>
            <Button onClick={handleOpen} variant="gradient">
            Log Out
            </Button>
            <Dialog open={open} handler={handleOpen}>
                <DialogHeader>Log Out</DialogHeader>
                <DialogBody divider>
                    You Sure You Want To Log Out?
                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        color="green"
                        onClick={handleOpen}
                        className="mr-1"
                    >
                        <span>Cancel</span>
                    </Button>
                    <Button variant="gradient" color="red" onClick={LogOutHandler}>
                        <span>Confirm</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
);
}
export default LogOut