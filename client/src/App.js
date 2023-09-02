import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/components/Home/Home';
import Header from '../src/components/layout/Header/Header';
import Courses from './components/Course/Courses';
import Footer from './components/layout/Footer/Footer';
import Login from './components/Auth/Login/Login';
import Profile from './components/Profile/Profile';
import Register from './components/Auth/Login/Register';
import ForgotPassword from './components/Auth/Login/ForgotPassword';
import ResetPassword from './components/Auth/Login/ResetPassword';
import Contact from './components/Auth/contact/Contact';
import Request from './components/Request/Request';
import About from './components/Aboout/About';
import PaymentSucess from './components/Payment/PaymentSucess';
import PaymentFail from './components/Payment/PaymentFail';
import Subscribe from './components/Payment/Subscribe';
import CoursePage from './components/CoursePage/CoursePage';
import NotFound from './components/layout/NotFound/NotFound';
import ChangePassword from './components/Profile/ChangePassword';
import UpdateProfile from './components/Profile/UpdateProfile';
import DashBoard from './components/Admin/DashBoard/DashBoard';
import Users from './components/Admin/Users/Users';
import CreateCourse from './components/Admin/CreateCourse/CreateCourse';
import AdminCourse from './components/Admin/AdminCourses/AdminiCourses';

// Admin Routes

const App = () => {
  //   window.addEventListener("contextmenu",(e)=>{
  // e.preventDefault()
  //   })
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course/:id" element={<CoursePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/changepassword" element={<ChangePassword />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/request" element={<Request />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/resetpassword/:token" element={<ResetPassword />} />
          <Route path="/updateprofile" element={<UpdateProfile />} />
          <Route path="/paymentsucess" element={<PaymentSucess />} />
          <Route path="/paymentfail" element={<PaymentFail />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="*" element={<NotFound />} />

          {/* Admin Routes */}
          <Route path="admin/dashboard" element={<DashBoard />} />
          <Route path="admin/users" element={<Users />} />
          <Route path="admin/createcourse" element={<CreateCourse />} />
          <Route path="admin/courses" element={<AdminCourse />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
