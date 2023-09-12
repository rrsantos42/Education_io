import {List, ListItem, Typography} from "@material-tailwind/react";
import {CubeTransparentIcon, UserCircleIcon} from "@heroicons/react/24/outline";
import NavListMenu from "./NavListMenu/NavListMenu";
import React from "react";

const  NavBarList : React.FC = () => {
    return (
        <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
            <Typography
                as="a"
                href="#"
                variant="small"
                color="blue-gray"
                className="font-normal"
            >
                <ListItem className="flex items-center gap-2 py-2 pr-4">
                    <CubeTransparentIcon className="h-[18px] w-[18px]" />
                    Blocks
                </ListItem>
            </Typography>
            <NavListMenu />
            <Typography
                as="a"
                href="#"
                variant="small"
                color="blue-gray"
                className="font-normal"
            >
                <ListItem className="flex items-center gap-2 py-2 pr-4">
                    <UserCircleIcon className="h-[18px] w-[18px]" />
                    Account
                </ListItem>
            </Typography>
        </List>
    );
}

export default NavBarList;
