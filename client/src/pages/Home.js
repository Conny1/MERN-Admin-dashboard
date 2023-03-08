import { Box } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Nav from '../components/Nav'
import StackBoke from '../components/StackBoke'
import Title from '../components/Title'
import { DataGrid } from '@mui/x-data-grid'
import OverViewLine from '../components/OverViewLine'
import Breakedown from '../components/Breakedown'
import { tablet } from '../responsive'

const Main = styled.div`
/* width:75%; */
flex:1;

`
const Container = styled.div`
width:100%;
/* outline:1px solid green; */
`
const Wrapper = styled.div`
width:100%;
/* outline:1px solid black; */
display:flex;
gap:5px;
margin-bottom:20px;
${tablet({ flexDirection: 'column', height: '600px'  })}

`
const Item = styled.div`
width:60%;
${tablet({ width: '99%' })}

`
const Item2 = styled.div`
width:37%;
${tablet({ width: '99%' })}

`


const Home = () => {
  const [data, setdata] = useState({})
  useEffect(() => {
      const fetchDta =async()=>{
          try {
              const result = await axios.get(`${process.env.REACT_APP_BASE_URL}/user/dashboard`)
              setdata(result.data)
              // console.log(result.data)
          } catch (error) {
              
          }
      }
  fetchDta()

  }, [])
  // grapg columns
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
  if( !data.yearlySalesTotal ) return <>Fetching data...</>
  
  return (
    <Main>
      <Nav/>
      <Title title='Dashboard' text='welcome to your dashboard' />
    <Container>
      <Wrapper >
          <StackBoke {...data} />
        <Item   >
          <Box sx={{ height: 350, width: '100%', flex:1 , backgroundColor:'#1e2351' ,  }} >
          <OverViewLine view='sales' isDashboard={true}  />
          </Box>
          </Item>
         
      </Wrapper>
      <Wrapper>
        <Item>
      { data.transactions?  <Box sx={{ height: 400,
       width: '100%',
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
      sx={{color:'white' ,
        backgroundColor:'#1e2351',    
    }}
        rows={data?.transactions}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        disableSelectionOnClick
        getRowId={(row) =>  row._id }        
      />
    </Box>:'Loading data...'  } </Item>

    <Item2>
    <Box sx={{ height: 400, width: '100%' ,  backgroundColor:'#1e2351'}} >
      <Breakedown isDashboard={true} />
    </Box>
    </Item2>
    
      </Wrapper>

    </Container>
    
    </Main>
  )
}

export default Home