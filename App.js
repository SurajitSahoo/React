import logo from './logo.svg';
import './App.css';
import {Button,Container,Row,Col} from 'reactstrap';
import { ToastContainer,toast } from 'react-toastify';
import Home from "./component/Home";
import Study from "./component/Study";
import Allcourses from './component/Allcourses';
import Addcourse from './component/Addcourse';
import Header from './component/Header';
import Menu from './component/Menu';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import { Link } from "react-router-dom";
function App() {
  const btnHandle=()=> 
  {
    toast.success("Thanks");
  };
  return (
    <div>
      <Router>
        <ToastContainer/>
        <Container>
        <Header/>
        <Row>
          <Col md={3}>
            <Menu/>
          </Col>

          <Col md={9}>
          <Routes>
            <Route path="/" Component={Home} exact/>
            <Route path="/Add-Courses" Component={Addcourse} exact/>
            <Route path="/View-Courses" Component={Allcourses} exact/>
          </Routes>  
          </Col>
        </Row>
      </Container>
      
      </Router>
    </div>
  );
  
}

export default App;
