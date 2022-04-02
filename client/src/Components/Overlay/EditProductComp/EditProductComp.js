import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { editProduct } from '../../../Api/Api';
import { ShowHideAllFN } from '../../../Redux/slices/clickSlice';
import { createProduct, EditProduct, selectProducts } from '../../../Redux/slices/productSlice';
import PopUp from '../PopUp/PopUp';







function EditProductComp({className=""}) {

    const formRef=useRef();
    const dispatch=useDispatch();
    const productSelect=useSelector(selectProducts).selectedProduct;
  
  
    const handleFormSubmit=(e)=>{ 
       e.preventDefault();
       console.log(productSelect._id);  
  
  
        //  get all form data as javascript object 
        const getFormData =  Object.fromEntries(new FormData(e.target));
        getFormData._id=productSelect._id;    // add id to new object


  
        // dispacth to rediux     
        dispatch(EditProduct({id:productSelect._id,editedProduct:getFormData}));

        // Remove overlay and this component
        dispatch(ShowHideAllFN());

  
  
    };

  
  return (
    <DIV className={`${className}`}>
         <div className="EditProductComp-wrapper">
                <PopUp className="">  

                            <div className='font-3 fw-bold'>Edit Product</div>

                            <div className="mt-4 post-ad- pb-5 background-yellow">

                                        <form  onSubmit={handleFormSubmit} ref={formRef} id={"myform"}>
                                                <label htmlFor="productName">Product Name:</label><br />
                                                <input type="text" id="productName" name="productName" defaultValue={productSelect.productName} /><br />
                                                
                                                <label htmlFor="description">description:</label><br />
                                                <input type="text" id="description" name="description"   defaultValue={productSelect.description}  /><br /><br />
                                                
                                                <label htmlFor="quantity">quantity:</label><br />
                                                <input type="text" id="quantity" name="quantity"   defaultValue={productSelect.quantity}  /><br /><br />
                                            
                                                <label htmlFor="userId">UserId:</label><br />
                                                <input type="text" id="userId" name="userId"   defaultValue={productSelect.userId}  /><br /><br />
                                               
                                               

                        
                    
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

export default EditProductComp;
