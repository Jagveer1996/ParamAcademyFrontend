import { Routes, Route, Outlet } from 'react-router-dom'


import './App.css'

import Home from './assets/home/Home'
import Header from './assets/component/Header'
import Contactus from './assets/home/Contactus'
import ProtectedLayout from './assets/layout/ProtectedLayout'
import Appointment from './assets/home/Appointment'
import Inquiry from './assets/home/Inquiry'
import WorkWithUs from './assets/home/WorkWithUs'
import HireWithUs from './assets/home/HireWithUs'
import PrivacyPolicy from './assets/home/PrivacyPolicy'
import TermsCondition from './assets/home/TermsCondition'
import Footer from './assets/component/Footer'
import AuthRouth from './assets/navigation/AuthRouth'
import Signin from './assets/pages/Signin'
import CourseDetail from './assets/home/CourseDetail'

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import ForgetPassword from './assets/pages/ForgetPassword'
import ResetPassword from './assets/pages/ResetPassword'
import Signup from './assets/pages/Signup'
import CourseDetailForm from './assets/pages/CourseDetailForm'
import AboutUs from './assets/home/AboutUs'
import TestStar from './assets/pages/TestStar'
import TestCountry from './assets/pages/TestCountry'
import AdminRouth from './assets/navigation/AdminRouth'
import Sidebar from './assets/Admin/Sidebar'
import Profile from './assets/Admin/Profile'
import AddCourse from './assets/Admin/AddCourse'
import EditCourse from './assets/Admin/EditCourse'
import ViewCourse from './assets/Admin/ViewCourse'
import AddTestimonial from './assets/Admin/AddTestimonial'
import EditTestimonial from './assets/Admin/EditTestimonial'
import AddFAQ from './assets/Admin/AddFAQ'
import EditFAQ from './assets/Admin/EditFAQ'
import Testimonial from './assets/Admin/Testimonial'
import FAQ from './assets/Admin/FAQ'
import InquiryDetail from './assets/Admin/InquiryDetail'
import InquiryView from './assets/Admin/InquiryView'
import AppointmentView from './assets/Admin/AppointmentView'
import HireFromusView from './assets/Admin/HireFromusView'
import WorkWithusView from './assets/Admin/WorkWithusView'
import AppointmentDetail from './assets/Admin/AppointmentDetail'
import HireFromusDetail from './assets/Admin/HireFromusDetail'
import ManageCourse from './assets/Admin/ManageCourse'
import Dashboard from './assets/Admin/Dashboard'
import WorkWithusDetail from './assets/Admin/WorkWithusDetail'

// Create a client
const queryClient = new QueryClient()

function App() {


  return (
    <>

    {/* hi this is github */}
    {/* hi this is github */}
    {/* hi this is github */}
    {/* hi this is github */}
    {/* hi this is github */}
    {/* hi this is github */}
    {/* hi this is github */}

    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route element={<AuthRouth />}>
          <Route path='signin' element={<Signin />} />
          <Route path='signup' element={<Signup />} />
          <Route path='forgetpassword' element={<ForgetPassword />} />
          <Route path="resetpassword/:token" element={<ResetPassword />} />
          <Route path='courseDetails' element={<CourseDetailForm />} />
        </Route>

        <Route element = {<AdminRouth />} >
          <Route path='dashboard' element = {<Dashboard />} />
          <Route path='profile' element = {<Profile />} />
          <Route path='managecourse' element={<ManageCourse />} />
          <Route path='addcourse' element = {<AddCourse />} />
          <Route path='editcourse/:id' element = {<EditCourse />} />
          <Route path='viewcourse/:id' element = {<ViewCourse />} />
          <Route path='testimonial' element= {<Testimonial />} />
          <Route path='addtestimonial' element = {<AddTestimonial />} />
          <Route path='edittestimonial' element = {<EditTestimonial />} />
          <Route path='faq' element={<FAQ />} />
          <Route path='addfaq' element = {<AddFAQ />} />
          <Route path='editfaq/:id' element={<EditFAQ />} />
          <Route path='inquirydetail' element={<InquiryDetail />} />
          <Route path='inquiryview/:id' element={<InquiryView />} />
          <Route path='appointmentdetail' element={<AppointmentDetail />} />
          <Route path='appointmentview/:id' element={<AppointmentView/>} />
          <Route path='hireformusdetail' element={<HireFromusDetail />} />
          <Route path='hirefromusview/:id' element={<HireFromusView />} />
          <Route path='workwithusdetail' element={<WorkWithusDetail />} />
          <Route path='workwithusview/:id' element={<WorkWithusView />} />
        </Route>

        <Route element={<ProtectedLayout />} >
          <Route path='/home' element={<Home />} />
        </Route>

          <Route path='contactus' element={<Contactus />} />
          <Route path='aboutus' element={<AboutUs />} />
          <Route path='coursedetail' element={<CourseDetail /> } />
          <Route path='appointment' element={<Appointment />} />
          <Route path='inquiry' element={<Inquiry />} />
          <Route path='workwithus' element={<WorkWithUs />} />
          <Route path='hirewithus' element={<HireWithUs />} />
          <Route path='privacypolicy' element={<PrivacyPolicy />} />
          <Route path='termcondition' element={<TermsCondition />} />
          <Route path='testStar' element={<TestStar />} />
          <Route path='testCountry' element={<TestCountry />} />

          {/* <Route path='*' element={<404 />} /> */}
      </Routes>
      </QueryClientProvider>
      {/* <Footer/> */}
    </>
  )
}

export default App
