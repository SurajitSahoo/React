import React from 'react';
import {Button} from 'reactstrap';
import { ToastContainer,toast } from 'react-toastify';
const Home=()=>
{
    return(
      <div style={{background: "silver",padding: 20}}>
        <header className='text-center'>
        <ToastContainer/>
        <h1>Sourse From Surajit</h1>
        <p>In this website you can download differnt coding language course notes like java,python,c.</p>
        <Button color="info">Home</Button>{'  '}
        <Button color="primary">Store</Button>{'  '}
        <Button color="warning">Downloads</Button>{'  '}
        <Button color="danger">About</Button>{'  '}
      
        </header>
      
      </div>
    
    )
}
export default Home;