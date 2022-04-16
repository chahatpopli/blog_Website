import React, { useEffect, useState } from 'react';
import { Box, makeStyles, FormGroup, FormControl, InputLabel, TextField, Input, Button, Typography } from "@material-ui/core";
import { addBlog, editBlog, getBlogs } from "../Service/Api"
import { useNavigate, useParams } from "react-router-dom"

const useStyles = makeStyles({
    container: {
        width: "50%",
        margin: "5% 0 0 25%",
        "& > *": {
            marginTop: "20px"
        }
    },
    button: {
        backgroundColor: "#0DCAF0"
    }
})

const initialValues = {
    title: '',
    content: '',
    byName: '',
    contact: ''
}

const EditBlog = () => {
    const [blog, setBlog] = useState(initialValues);
    const { title, content, byName, contact } = blog;
    const { id } = useParams();
    const classname = useStyles();
    const history = useNavigate();

    useEffect(() => {
        loadBlogData();
    }, [])
    const loadBlogData = async() => {
        const response = await getBlogs(id);
        setBlog(response.data)
    }

    const valueChange = (e) => {
        console.log(e.target.value)
        setBlog({...blog, [e.target.name]: e.target.value })
    }

    const editBlogDetail = async() => {
        await editBlog(id, blog)
        history("/")
    }


    return (<Box>
               <FormGroup className={classname.container}>
                <Typography variant="h3"> Update User </Typography>
                <FormControl>
                  <InputLabel> Title </InputLabel>
                  <Input onChange={(e) => valueChange(e)} name="title" value={title} />
                </FormControl>
                <FormControl>
                  <InputLabel> Content </InputLabel>
                  <Input onChange={(e) => valueChange(e)} name="content" value={content} />
                </FormControl>
                <FormControl>
                  <InputLabel> Writer Name </InputLabel>
                  <Input onChange={(e) => valueChange(e)} name="byName" value={byName} />
                </FormControl>
                <FormControl>
                  <InputLabel> Writer Contact No. </InputLabel>
                  <Input onChange={(e) => valueChange(e)} name="contact" value={contact} />
                </FormControl>
                <Button variant="contained" color="primary" onClick={() => editBlogDetail()} >
                  Update Blog
                </Button>
              </FormGroup>
          </Box>
    );
};

export default EditBlog;
