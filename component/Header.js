import React from "react";
import {Card, CardBody} from "reactstrap";
const Header=()=>
{
    return(
        <div >
            <Card className="my-2 bg-warning">
                <CardBody  >
                    <h1 className="text-center my-2">Welcome To This Course</h1>
                </CardBody>
            </Card>
        
        </div>
    );
};
export default Header;