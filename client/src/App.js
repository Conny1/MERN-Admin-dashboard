import {  HashRouter, Route, Routes } from "react-router-dom";
import { Admin, BreakeDown, Customer, Daily, Home, Monthly, OverView, Products, Transactions } from "./pages";
import styled from "styled-components";
import Sidebar from "./components/Sidebar"
import { SlList } from "react-icons/sl";
import { useState } from "react";

const Container = styled.div`
display:flex;
/* outline:1px solid red; */
position:relative;
gap:10px;
min-height:100vh;
`
function App() {
  const [sidebar, setsidebar] = useState(false)
  return (
   <div className='app' >
    <Container>
    <HashRouter>
   { sidebar &&  <Sidebar/>}
    <SlList onClick={()=>{setsidebar(!sidebar)}} style={{fontSize:'20px',color:'#fff', position:'absolute', top:0, left:0,zIndex:9999 }} />
   
    <Routes>
      <Route path="/"  element={<Home/>}/>
      <Route path="admin"  element={<Admin/>}/>
      <Route path="breakedown"  element={<BreakeDown/>}/>
      <Route path="customers"  element={<Customer/>}/>
      <Route path="daily"  element={<Daily/>}/>
      {/* <Route path="geography"  element={<Geograpgy/>}/> */}
      <Route path="monthly"  element={<Monthly/>}/>
      <Route path="overview"  element={<OverView/>}/>
      {/* <Route path="performance"  element={<Performance/>}/> */}
      <Route path="products"  element={<Products/>}/>
      <Route path="transactions"  element={<Transactions/>}/>
    </Routes>
    
    </HashRouter>
    </Container>
    </div>
  );
}

export default App;
