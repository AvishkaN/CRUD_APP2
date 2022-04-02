import React, { useEffect } from "react";
import {useSelector} from "react-redux";
import {BrowserRouter,Routes,Route} from "react-router-dom";

// Components
import Nav from "./Components/Nav/Nav";
import Overlay from "./Components/Overlay/Overlay";

// Pages 
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import AllProductsPage from "./Pages/AllProductsPage/AllProductsPage";

import { selectProducts } from "./Redux/slices/productSlice";
import { selectClicks } from "./Redux/slices/clickSlice";


const App=()=>{  

    const products=useSelector(selectProducts);
    const clicks=useSelector(selectClicks);



    //scroll Y  
    useEffect(()=>{

        if(clicks.showOverlay){   // turn off scroll y --> in  overlay

            document.querySelector('html').style.overflowY="hidden";
        }else{
            document.querySelector('html').style.overflowY="initial";

        }
      },[clicks.showOverlay]);

    return(
        <div className="app-wrapper">
            {console.log(products)}
                    <BrowserRouter>

                        <Routes>
                                {/* AllProducts */}
                                <Route path="/" element={ 
                                  <>
                                    <Nav></Nav>

                                    <AllProductsPage></AllProductsPage>


                                    </>
                                } />


                                {/* addProduct */}
                                <Route path="/addProduct" element={ 
                                <>

                                    <RegisterPage></RegisterPage>


                                </>
                                } />



                        </Routes>

                    </BrowserRouter>

                    {clicks.showOverlay && <Overlay></Overlay>}

        </div>
    )
};

export default App;


