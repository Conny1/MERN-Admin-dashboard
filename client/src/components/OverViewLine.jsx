import axios from 'axios'
import React, { useEffect, useMemo, useState } from 'react'

import { ResponsiveLine } from '@nivo/line'



const OverViewLine = ({view, isDashboard = false}) => {
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

    const [totalSalesLine, totalUnitsLine] = useMemo(() => {
        if(!data.monthlyData) return []
        const { monthlyData } = data;
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

        Object.values(monthlyData).reduce((acc, {month, totalSales, totalUnits})=>{

            const currSales = acc.sales + totalSales
            const curUnits = acc.units + totalUnits
            totalSalesLine.data=[
                ...totalSalesLine.data,
                {x:month, y:currSales}
            ]

            totalUnitsLine.data=[
                ...totalUnitsLine.data,
                {x:month, y:curUnits}
            ]
            
            return { sales:currSales, units:curUnits }
        }, {sales:0,units:0})

        return [ [totalSalesLine], [totalUnitsLine] ]
    }, [data])

    if( !data.monthlyData) return 'loading...'
    
  return (
    
<ResponsiveLine
        data={view === 'units'?totalUnitsLine:totalSalesLine}
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

        margin={{  top: 20, right: 50, bottom: 50, left: 70 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: false,
            reverse: false
        }}
        yFormat=" >-.2f"
        curve="catmullRom"
        enableArea={isDashboard}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            format: (v) => {
                if (isDashboard) return v.slice(0, 3);
                return v;
              },
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: isDashboard ? "" : "Month",
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            
            orient: 'left',
            
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: isDashboard
            ? ""
            : `Total ${view === "sales" ? "Revenue" : "Units"} for Year`,
            legendOffset: -60,
            legendPosition: 'middle'
        }}
        enableGridX={false}
       
        enableGridY={true}
        pointSize={10}
        pointColor="#ffffff"
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor', modifiers: [] }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={
            !isDashboard
              ? [
                  {
                    anchor: "bottom-right",
                    direction: "column",
                    justify: false,
                    translateX: 30,
                    translateY: -40,
                    itemsSpacing: 0,
                    itemDirection: "left-to-right",
                    itemWidth: 80,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: "circle",
                    symbolBorderColor: "rgba(0, 0, 0, .5)",
                    effects: [
                      {
                        on: "hover",
                        style: {
                          itemBackground: "rgba(0, 0, 0, .03)",
                          itemOpacity: 1,
                        },
                      },
                    ],
                  },
                ]
              : undefined}
    />


  )
}

export default OverViewLine