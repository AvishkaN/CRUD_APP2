import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


import CloseBtn from '../../Components/UI/CloseBtn/CloseBtn';
import LinkComp from '../../Components/UI/Link/Link';
import { logInAsync, signUpAsync } from '../../Redux/slices/userSlice';
import { useDispatch } from 'react-redux';




function CommonComp(props) {

    const dispatch=useDispatch();


    const handleFormSubmit=(e)=>{ 
        e.preventDefault();
    
        const logInBtn=e.target.querySelector('#log-in-btn');
        const SignUpBtn=e.target.querySelector('#sign-up-btn');
        console.log(e.target);
        
        
        const getFormData =  Object.fromEntries(new FormData(e.target));

        if(logInBtn){  // if select login btn
            dispatch(logInAsync(getFormData));

        }  

        if(SignUpBtn){ //  if select register btn
            dispatch(signUpAsync(getFormData));

        }


  
    
    
    };
  


  return (
      <>
      <div className="text-right mt-3">
          <LinkComp to="/">
            <CloseBtn className='font-3 me-sm-5 me-3 cursor-p'></CloseBtn>
          </LinkComp>
      </div>


    <DIV className={`${props.className} background-aqu`} onSubmit={handleFormSubmit}>
        
        <div className="common-comp-wrapper border-radius-10">


                                    <h2 className='text-center fw-bold text-color-primary background-black text-color-white p-3 dispaly-flex align-items-center  '>
                                        
                                                Login / Register
                                        
                                    </h2>    


                                        

                                    {/* Login and Register Content */}
                                    <div className="p-4  p-sm-5    ">

                                        {/* Login registrer Nav */}
                                        <div className="login-register-navv background-aqu display-flex justify-content-between w-80 ms-auto me-auto">

                                                     
                                                    <NavLink to="/login" activeclassname="active"  className="a   font-1-6  fw-bold">login</NavLink>
                                                    <NavLink to="/register"   className="a   font-1-6  fw-bold">register</NavLink>
                                                    

                                        </div>


                                            {props.children}


                                    </div>

        </div>

        
    </DIV>
      </>
  );
}


const DIV=styled.div`
    width: 100%;
    min-height: 90vh; 

    
    .common-comp-wrapper{
        width: 45%;
        box-shadow: -2px 5px 11px 0px #b6a2a2;
        margin-left: auto;
        margin-right: auto; 
        /* border:2px solid black; */

        
        @media(max-width:1067px){     
                      width: 70%; 
        }
        @media(max-width:700px){     
            width: 94%;  
        }


        input{
            // border:1px solid gray;
            /* border-radius: 20px;   */
        }

        .social-media-container{
            .social{
                .social-media-btn{
                    border:2px solid black;

                    svg{    
                        width: 23px;
                        height: 23px;
                    }
                }
            }
        }

        .btn-register{
            &:hover{

                color: var(--text-color-primary);
            }
        
        }

    }

    .active{
        color:#fea502;
        text-decoration:underline;
    }

    
`;

export default CommonComp;
