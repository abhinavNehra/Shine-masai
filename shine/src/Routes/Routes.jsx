import React from "react"
import { Route, Switch } from "react-router-dom"
import Login from "../Components/LogIn/Login"
import Register from "../Components/Register/Register";
import Home from "../Components/Home/Home"
import { JobDescription } from "../Components/JobDescription/JobDescription";
import NavBar from "../Components/Navbar/NavBar";
import JobAlert from "../Components/CreateJobAlert/JobAlert";
import JobPost from "../Components/JobPost/JobPost";




function Routes()
{





 
    return(
        <div>
      <NavBar />
     <Switch>
            <Route path="/" exact>
               <Home/>
            </Route>
            <Route path="/myshine/login" exact>
               <Login/>
            </Route>
            <Route path="/jobalert" exact>
               <JobAlert />
            </Route>
            <Route path="/registration" exact>
               <Register/>
            </Route>
            <Route path="/jobdescription" exact>
               <JobDescription />
            </Route>
            <Route path="/jobpost">
               <JobPost/>
            </Route>
       </Switch>


        </div>
    )
}

export default Routes;