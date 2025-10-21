import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import Layout from './Layout.jsx';
import Home from './components/Home/Home.jsx';
import AboutUs from './components/AboutUs/AboutUs.jsx';
import ContactUs from './components/ContactUs/ContactUs.jsx';
import User from './components/User/User.jsx';
import Github from './components/Github/Github.jsx';
import githubInfoLoader from './components/Github/githubInfoLoader.jsx';

//default way

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </StrictMode>,
// )


// Below way are without the use of <App/> component
// 1st way
// const router = createBrowserRouter([
//   {
//     path:"/",
//     element: <Layout/>,
//     children: [
//       {
//         path:"",
//         element: <Home/>
//       },
//       {
//         path:"/about",
//         element: <AboutUs/>
//       },
//       {
//         path:"/contactUs",
//         element: <ContactUs/>
//       },
//     ]
//   }
// ])


// 2nd Way(most use)
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<Home/>}/>
      <Route path="/about" element={<AboutUs/>}/>
      <Route path="/contactUs" element={<ContactUs/>}/>
      <Route path="/user/:userId" element={<User/>}/>
      {/* <Route path="/github" element={<Github/>}/> */}
      <Route 
          loader={githubInfoLoader}
          path="/github" 
          element={<Github/>}
      />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
