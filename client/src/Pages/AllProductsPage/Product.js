import styled from 'styled-components';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditIcon from '@mui/icons-material/EditOutlined';



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
    <DIV className={`product  border-radius-20 pt-2 ps-2 pe-2 mb-3 border  ms-3 me-4  mt-1  box-shadow-normal  ${className}     `}   data-id={productId} >

            <div className="text-center   mt-1 ">
                <div className='font-1-6  text-color-grey-ori fw-bold   ' >Product Name</div>
                <div className='mt-0-5-' >{productName}</div>
            </div>


            <div className="text-center   mt-1 ">
                <div className='font-1-6  text-color-grey-ori fw-bold   ' >Description</div>
                <div className='mt-0-5-' >{description}</div>
            </div>


            <div className="text-center  mt-1  ">
                <div className='font-1-6  text-color-grey-ori fw-bold   ' >Quantity</div>
                <div className='mt-0-5-' >{quantity}</div>
            </div>

            <div className="text-center   mt-1 ">
                <div className='font-1-6  text-color-grey-ori fw-bold   ' >userId</div>
                <div className='mt-0-5-' >{userId}</div>
            </div>

          



                {/* Buttons  */}
              <div className="display-flex align-item-center  mt-4">
                
                    <EditIcon id="edit-btn" className='font-2-9 cursor-p background-hover  text-color-primary'></EditIcon>
                    <DeleteOutlinedIcon id="delete-btn"  className='font-2-9 cursor-p ms-auto background-hover text-color-red'  ></DeleteOutlinedIcon>
              </div>

            {/* <div id="edit-btn" className="text-color-green font-2  cursor-p ">EDIT</div>
            <div id="delete-btn" className="text-color-red font-2  cursor-p ">DELETE</div> */}

            .

    </DIV>
  );
}


const DIV=styled.div`
    
 
`;

export default Product;
