import { useTheme } from "@mui/material"
import { tokens } from "../../theme"
import { ResponsiveChoropleth } from "@nivo/geo";
import geoThai from "../../data/geoThaiJson.json"
import { useState } from "react";

let a = []
geoThai.features.forEach(x=>{
    a.push({ "id":x.properties.name, "value": 345798 })
    x.id = x.properties.name
})
let data = a;
let mapData = geoThai
console.log(mapData)
console.log(data)


export default function Map(){
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    const [location,setLocation] = useState([ -2.6, 1.15 ]); 
    return (
        <>
        <ResponsiveChoropleth
                data={data}
                theme={{
                    axis: {
                        domain: {
                            line: { stroke: colors.blueAccent[300] }
                        },
                        // legend: {
                        //     text: { fill: colors.primary[100], fontSize: 19 }
                        // },
                        ticks: {
                            line: {
                                stroke: colors.blueAccent[300],
                                strokeWidth: 2
                            },
                            text: { fill: colors.primary[100], fontSize: 14, }
                        }
                    },
                    legends: { text: { fontSize: 15, fill: colors.primary[100]  }  },
                }}
                features={geoThai.features}
                margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                colors="nivo"
                domain={[ 0, 900000 ]}
                unknownColor="#666666"
                label="properties.name"
                valueFormat=".2s"
                projectionScale={2200}
                projectionTranslation={location}
                projectionRotation={[ 0, 0, 0 ]}
                enableGraticule={true}
                graticuleLineColor="#dddddd"
                borderWidth={0.5}
                borderColor="#152538"
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: '#38bcb2',
                        size: 4,
                        padding: 1,
                        stagger: true
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: '#eed312',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10
                    },
                    {
                        id: 'gradient',
                        type: 'linearGradient',
                        colors: [
                            {
                                offset: 0,
                                color: '#000'
                            },
                            {
                                offset: 100,
                                color: 'inherit'
                            }
                        ]
                    }
                ]}
                fill={[
                    {
                        match: {
                            id: 'CAN'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'CHN'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'ATA'
                        },
                        id: 'gradient'
                    }
                ]}
                legends={[
                    {
                        anchor: 'bottom-left',
                        direction: 'column',
                        justify: true,
                        translateX: 20,
                        translateY: -100,
                        itemsSpacing: 1,
                        itemWidth: 120,
                        itemHeight: 18,
                        itemDirection: 'left-to-right',
                        itemTextColor: colors.primary[100],
                        itemOpacity: 0.85,
                        symbolSize: 18,
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemTextColor: colors.greenAccent[400],
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
        />
        </>
    )
}