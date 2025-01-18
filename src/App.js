import './App.css';
import Mainnavbar from './components/Mainnavbar';
import Home from './components/pages/home/Home';
import { Routes, Route, useLocation } from 'react-router-dom';
import Dashboard from './components/pages/student/stddashbord/Dashbord '
import MyMessages from './components/pages/student/stdmsg/MyMessages';
import MyClasses from './components/pages/student/upcommingclass/upcommingcls/MyClasses';
import MyInvoices from './components/pages/student/myinvoice/MyInvoices';
import RaiseDispute from './components/pages/student/raisedispute/RaiseDispute';
import Becomeinlogin from './components/pages/instuctor/instructorlogin/Becomeinlogin';
import Instuctorsignup from './components/pages/instuctor/instuctorsignup/Instuctorsignup';
import MyProfile from './components/pages/instuctor/myprofileform/MyProfile';
import InstructorProfile from './components/pages/instuctor/instuctorptofile/Instroctorprofile';
import Ongoingclass from './components/pages/student/upcommingclass/ongoingclass/Ongoingclass';
import Completedclasses from './components/pages/student/upcommingclass/completedclass/Completedclasses';
import Myclassheader from './components/comman/Myclassheader';
import Closedesputes from './components/pages/student/raisedispute/Closedesputes';
import DisputeStages from './components/pages/student/raisedispute/DisputeStages'
import Negotiation from './components/pages/student/raisedispute/Negotiation';
import Arbrirtion from './components/pages/student/raisedispute/Arbrirtion';
import Studentprofile from './components/pages/student/studentprofile/studentmyprofile/Studentprofile';
import Studentcolfirstcommun from './components/pages/student/studentprofile/studentcolfirstcommun';
import Studentcolsecond from './components/pages/student/studentprofile/Studentcolsecond';
import Logindetails from './components/pages/student/studentprofile/Logindetails/Logindetails';
import Forgetpassword from './components/pages/student/studentprofile/Forgetpass/Forgetpassword';
import ResetPassword from './components/pages/student/studentprofile/ResetPassword/ResetPassword';
import FavoriteInstructors from './components/pages/student/studentprofile/FavoriteInstructors/FavoriteInstructors';
import BookingHistory from './components/pages/student/studentprofile/BookingHistory/BookingHistory';
import Instuctorprofile from './components/pages/student/Instuctorprofile/Instuctorprofile';
import BookClassform from './components/pages/student/Instuctorprofile/BookClassform/BookClassform';
import PaymentCredit from './components/pages/student/Instuctorprofile/BookClassform/PaymentCredit/PaymentCredit';
import Pymentbtn from './components/comman/pymentbutton/Pymentbtn';
import Paypal from './components/pages/student/Instuctorprofile/BookClassform/paypal/Paypal';
import Instractordashheader from './components/comman/instructordashheader/Instractordashheader';
import Dashbordins from './components/pages/instuctor/DashborardAllpage/Dashbordins/Dashbordins';




function App() {

  const navItems = [
    { name: 'Home', url: '/' },
    { name: 'About Us', url: '/AboutUs' },
    { name: 'Contact Us', url: '/ContactUs' },
    { name: 'Categories', url: '/Categories' },
  ];
  const location = useLocation();
  return (
    <div>
      {location.pathname !== "/DisputeStages" && location.pathname !== "/Arbrirtion" && location.pathname !== "/Negotiation" && location.pathname!=="/BookClassform"&&location.pathname!=="/PaymentCredit" && location.pathname!=="/Paypal" && <Mainnavbar text={navItems} />}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/AboutUs" element={<AboutUs />} /> */}
        <Route path="/Dashbord" element={<Dashboard />} />
        <Route path="/MyMessages" element={<MyMessages />} />
        <Route path="/MyClasses" element={<MyClasses />} />
        <Route path="/MyInvoices" element={<MyInvoices />} />
        <Route path="/MyClasses" element={<Myclassheader />} />
        <Route path="/RaiseDispute" element={<RaiseDispute />} />
        <Route path="/Ongoingclass" element={<Ongoingclass />} />
        <Route path="/CompletedClasses" element={<Completedclasses />} />
        <Route path="/ClosedDisputes" element={<Closedesputes />} />
        <Route path="/DisputeStages" element={<DisputeStages />} />
        <Route path="/Negotiation" element={<Negotiation />} />
        <Route path="/Arbrirtion" element={<Arbrirtion />} />
        <Route path="/Studentprofile" element={<Studentprofile />} />
        <Route path="/Studentcolfirstcommun" element={<Studentcolfirstcommun />} />
        <Route path="/Studentcolsecond" element={<Studentcolsecond />} />
        <Route path="/Logindetails" element={<Logindetails />} />
        <Route path="/Forgetpassword" element={<Forgetpassword />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="/FavoriteInstructors" element={<FavoriteInstructors />} />
        <Route path="/BookingHistory" element={<BookingHistory />} />
        <Route path="/InstructorProfile" element={<Instuctorprofile />} />
        <Route path="/BookClassform" element={<BookClassform />} />
        <Route path="/PaymentCredit" element={<PaymentCredit />} />
        <Route path="/Paypal" element={<Paypal />} />
       
        {/* instuctor............................... */}
        <Route path="/Instuctorsignup" element={<Instuctorsignup />} />
        <Route path="/MyProfileform" element={<MyProfile />} />
        <Route path="/MyProfile" element={<InstructorProfile />} />
        <Route path="/Becomeinlogin" element={<Becomeinlogin />} />
        <Route path="/Instractordashheader" element={<Instractordashheader />} />
        <Route path="/Dashbordins" element={<Dashbordins />} />
      </Routes>
    </div>
  );
}

export default App;
