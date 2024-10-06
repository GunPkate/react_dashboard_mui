import { useTheme } from "@mui/material"
import { tokens } from "../../../theme"
import { ResponsiveLine } from "@nivo/line";

export default function Linechart(){
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    
    const data = [
        {
          "id": "japan",
          "color": "hsl(298, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 43
            },
            {
              "x": "helicopter",
              "y": 26
            },
            {
              "x": "boat",
              "y": 106
            },
            {
              "x": "train",
              "y": 9
            },
            {
              "x": "subway",
              "y": 73
            },
            {
              "x": "bus",
              "y": 280
            },
            {
              "x": "car",
              "y": 42
            },
            {
              "x": "moto",
              "y": 215
            },
            {
              "x": "bicycle",
              "y": 250
            },
            {
              "x": "horse",
              "y": 97
            },
            {
              "x": "skateboard",
              "y": 95
            },
            {
              "x": "others",
              "y": 238
            }
          ]
        },
        {
          "id": "france",
          "color": "hsl(107, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 119
            },
            {
              "x": "helicopter",
              "y": 107
            },
            {
              "x": "boat",
              "y": 161
            },
            {
              "x": "train",
              "y": 183
            },
            {
              "x": "subway",
              "y": 129
            },
            {
              "x": "bus",
              "y": 222
            },
            {
              "x": "car",
              "y": 142
            },
            {
              "x": "moto",
              "y": 212
            },
            {
              "x": "bicycle",
              "y": 55
            },
            {
              "x": "horse",
              "y": 115
            },
            {
              "x": "skateboard",
              "y": 125
            },
            {
              "x": "others",
              "y": 53
            }
          ]
        },
        {
          "id": "us",
          "color": "hsl(134, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 148
            },
            {
              "x": "helicopter",
              "y": 22
            },
            {
              "x": "boat",
              "y": 133
            },
            {
              "x": "train",
              "y": 195
            },
            {
              "x": "subway",
              "y": 218
            },
            {
              "x": "bus",
              "y": 247
            },
            {
              "x": "car",
              "y": 283
            },
            {
              "x": "moto",
              "y": 100
            },
            {
              "x": "bicycle",
              "y": 195
            },
            {
              "x": "horse",
              "y": 192
            },
            {
              "x": "skateboard",
              "y": 226
            },
            {
              "x": "others",
              "y": 272
            }
          ]
        },
        {
          "id": "germany",
          "color": "hsl(192, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 264
            },
            {
              "x": "helicopter",
              "y": 147
            },
            {
              "x": "boat",
              "y": 148
            },
            {
              "x": "train",
              "y": 32
            },
            {
              "x": "subway",
              "y": 198
            },
            {
              "x": "bus",
              "y": 296
            },
            {
              "x": "car",
              "y": 63
            },
            {
              "x": "moto",
              "y": 163
            },
            {
              "x": "bicycle",
              "y": 175
            },
            {
              "x": "horse",
              "y": 235
            },
            {
              "x": "skateboard",
              "y": 41
            },
            {
              "x": "others",
              "y": 148
            }
          ]
        },
        {
          "id": "norway",
          "color": "hsl(300, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 264
            },
            {
              "x": "helicopter",
              "y": 142
            },
            {
              "x": "boat",
              "y": 222
            },
            {
              "x": "train",
              "y": 211
            },
            {
              "x": "subway",
              "y": 186
            },
            {
              "x": "bus",
              "y": 106
            },
            {
              "x": "car",
              "y": 52
            },
            {
              "x": "moto",
              "y": 203
            },
            {
              "x": "bicycle",
              "y": 202
            },
            {
              "x": "horse",
              "y": 51
            },
            {
              "x": "skateboard",
              "y": 80
            },
            {
              "x": "others",
              "y": 78
            }
          ]
        }
    ]

    return (
        <>
            <ResponsiveLine
                    data={data}
                    margin={{ top: 20, right: 140, bottom: 200, left: 60 }}
                    xScale={{ type: 'point' }}
                    yScale={{
                        type: 'linear',
                        min: 'auto',
                        max: 'auto',
                        stacked: true,
                        reverse: false
                    }}
                    yFormat=" >-.2f"
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
                        legends: { text: { fontSize: 20, fill: colors.primary[100]  }  },
                    }}
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'transportation',
                        legendOffset: 36,
                        legendPosition: 'middle',
                        truncateTickAt: 0
                    }}
                    axisLeft={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'count',
                        legendOffset: -40,
                        legendPosition: 'middle',
                        truncateTickAt: 0
                    }}
                    pointSize={10}
                    pointColor={{ theme: 'background' }}
                    pointBorderWidth={2}
                    pointBorderColor={{ from: 'serieColor' }}
                    pointLabel="data.yFormatted"
                    pointLabelYOffset={-12}
                    enableTouchCrosshair={true}
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
        </>
    )
}