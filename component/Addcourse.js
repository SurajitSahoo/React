import React , {Fragment} from 'react';
import {Container, Form, FormGroup, Input, Button} from "reactstrap";
const Addcourse=()=>
{
    return(
    <Fragment>
        <h2 className="text-center" padding="20 ">Fill the form for choosing the course</h2>
        <Form className="text-center">
            <FormGroup>
                <lebel className="bold-text" for="Userid">Course Id</lebel>
                <Input type="text" placeholder="Enter here" name="Userid" id="Userid"/>
            </FormGroup>

            <FormGroup>
                <lebel className="bold-text" for="title">Title</lebel>
                <Input type="text" placeholder="Enter title here" name="title" id="title"/>
            </FormGroup>
            
            <FormGroup>
                <lebel className="bold-text" for="description">Description</lebel>
                <Input type="text" placeholder="Enter decription here" name="description" id="description" style={{height: 50}}/>
            </FormGroup>

            <Container className="text-center">
                <Button color="success" > Add course</Button>{' '}
                <Button color="warning"> clear</Button>
            </Container>
        </Form>
    </Fragment>
    );
};
export default Addcourse; 