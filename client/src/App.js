import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Admin, BreakeDown, Customer, Daily, Home, Monthly, OverView, Products, Transactions } from "./pages";
import styled from "styled-components";
import Sidebar from "./components/Sidebar"

const Container = styled.div`
display:flex;
/* outline:1px solid red; */

gap:10px;
min-height:100vh;
`
function App() {
  return (
   <div className='app' >
    <Container>
    <BrowserRouter>
    <Sidebar/>
   
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
    
    </BrowserRouter>
    </Container>
    </div>
  );
}

export default App;
