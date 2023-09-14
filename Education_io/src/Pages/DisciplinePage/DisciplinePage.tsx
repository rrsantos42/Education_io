import React from "react";
import Discipline from "../../components/Discipline/Disciplice.tsx";
import NavBar from "../../components/NavBar/NavBar.tsx";

const  DisciplinePage : React.FC = () => {
    return (
        <>
            <NavBar/>
            <Discipline/>
        </>
    );

}

export default DisciplinePage;