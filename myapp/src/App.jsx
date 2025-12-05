import './App.css';
import Header from "./first/Header";
import Footer from "./first/Footer";
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// Pages
import Home from "./first/Home";
import Main from "./first/Sec";
import Main1 from "./first/Main";
import About from "./first/About";
import Faq from "./first/Faq";
import Help from "./first/Help";

// Course Pages
import WebDev from './pages/WebDev';
import DataScience from './pages/DataScience';
import Design from './pages/Design';
import Oops from "./pages/Oops";
import Dbms from './pages/Dbms';
import Java from './pages/Java';
// import Login from "./first/Login";
//course pagesfor beckend
import Fullstack from './courses/Fullstack';

function App() {
  const location = useLocation();

  // Scroll to top on route change (optional UX improvement)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const isHomePage = location.pathname === "/";

  return (
    <div className="flex flex-col min-h-screen">
      {/* <Header /> */}
      {/* <Header /> */}
      {!isHomePage && <Header />}
       <Main />
{/*first try  */}
    
      <main className="flex-grow">
        {/* Show only on non-home pages */}
        
        {!isHomePage && (
          <>
              
               
     
            <Main1 />
          </>
        )}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/help" element={<Help />} />
          <Route path="/courses/webdev" element={<WebDev />} />
          <Route path="/courses/datascience" element={<DataScience />} />
          <Route path="/courses/design" element={<Design />} />
          <Route path="/courses/java" element={<Java />} />
          <Route path="/courses/oops" element={<Oops />} />
          <Route path="/courses/dbms" element={<Dbms />} />
          {/* <Route path="/login" element={<Login />} /> */}
          
          <Route path="/course/fullstack" element={<Fullstack />}/>
          
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App; 






