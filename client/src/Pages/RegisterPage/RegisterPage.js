import styled from 'styled-components';
import Link from './../../Components/UI/Link/Link';
import {useRef} from 'react';
import { createProduct } from '../../Redux/slices/productSlice';
import { useDispatch } from 'react-redux';



function RegisterPage({className=""}) {

  const formRef=useRef();
  const dispatch=useDispatch();


  const handleFormSubmit=(e)=>{ 
    e.preventDefault();


      const getFormData =  Object.fromEntries(new FormData(e.target));


      dispatch(createProduct(getFormData));


  };

  return (
    <DIV className={`${className}`}>
            <h1>AddProduct</h1>

            <form action="/action_page.php" onSubmit={handleFormSubmit} ref={formRef} id={"myform"}>
                <label htmlFor="productName">Product Name:</label><br />
                <input type="text" id="productName" name="productName" defaultValue="John" /><br />
                
                <label htmlFor="description">description:</label><br />
                <input type="text" id="description" name="description" defaultValue="Doe" /><br /><br />
                
                <label htmlFor="quantity">quantity:</label><br />
                <input type="text" id="quantity" name="quantity" defaultValue="Doe" /><br /><br />
            
                <label htmlFor="userId">UserId:</label><br />
                <input type="text" id="userId" name="userId" defaultValue="Doe" /><br /><br />
            



                
               
                <input type="submit" defaultValue="Submit" />
            </form>



      <Link to="/">All Products</Link>

    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    
 
`;

export default RegisterPage;
