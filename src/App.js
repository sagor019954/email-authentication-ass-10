
import './App.css';
import Navbar from './Common/Navbar';
import Login from './Form/Login';
import Register from './Form/Register';
import Blog from './Common/Blog';
import Footer from './Common/Footer';
import Courses from './Components/Courses';
import Singlecourse from './Components/Singlecourse';
import { RouterProvider } from 'react-router-dom';
import routes from './Roots/Rootpath'
function App() {
  return (
    <div >
      <RouterProvider router={routes} ></RouterProvider>
      {/* <Navbar></Navbar> */}
      {/* <Login></Login> */}
      {/* <Register></Register> */}
      {/* <Blog></Blog> */}
      {/* <Footer></Footer> */}
      {/* <Courses></Courses> */}
      {/* <Singlecourse></Singlecourse> */}
    </div>
  );
}

export default App;
