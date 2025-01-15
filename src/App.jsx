import './CSS/App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OnLignCourses from './OnLignCourses';
import FaceToFaceCourses from './FaceToFaceCourses';
import Home from './Home';
import NotFound from './NotFound';
import Nav from './Nav';
import Product from './Product';
import Basket from './Basket';
import Montre from './Montre';
import Vétement from './Vétement';
import Courses from './Courses'
import Login from './Login';
import SignUp from './SignUp';
import Footer from './Footer';
import Contacct from './Contacct';

function App() {
  return (
    <div className="app">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/montres" element={<Montre/>} />
          <Route path="/product" element={<Product />} />
          <Route path="/baskets" element={<Basket />}/>
          <Route path="/vetements" element={<Vétement />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contactus" element={<Contacct />} />



          <Route path="/courses" element={<Courses />}>
            <Route path="enligne" element={<OnLignCourses />} />
            <Route path="presentiel" element={<FaceToFaceCourses />} />
          </Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
