import styled from 'styled-components';
import Password from '../../../Components/UI/Input/PasswordInput/Password';
import CommonComp from './../CommonComp';
import Button from '../../../Components/UI/Button/Button';
import LinkComp from '../../../Components/UI/Link/Link';
import CheckBoxColumn from '../../../Components/UI/CheckboxSection/CheckBoxColumn';
import Input from '../../../Components/UI/Input/Input';




function RegistarPage({className="",btnText="LOGIN",secondText="Sign Up",to="/register"}) {
  return (
    <DIV >

       
       


                                <CommonComp className={`${className} display-flex align-items-center `}>

                                                {/* Login Bottom */}
                                                <div className="    ">


                                                                <Input className="input w-100 p-2  ps-3 mt-4  font-1-6  border-radius-5" placeholder='email'></Input>  
                                                                <Password className="input w-100 p-2  ps-3 mt-4  font-1-6  border-radius-5"   placeholder='password'></Password>


                                                              
                                                                {/* Remember me check box */}
                                                                <CheckBoxColumn  className='mt-4  font-1-3'  text={"Remember Me"}></CheckBoxColumn>
                                                                    
                                                                {/* Button */}
                                                                <Button className='background-primary border-radius-5  text-color-white mt-4 w-100 font-1-4'  >{btnText}</Button>


                                                                {/* Txt */}
                                                                <div className="sign-in text-center mt-4">
                                                                    <span className='  text-color-grey'> Don't have an account ? </span>
                                                                    <LinkComp to={to} className='  cursor-p text-color-primary fw-bold '>{secondText}</LinkComp>
                                                                </div> 
                                        
                                        

                                    
                                    
                                                </div>
                                            
                                </CommonComp>

    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only RegistarPage */
    
`;

export default RegistarPage;
