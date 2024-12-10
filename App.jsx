// import React from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Navb from "./Navigation/NavB";
// import CoursesStrip from "./Component1/CourseStrip";

// import WelcomeUser from "./Component1/WelcomeUser";
// import About from "./Component2/About";
// import Footer from "./Component2/Footer";
// import Signin from "./ADdmin/Signin";
// import Signup from "./ADdmin/Signup";
// import Navbb from "./Navigation/Navbb";
// import Courses from "./Component1/Courses";
// import Contest from "./Contest/Contest";
// import Set1 from "./Problems/Set1";
// import Profile from "./Dashboard/UserDashboard";
// import Twosum from "./Question/Twosum";


// function App() {
//   const router = createBrowserRouter([
//     {
//       path:"/",
//       element:<>
//       <Navb/>
//       <CoursesStrip/>
//       <WelcomeUser/>
//       <About/>
//       <Footer/>
//       </>
//     },
//     {
//       path:"Signin",
//       element:<>
//       <Navb/>
//       <Signin/>
//       </>
//     },
//     {
//       path:"Signup",
//       element:<>
//       <Navb/>
//       <Signup/>
//       </>
//     },
//     {
//       path:"/home",
//       element:<>
//       <Navbb/>
//       <CoursesStrip/>
//       <WelcomeUser/>
//       <About/>
//       <Footer/>
//       </>
//     },{
//       path:"/Courses",
//       element:<>
//       <Navbb/>
//       <Courses/>
//       </>
//     },{
//       path:"/Contest",
//       element:<>
//       <Navbb/>
//       <Contest/>
//       <Footer/>
//       </>
//     },
//     {
//       path:"/Set1",
//       element:<>
//       <Navbb/>
//       <Set1/>
//       </>
//     },
//     {
//       path:"/Profile",
//       element:<>
//       <Navbb/>
//       <Profile/>
//       <Footer/>
//       </>
//     }
//     ,
//     {
//       path:"/Twosum",
//       element:<>
//       <Navbb/>
//       <Twosum/>
//       <Footer/>
//       </>

//     }
//   ]);

//   return <RouterProvider router={router} />;
// }

// export default App;
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Course2 from "./Course/Course2";
import EnrollPage from "./Course/Enroll";
import DS from "./CourseContent/DataScience";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Course2 />,
    },
    {
      path: "/enroll",
      element: <EnrollPage />,
    },
    {
      path: "/DS",
      element: <DS />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
