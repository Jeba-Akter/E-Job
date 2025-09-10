import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home";
import Company from "../pages/Company";
import GovJob from "../pages/GovJob";
import FreeCv from "../pages/FreeCv";
import AppliedJobs from "../pages/AppliedJobs";
import Profile from "../pages/Profile";
import SavedJobs from "../pages/SavedJobs";
import Training from "../pages/Training";
import Success from "../pages/Success";




const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout /> ,
    children:[
      {
        path:"/",
        element: <Home />,
      } ,
       {
        path:"/company",
        element: <Company /> ,
      },
      {
        path:"/profile",
        element: <Profile /> ,
      },
      {
        path:"/gov-job",
        element: <GovJob />,
      } ,
      {
        path:"/free-cv",
        element: <FreeCv /> ,
      } ,
      // {
      //   path:"/facebook",
      //   element: <Facebook></Facebook> ,
      // } ,
      {
        path:"/applied-jobs",
        element: <AppliedJobs />,
      } ,
      {
        path:"/saved-job",
        element: <SavedJobs />,
      } ,
      {
        path:"/training",
        element: <Training /> ,
      } ,
       {
        path:"/success-stories",
        element: <Success />,
      } 
    ]
    
    
  },
]);
export default Routes;