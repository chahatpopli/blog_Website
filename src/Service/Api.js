import axios from 'axios';


const url = "http://127.0.0.1:3003/blogs";

export const getBlogs = async(id) => {
    id = id || '';
    return await axios.get(`${url}/${id}`);
}

export const addBlog = async(blog) => {
    return await axios.post(url, blog);
}

export const editBlog = async(id, blog) => {
    return await axios.put(`${url}/${id}`, blog);
}


export const deleteBlog = async(id) => {
    return await axios.delete(`${url}/${id}`);
}
