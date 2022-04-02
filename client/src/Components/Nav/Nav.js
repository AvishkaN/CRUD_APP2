import styled from 'styled-components';
import AddIcon from '@mui/icons-material/Add';



function Nav({className=""}) {

  return (
    <DIV className={`${className}`}>

        <div className="background-yellow display-flex ">
            
           <AddIcon className="cursor-p ms-auto text-color-grey-light border-radius-circle p-1 border-grey font-3-5"></AddIcon>

            <div className="avatar ">A</div>

        </div>

    </DIV>
  );
}


const DIV=styled.nav`
    width:var(--page-content-width);
    margin-left: auto;
    margin-right: auto;   
    
 
`;

export default Nav;
