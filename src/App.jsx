import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingPage';
import Login from './pages/login/login';
import Register from './pages/register/register';
import Ecommerce from './pages/ecommerce/ecommerce';
export default function  App() {

  
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/auth/register" element={<Register />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/ecommerce" element={<Ecommerce />} />
      </Routes>

    </BrowserRouter>
    )
}
