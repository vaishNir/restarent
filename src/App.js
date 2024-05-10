import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import AdminLogin1 from './Admin/AdminLogin1';
import AdminNavBar from './Admin/AdminNavBar';
import CustomerLogin from './Customer/CustomerLogin';
import Adminviewfood from './Admin/Adminviewfood';
import Viewfood from './Customer/Viewfood';
import ViewOrders from './Customer/ViewOrders';
import Addfood from './Admin/Addfood';
import Stafflogin from './Staff/Stafflogin';
import Staffregister from './Staff/Staffregister'
import Customerorders from './Customer/Customerorder';
import Customerregister from './Customer/Customerregister';
import Viewcart from './Customer/Viewcart';
import Footer from './Admin/Footer';
import Stafforders from './Staff/Stafforders';
import Stafforderconfirm from './Staff/Stafforderconfirm';
import  Staffviewfood  from'./Staff/Staffviewfood';
import Forgetpassword from'./Customer/Forgetpassword';
import Staffvieworder from'./Staff/Staffvieworder';
import Staffpassword from './Staff/Staffpassword';
import Nav from './Admin/Nav';
import Payment from'./Customer/Payment';
import Editfood from './Staff/Editfood';
import Editfooddetails from'./Staff/Editfooddetails';
import Home from './Admin/Home';
import Register from './Admin/Register';
import  CustomerViewfood from './Customer/Viewfood';
import CustomerNav from './Customer/CustomerNav';
import StaffNav from './Staff/StaffNav';

function App() {
  const url="http://localhost:3500/"
  return (
    <div>
    <BrowserRouter>
    <Routes>                           
      <Route path="/AdminLogin1" element={<AdminLogin1/>}></Route>
      <Route path="/AdminNavBar" element={<AdminNavBar/>}></Route>
      <Route path="/CustomerLogin" element={<CustomerLogin/>}></Route>
      <Route path="/Adminviewfood" element={<Adminviewfood/>}></Route>
      {/* <Route path="/Viewfood" element={<Viewfood />}></Route> */}
      <Route path="/ViewOrder"element={<ViewOrders/>}></Route>
      <Route path="/Addfood" element={<Addfood/>}></Route>
      <Route path="/stafflogin"element={<Stafflogin/>}></Route>
      <Route path="/Staffregister" element={<Staffregister/>}></Route>
      <Route path="/Customerorders" element={<Customerorders/>}></Route>
      <Route path="/Customerregister" element={<Customerregister/>}></Route>
      <Route path="/Viewcart" element={<Viewcart url={url}/>}></Route>
      <Route path="/Footer" element={<Footer/>}></Route>
      <Route path="/Stafforder" element={<Stafforders/>}></Route>
      <Route path="/Stafforderconfirm" element={<Stafforderconfirm/>}></Route>
      <Route path="/Staffviewfood" element={<Staffviewfood/>}></Route>
      <Route path="/Forgetpassword" element={<Forgetpassword/>}></Route>
      <Route path="/Staffvieworder" element={<Staffvieworder/>}></Route>
      <Route path="/Staffpassword" element={<Staffpassword/>}></Route>
      <Route path="/Nav" element={<Nav/>}></Route>
      <Route path="/Payment" element={<Payment/>}></Route>
      <Route path="/Editfood" element={<Editfood/>}></Route>
      <Route path="/Editfooddetails/:foodid" element={<Editfooddetails/>}></Route>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Register" element={<Register/>}></Route>
      <Route path="/Viewfood" element={<CustomerViewfood url={url}/>}></Route>
      <Route path="/CustomerNav" element={<CustomerNav/>}></Route>
      <Route path="/StaffNav" element={<StaffNav/>}></Route>
    

   </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
