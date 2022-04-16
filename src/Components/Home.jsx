import React, { useEffect, useState } from "react";
import { Box, Button, makeStyles, TableCell, TableRow, Card, CardActionArea, CardMedia, CardContent, Typography } from "@material-ui/core";
import { getBlogs, deleteBlog } from "../Service/Api"
import { Link } from "react-router-dom"
import Image from "../Assets/back.jpg"
import Home1 from "../Assets/Homepage.png"
import Image1 from "../Assets/one.jpg"
import Image2 from "../Assets/two.jpg"
import Image3 from "../Assets/threee.jpg"
import Image4 from "../Assets/four.jpg"
const images = [
    Image,
    Image1,
    Image2,
    Image3,
    Image4
]

const RandomImage = () => {
    const image = images[Math.floor(Math.random() * images.length)];
    return <CardMedia component = "img" height = "140" image = { image } alt = "green iguana" />;
}


const Home = () => {

    const [addData, setAddData] = useState([]);
    useEffect(() => {
        getAllBlogs();
    }, [])

    const getAllBlogs = async() => {
        const response = await getBlogs();
        console.log(response.data);
        setAddData(response.data);

    }
    const deleteBlogData = async(id) => {
        await deleteBlog(id)
        getAllBlogs();
    }


    return ( < Box >
                <Typography style = {{ textAlign: "center" }} variant = "h2" > Welcome! < /Typography>
                <Typography style = {{ textAlign: "center" }} variant = "h5" > Blog Website < /Typography>
                <div className = "container" >
                  <div className = "row" >
                    <div className = "col-md-4" >
                      {
                         addData.map((blog) => (
                           <Card sx = {{ maxWidth: 345 }} >
                             <CardActionArea > { RandomImage() }
                               <CardContent >
                                 <Typography gutterBottom variant = "h4" component = "div" > { blog.title } </Typography>
                                 <Typography variant = "body2" color = "text.secondary" > { blog.content } < /Typography >
                                 <Typography variant = "caption" color = "text.secondary" > by { blog.byName } - { blog.contact } < /Typography>
                               < /CardContent >
                            </CardActionArea>
                          < /Card >
                      ))}
                      </div>
                   </div > 
                </div>
           < /Box >
    );
};

export default Home;
