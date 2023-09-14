import React from "react";
import {useParams} from "react-router-dom";
import {useState} from "react";
import {Discipline as DisciplineType} from "../../Interfaces/Interfaces.ts";
import axios from "axios";
const Discipline : React.FC = () => {

    const {disciplineId} = useParams<string>();
    const [discipline, setDiscipline] = useState<DisciplineType | null>(null);
    const [Loading, setLoading] = useState<number>(1);
    const [theOne, setTheOne] = useState<string>("");
    React.useEffect(()=>{
        const getData = async ()=>{
            const response = await axios.get(`http://localhost:3000/disciplines/${disciplineId}`);
            const data: DisciplineType = await response.data;
            const [theOne] = Object.keys(data.discipline);
            setTheOne(theOne);
            setDiscipline(data);
            setLoading(0);
            console.log(theOne);
        }

        getData();
    },[])


    return (
        <>
            {Loading ? <p>Loading...</p> : <h1>{theOne}</h1>}
        </>
    );


}

export default Discipline;