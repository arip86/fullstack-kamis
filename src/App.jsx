
import './App.css'
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home'
import ListStudent from './pages/student/Student';
import Layout from './components/Layout/Index';
import Login from './components/Login/Login';
import { AuthProvider } from './context/AuthContext';
import { StudentProvider } from './context/StudentContext';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
function App() {

  return (
    <div>
   {/* <Home/> */}
   <StudentProvider>
    <AuthProvider>
   <Layout>
    <Routes>
       <Route path='/login' element={<Login/>}></Route>
      <Route path='/' element={<Home/>}></Route>
     
       <Route path='/student' element={
        <ProtectedRoute><ListStudent/></ProtectedRoute>}></Route> 
     
    </Routes>
    </Layout>
    </AuthProvider>
    </StudentProvider>
    </div>
  )
}

export default App
