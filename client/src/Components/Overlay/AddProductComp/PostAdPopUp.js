import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { ShowHideAllFN } from '../../../Redux/slices/clickSlice';
import { createProduct } from '../../../Redux/slices/productSlice';
import PopUp from '../PopUp/PopUp';







function PostAdPop({className=""}) {

    const formRef=useRef();
    const dispatch=useDispatch();
  
  
    const handleFormSubmit=(e)=>{ 
      e.preventDefault();
  
  
        const getFormData =  Object.fromEntries(new FormData(e.target));
  
        console.log(getFormData);
  
        dispatch(createProduct(getFormData));

        // Remove overlay and this component
        dispatch(ShowHideAllFN());

  
  
    };

  
  return (
    <DIV className={`${className}`}>
         <div className="PostAdPop-wrapper">
                <PopUp className="">  

                            <div className='font-3 fw-bold'>Add Product</div>

                            <div className="mt-4 post-ad- pb-5 background-yellow">

                                        <form  onSubmit={handleFormSubmit} ref={formRef} id={"myform"}>
                                                <label htmlFor="productName">Product Name:</label><br />
                                                <input type="text" id="productName" name="productName" defaultValue="John" /><br />
                                                
                                                <label htmlFor="description">description:</label><br />
                                                <input type="text" id="description" name="description" defaultValue="Doe" /><br /><br />
                                                
                                                <label htmlFor="quantity">quantity:</label><br />
                                                <input type="text" id="quantity" name="quantity" defaultValue="Doe" /><br /><br />
                                            
                                                <label htmlFor="userId">UserId:</label><br />
                                                <input type="text" id="userId" name="userId" defaultValue="Doe" /><br /><br />
                                               
                                               

                        
                    
                                                <input  type="submit" id='remove-overlay-btn' defaultValue="Submit" />

                                    </form>


                            </div>



                </PopUp>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;


 
`;

export default PostAdPop;
