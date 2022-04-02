import styled from 'styled-components';



function Product({
                    className="",
                    productName,
                    quantity,
                    description,
                    userId,
                    productId,
                    createdAt,
                }) {

  return (
    <DIV className={`product ${className} border  w-20 mb-3 `}   data-id={productId} >

            <div className="">{productName}</div>

            <div className="">{description}</div>

            <div className="">{quantity}</div>
            <div className="">{userId}</div>
            <div className="">{createdAt}</div>


            <div id="edit-btn" className="text-color-red font-2  cursor-p ">EDIT</div>

            .

    </DIV>
  );
}


const DIV=styled.div`
    
 
`;

export default Product;
