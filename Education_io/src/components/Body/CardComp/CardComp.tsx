import React, {useEffect} from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./CardComp.css"
interface Discipline {
    id: number;
    discipline: {
        [key: string]: string[];
    };
}
interface Props {
    Discipline: Discipline
}
const CardComp : React.FC<Props> = (props: Props)=>{

    //Get the discipline name from the object key and use it to get the image
    let [discipline] = Object.keys(props.Discipline.discipline)
    let ImgSrc: string = `/assets/Images/${discipline}.jpg`;

    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={ImgSrc} className="custom-card-img"/>
            <Card.Body>
                <Card.Title>{discipline}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}
export default CardComp