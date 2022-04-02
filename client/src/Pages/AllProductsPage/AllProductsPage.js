import styled from 'styled-components';
import Product from './Product';
import ScrollWindowTop from './../../Functions/DOM/ScrollWindowTop';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts, selectProducts, setSelectedProduct } from '../../Redux/slices/productSlice';
import FilterDataById from '../../Functions/FilderDataById';
import { ShowAddProductFN, ShowEditProductFN } from '../../Redux/slices/clickSlice';



function AllProductsPage({className=""}) {


  const dispatch=useDispatch();
  const productSelect=useSelector(selectProducts);


  useEffect(()=>{

       //Scroll To Top
    ScrollWindowTop();

  },[])


  useEffect(()=>{

    console.log();
    dispatch(fetchAllProducts());

  },[dispatch])


  const hadnleClick=(e)=>{    

    const productDiv=e.target.closest(".product");

    const selectEditBtn=e.target.closest("#edit-btn");


    if(selectEditBtn){
      
      // select Product Id
      const SelectedproductId=productDiv.dataset.id;


      // select Product
      const selectedProduct=FilterDataById(SelectedproductId,productSelect.products)
      

      // dispatch redux 
      dispatch(setSelectedProduct(selectedProduct));
      dispatch(ShowEditProductFN());

      
    }

  };

  return (
    <DIV className={`${className}`} onClick={hadnleClick}>

      <div className="all-products-wrapper">
         
        <div className="">

        {
              productSelect.products.map(productData=>(
                  <Product  key={productData._id}  productId={productData._id} className=""  {...productData}>{"txt"}</Product>

              ))
        }

        </div>

        


      </div>

    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;

    .all-products-wrapper{

      width:var(--page-content-width);
      margin-left: auto;
      margin-right: auto;   

    }
    
    
 
`;

export default AllProductsPage;
