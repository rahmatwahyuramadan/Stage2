import React from "react";
// import Home from "./pages/home";
// import Product from "./pages/product";
import Hero from "../componen/hero";
import MainDashboard from "../componen/mainDasboard";
import LoginPage from "../componen/loginPage";
import RegisterPage from "../componen/registerPage";
import TransactionPage from "../componen/transactionPage";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import CardPost from "../componen/cardPost";

const App = () : React.JSX.Element => {
const [isLogin, setIsLogin] = React.useState<boolean>(true)

const ProtectedRoute = () => {
  if (isLogin) return <Outlet />
  
  return <Navigate to={'/login'} />
}

  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Hero/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/dashboard" element={<MainDashboard/>}/>
        <Route path="/addTransaction" element={<TransactionPage/>}/>
        <Route path="/post" element={<CardPost/>}/>
      </Route>

      <Route path="/login" element={<LoginPage/>}/>
    </Routes>
  )
}

export default App