import axios from 'axios'
import React, { useEffect,useState } from 'react'
import styled from 'styled-components'
import { ResponsivePie } from '@nivo/pie'

const Container = styled.div`
height:100%;
width:100%;
`
const Breakedown = ({isDashboard = false}) => {
    const [data, setdata] = useState({})
    useEffect(() => {
        const fetchData =async()=>{
            try {
                const result = await axios.get(`${process.env.REACT_APP_BASE_URL}/stats/overal`)
                setdata(result.data)
                
                
            } catch (error) {
                
            }
        }
    fetchData()
    }, [])
    if( !data.salesByCategory ) return <>loading....</>
   
   
    const  formattedData=  Object.entries(data.salesByCategory).map(( [category, sales] )=> (
           
        {
            
            id: category,
            label: category,
            value: sales,
            color: "hsl(175, 70%, 50%)"
        }
       
    
)) 



   
  return (
    <Container  >

<ResponsivePie
        data={formattedData}
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
        // colors={{ datum: "data.color" }}
        margin={
          isDashboard
            ? { top: 40, right: 80, bottom: 100, left: 50 }
            : { top: 40, right: 80, bottom: 80, left: 80 }
        }
        sortByValue={true}
        innerRadius={0.45}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        enableArcLinkLabels={!isDashboard}
        arcLinkLabelsTextColor="white"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: isDashboard ? 20 : 0,
            translateY: isDashboard ? 50 : 56,
            itemsSpacing: 0,
            itemWidth: 85,
            itemHeight: 18,
            itemTextColor: "#999",
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "red",
                },
              },
            ],
          },
        ]}
      />
     

    </Container>
  )
}

export default Breakedown