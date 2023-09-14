import React from "react";
import {useState, useEffect} from "react";
import axios from "axios";
import CardComp from "./CardComp/CardComp.tsx";
import "./Body.css"
import { useAuth } from '../../Context/ContextAuth';
import {Discipline} from "../../Interfaces/Interfaces.ts";

const Body: React.FC = () =>{

    const [disciplines, setDisciplines] = useState<[]>([]);
    const [Loading, setLoading] = useState<number>(1);
    const { currentUser } = useAuth();
    // fetch data from api
    useEffect(()=>{
        if (currentUser)
            console.log(currentUser);
        const getData = async ()=>{
            const response = await axios.get("http://localhost:3000/disciplines");
            const data: [] = response.data;
            setDisciplines(data);
            setLoading(0);
        }

        getData();
    },[])

    //Map the data to the disciplines array and render the CardComp component
    return(

        <div className="CardsContainer">
            {Loading ? <p>Loading...</p> : disciplines?.map((discipline: Discipline)=> <CardComp key={discipline.id} Discipline={discipline}/>) }
        </div>
    )
}
export default Body