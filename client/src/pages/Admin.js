import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Nav from '../components/Nav'
import Box from '@mui/material/Box';
import  {DataGrid}  from '@mui/x-data-grid';
import Title from '../components/Title';
import axios from 'axios';

const Container = styled.div`
color:#ffff;
/* width:75%; */
flex:1;

`
const Wrapper = styled.div`

`

const Admin = () => {
  const [admin, setadmin] = useState([])
   
useEffect(() => {
  const fetchclients= async()=>{
    try {
      const results =await axios.get( `${process.env.REACT_APP_BASE_URL}/user/admins`)
      if(results){
        setadmin(results.data)
      }
    
    } catch (error) {
      
    }
  }
  fetchclients()

}, [])

  const columns = [
    { field: '_id', headerName: 'ID', width: 220 },
    {
      field: 'name',
      headerName: 'Name',
      width: 100,
      editable: false,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 220,
      editable: false,
    },
    {
      field: 'phoneNumber',
      headerName: 'Phone number',
      width: 110,
      editable: false,
    },
    {
      field: 'city',
      headerName: 'city',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 150,
    },
    
    {
      field: 'country',
      headerName: 'Country',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 60,
    },

    {
      field: 'occupation',
      headerName: 'Occupation',
        width: 110,
      editable: false,
    },
    {
      field: 'role',
      headerName: 'Role',
        width: 110,
      editable: false,
    },
    
  ]; 

  
  
  return (
   
   <Container>
    <Nav/>
    <Title text="List of customers"  title="customers" />

    { admin.length === 0?"Fetching list...": <Wrapper>
    <Box sx={{ height: 600, width: '100%',
   "& .MuiDataGrid-columnHeaders": {
    backgroundColor: "white",
    color: "black" ,
    borderBottom: "none",
  },
   "& .MuiDataGrid-footerContainer": {
    backgroundColor: "white",
    color: "black",
    borderTop: "none",
  },
  }}>
      <DataGrid
      sx={{color:'white' }}
        rows={admin}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        disableSelectionOnClick
        getRowId={(row) =>  row._id }        
      />
    </Box>
   


    </Wrapper>}
   </Container>
  )
}

export default Admin