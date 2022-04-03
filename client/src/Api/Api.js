import axios from "axios";



const url='http://localhost:5000/products'; 

export const fetchPost=()=>axios.get(url);

export const createPost = (newPost) => axios.post(url, newPost);

export const editProduct = (id, editedProduct) => axios.patch(`${url}/${id}`, editedProduct);

export const deleteProduct = (id) => axios.delete(`${url}/${id}`);




const urlUsers='http://localhost:5000/users'; 

// export const fetchPost=()=>axios.get(url);

export const SignUp = (newUser) => axios.post(urlUsers, newUser);

// export const editProduct = (id, editedProduct) => axios.patch(`${url}/${id}`, editedProduct);

// export const deleteProduct = (id) => axios.delete(`${url}/${id}`);









