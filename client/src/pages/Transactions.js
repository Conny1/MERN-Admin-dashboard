import React ,{ useState, useEffect }from 'react'
import styled from 'styled-components'
import Nav from '../components/Nav'
import Box from '@mui/material/Box';
import  {DataGrid}  from '@mui/x-data-grid';
import Title from '../components/Title';
import axios from 'axios';
// import { format } from 'date-fns'

const Container = styled.div`

width:75%;
`
const Wrapper = styled.div`

`


const Transactions = () => {
  const [trasaction, settrasaction] = useState([])
   
useEffect(() => {
  const fetchclients= async()=>{
    try {
      const results =await axios.get( `${process.env.REACT_APP_BASE_URL}/transactions`)
      if(results){
        settrasaction(results.data)
        }
    
    } catch (error) {
      
    }
  }
  fetchclients()

}, [])

  const columns = [
    { field: '_id', headerName: 'ID', width: 220 },
    
    {
      field: 'userId',
      headerName: 'user ID',
      width: 220,
      editable: false,
    },
    // {
    
    //   field: 'products',
    //   headerName: 'No. of products',
    //   width: 200,
    //   editable: false,
    // },
    {
      field: 'cost',
      headerName: 'Total $',
      width: 110,
      editable: false,
    },
    {
    
      field: 'createdAt',
      headerName: 'createdAt',
      width: 220,
      editable: false,
    },
  
    
    
  ]; 

  return (
    <Container>
    <Nav/>
    <Title text="List of customers"  title="customers" />

    { trasaction.length === 0?"Fetching list...": <Wrapper>
    <Box sx={{ height: 600, width: '100%' }}>
      <DataGrid
      sx={{color:'white' }}
        rows={trasaction}
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

export default Transactions