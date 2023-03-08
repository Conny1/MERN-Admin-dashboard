import React, { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import Nav from '../components/Nav'
import Title from '../components/Title'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import {ResponsiveLine} from '@nivo/line'

const Container = styled.div`
/* width:75%; */
flex:1;

`
const Wrapper = styled.div`
display:flex;
justify-content:space-between;
/* outline:1px solid red; */
width:100%;
`

const Daily = () => {
  const [startDate, setStartDate] = useState(new Date( ' 2021-02-01'));
  const [endDate, setEndDate] = useState(new Date( ' 2021-03-01'));
  const [data, setdata] = useState({})
  useEffect(() => {
      const fetchDta =async()=>{
          try {
              const result = await axios.get(`${process.env.REACT_APP_BASE_URL}/stats/overal`)
              setdata(result.data)
              
          } catch (error) {
              
          }
      }
  fetchDta()
  }, [])

  const [formatedData] = useMemo(() => {
    if(!data.dailyData ) return []
    
   const { dailyData  } = data
   const totalSalesLine ={
    id:'totalSales',
    color: "hsl(211, 70%, 50%)",
    data:[]
}

const totalUnitsLine ={
    id:'totalUnitss',
    color: "hsl(211, 70%, 50%)",
    data:[]
}
   Object.values(dailyData).forEach(({date, totalSales, totalUnits})=>{
    const dateFormated = new Date(date)
    if( dateFormated >= startDate && dateFormated<= endDate  ){
      const splitDate = date.substring(date.indexOf( '-'+1)) 
      totalSalesLine.data=[
        ...totalSalesLine.data,
        {x:splitDate, y:totalSales}
    ]

    totalUnitsLine.data=[
        ...totalUnitsLine.data,
        {x:splitDate, y:totalUnits}
    ]
    
    }
   })

   const formatedData = [totalSalesLine, totalUnitsLine];
   return [formatedData];

  }, [data, startDate, endDate])

// console.log(formatedData)
if(!data.dailyData ) return <>loading....</>
  return (
    <Container>
       <Nav/>
      <Title  title= 'Daily' text= 'Daily overview of general revenue and profit' />
   
   <Wrapper>
   <Container>
    startDate
     <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
            />
     </Container>
     <Container  >
     endDate
     <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
            />
     </Container>
   </Wrapper>
   <Container style={{ height:'500px', width:'100%' }}>
   <ResponsiveLine
        data={formatedData}
        theme={{
          axis: {
            domain: {
              line: {
                stroke: 'white' ,
              },
            },
            legend: {
              text: {
                fill: 'white'  ,
              },
            },
            ticks: {
              line: {
                stroke:'white' ,
                strokeWidth: 1,
              },
              text: {
                fill: 'white' ,
              },
            },
          },
          legends: {
            text: {
              fill: 'white' ,
            },
          },
          tooltip: {
            container: {
              color: 'black' ,
            },
          },
        }}


        margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation:90,
            legend: 'Month',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 30,
            legend: 'Total',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
   </Container>
    </Container>
    
  )
}

export default Daily