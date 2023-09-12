import React from "react";
import {useState, useEffect} from "react";
import axios from "axios";
import CardComp from "./CardComp/CardComp.tsx";
import "./Body.css"
interface Discipline {
    id: number;
    discipline: {
        [key: string]: string[];
    };
}

interface Disciplines {
    disciplines: Discipline[];
}
const Body: React.FC = () =>{

    const [disciplines, setDisciplines] = useState<Disciplines | []>([]);
    const [Loading, setLoading] = useState<number>(1);

    // fetch data from api
    useEffect(()=>{
        const getData = async ()=>{
            const response = await axios.get("http://localhost:3000/disciplines");
            const data: Disciplines = response.data;
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