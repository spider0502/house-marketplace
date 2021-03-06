import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import Explore from './pages/Explore'
import Category from "./pages/Category"
import Offers from './pages/Offers'
import Profile from './pages/Profile'
import PrivateRoute from "./components/PrivateRoute"
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import ForgotPassword from './pages/ForgotPassword'
import Navbar from "./components/Navbar"
import CreateListing from "./pages/CreateListing"
import EditListing from "./pages/EditListing"
import Listing from "./pages/Listing"
import Contact from "./pages/Contact"


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Explore />}></Route>
          <Route path='/category/:categoryName' element={<Category />}></Route>
          <Route path='/category/:categoryName/:listingId' element={<Listing />}></Route>
          <Route path='/contact/:landlordId' element={<Contact />}></Route>

          <Route path='/offers' element={<Offers />}></Route>

          <Route path='/profile' element={<PrivateRoute />}>
            <Route path='/profile' element={<Profile />}></Route>
          </Route>

          <Route path='/create-listing' element={<CreateListing />}></Route>
          <Route path='/edit-listing/:listingId' element={<EditListing />}></Route>

          <Route path='/sign-in' element={<SignIn />}></Route>
          <Route path='/sign-up' element={<SignUp />}></Route>
          <Route path='/forgot-password' element={<ForgotPassword />}></Route>
        </Routes>

        <Navbar></Navbar>
      </Router>
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
