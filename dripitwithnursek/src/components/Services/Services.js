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

    const [aitems, setaitems] = React.useState([]);
    React.useEffect(()=>{
        axios.get("http://localhost:5000/getall").then((response)=>{
            setaitems(response.data);
        });
    },[])


    return (
        <div className="ServicesPage">
            <div className="headsubs">
                <h1>Mobile IV Therapy and Medical Service</h1>
                <h3>Now offering a variety of Treatments</h3>
            </div>

        <ReactElasticCarousel className = "Services" itemsToShow={3}>
            {
                aitems.map( (item, i) => <Item key={i} item={item} /> )
            }
        </ReactElasticCarousel>
        </div>
        
    )
}

function Item(props)
{
    return (
        
            
            <div className = "card">
            <Card sx = {{ maxWidth : 300, backgroundColor : "black"}}>
                <CardMedia sx = {{ maxWidth : 300}} className = "CardImage" component="img" image={props.item.img}/>
                <CardContent sx = {{ color: "white", display:"flex", flexDirection:"column", alignItems:"center"}}>
                <div className="price">
                        <p className="cardprice">${props.item.price}</p>
                </div>
                <div className="desc">
                        <p className="carddesc">{props.item.description}</p>
                </div>
                </CardContent>
                

            </Card  >
            </div>



    )
}

export default Example;
