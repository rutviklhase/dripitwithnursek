import React from "react";
import { ReactDOM } from "react";
import './Services.scss';
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Card } from "@mui/material";
import ReactElasticCarousel from "react-elastic-carousel";
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardImage from "../../assets/LOGOW.png";
import axios from 'axios';

function Example(props)
{
    var items = [
        {
            img: "Random Name #1",
            description: "Probably"
        },
        {
            img: "Random Name #2",
            description: "Hello World!"
        },
        {
            img: "Random Name #2",
            description: "Hello World!"
        },
        {
            img: "Random Name #2",
            description: "Hello World!"
        },
        {
            img: "Random Name #2",
            description: "Hello World!"
        }
    ]

    const [aitems, setaitems] = React.useState("");
    React.useEffect(()=>{
        axios.get("http://localhost:5000/getall").then((response)=>{
            setaitems(response.data);
        });
    },[])

    // console.log(aitems);
    //console.log();



    return (
        <ReactElasticCarousel className = "Services" itemsToShow={3}>
            {
                aitems.map( (item, i) => <Item key={i} item={item} /> )
            }
        </ReactElasticCarousel>
    )
}

function Item(props)
{
    return (
        <div className = "card">
        <Card className = "Card" variant="outlined">
            <CardMedia className = "CardImage" component="img" image="https://i.imgur.com/HImZn9P.jpeg" height="100vw"/>
            <CardContent>
            <div className="desc">
                 <p className="carddesc">{props.item.description}</p>
            </div>
            </CardContent>
            

        </Card  >
        </div>

    )
}

export default Example;