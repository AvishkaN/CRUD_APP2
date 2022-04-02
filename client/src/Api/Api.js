import axios from "axios";



// const url='http://localhost:3000/users';
const url='http://localhost:5000/users'; 

export const fetchPost=()=>axios.get(url);

export const createPost = (newPost) => axios.post(url, newPost);

export const editProduct = (id, editedProduct) => axios.patch(`${url}/${id}`, editedProduct);









