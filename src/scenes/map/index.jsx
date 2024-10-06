import { useTheme } from "@mui/material"
import { tokens } from "../../theme"
import { ResponsiveChoropleth } from "@nivo/geo";
import geoThai from "../../data/geoThaiJson.json"

const data = [
    {
      "id": "AFG",
      "value": 704687
    },
    {
      "id": "AGO",
      "value": 197362
    },
    {
      "id": "ALB",
      "value": 164420
    },
    {
      "id": "ARE",
      "value": 608059
    },
    {
      "id": "ARG",
      "value": 423552
    },
    {
      "id": "ARM",
      "value": 642403
    },
    {
      "id": "ATA",
      "value": 791805
    },
    {
      "id": "ATF",
      "value": 735407
    },
    {
      "id": "AUT",
      "value": 430497
    },
    {
      "id": "AZE",
      "value": 808037
    },
    {
      "id": "BDI",
      "value": 256556
    },
    {
      "id": "BEL",
      "value": 541114
    },
    {
      "id": "BEN",
      "value": 491222
    },
    {
      "id": "BFA",
      "value": 422101
    },
    {
      "id": "BGD",
      "value": 399293
    },
    {
      "id": "BGR",
      "value": 36658
    },
    {
      "id": "BHS",
      "value": 257525
    },
    {
      "id": "BIH",
      "value": 657033
    },
    {
      "id": "BLR",
      "value": 689174
    },
    {
      "id": "BLZ",
      "value": 341546
    },
    {
      "id": "BOL",
      "value": 810020
    },
    {
      "id": "BRN",
      "value": 411354
    },
    {
      "id": "BTN",
      "value": 404098
    },
    {
      "id": "BWA",
      "value": 137481
    },
    {
      "id": "CAF",
      "value": 403400
    },
    {
      "id": "CAN",
      "value": 917552
    },
    {
      "id": "CHE",
      "value": 14368
    },
    {
      "id": "CHL",
      "value": 259453
    },
    {
      "id": "CHN",
      "value": 985654
    },
    {
      "id": "CIV",
      "value": 882267
    },
    {
      "id": "CMR",
      "value": 685791
    },
    {
      "id": "COG",
      "value": 961973
    },
    {
      "id": "COL",
      "value": 82837
    },
    {
      "id": "CRI",
      "value": 243994
    },
    {
      "id": "CUB",
      "value": 358020
    },
    {
      "id": "-99",
      "value": 532484
    },
    {
      "id": "CYP",
      "value": 457147
    },
    {
      "id": "CZE",
      "value": 966161
    },
    {
      "id": "DEU",
      "value": 342323
    },
    {
      "id": "DJI",
      "value": 990449
    },
    {
      "id": "DNK",
      "value": 711085
    },
    {
      "id": "DOM",
      "value": 955300
    },
    {
      "id": "DZA",
      "value": 492898
    },
    {
      "id": "ECU",
      "value": 114541
    },
    {
      "id": "EGY",
      "value": 170502
    },
    {
      "id": "ERI",
      "value": 420735
    },
    {
      "id": "ESP",
      "value": 996111
    },
    {
      "id": "EST",
      "value": 766215
    },
    {
      "id": "ETH",
      "value": 703527
    },
    {
      "id": "FIN",
      "value": 566585
    },
    {
      "id": "FJI",
      "value": 387217
    },
    {
      "id": "FLK",
      "value": 678495
    },
    {
      "id": "FRA",
      "value": 857904
    },
    {
      "id": "GAB",
      "value": 76337
    },
    {
      "id": "GBR",
      "value": 703787
    },
    {
      "id": "GEO",
      "value": 136914
    },
    {
      "id": "GHA",
      "value": 971272
    },
    {
      "id": "GIN",
      "value": 379682
    },
    {
      "id": "GMB",
      "value": 370503
    },
    {
      "id": "GNB",
      "value": 686059
    },
    {
      "id": "GNQ",
      "value": 433675
    },
    {
      "id": "GRC",
      "value": 473178
    },
    {
      "id": "GTM",
      "value": 70123
    },
    {
      "id": "GUY",
      "value": 961388
    },
    {
      "id": "HND",
      "value": 531621
    },
    {
      "id": "HRV",
      "value": 900130
    },
    {
      "id": "HTI",
      "value": 111821
    },
    {
      "id": "HUN",
      "value": 706055
    },
    {
      "id": "IDN",
      "value": 55427
    },
    {
      "id": "IND",
      "value": 377564
    },
    {
      "id": "IRL",
      "value": 482760
    },
    {
      "id": "IRN",
      "value": 194750
    },
    {
      "id": "IRQ",
      "value": 275516
    },
    {
      "id": "ISL",
      "value": 7838
    },
    {
      "id": "ISR",
      "value": 967967
    },
    {
      "id": "ITA",
      "value": 640450
    },
    {
      "id": "JAM",
      "value": 707170
    },
    {
      "id": "JOR",
      "value": 393055
    },
    {
      "id": "JPN",
      "value": 266559
    },
    {
      "id": "KAZ",
      "value": 511909
    },
    {
      "id": "KEN",
      "value": 598832
    },
    {
      "id": "KGZ",
      "value": 713522
    },
    {
      "id": "KHM",
      "value": 707519
    },
    {
      "id": "OSA",
      "value": 184908
    },
    {
      "id": "KWT",
      "value": 237429
    },
    {
      "id": "LAO",
      "value": 208874
    },
    {
      "id": "LBN",
      "value": 939707
    },
    {
      "id": "LBR",
      "value": 295483
    },
    {
      "id": "LBY",
      "value": 478313
    },
    {
      "id": "LKA",
      "value": 673479
    },
    {
      "id": "LSO",
      "value": 446644
    },
    {
      "id": "LTU",
      "value": 469128
    },
    {
      "id": "LUX",
      "value": 940206
    },
    {
      "id": "LVA",
      "value": 130427
    },
    {
      "id": "MAR",
      "value": 976867
    },
    {
      "id": "MDA",
      "value": 169013
    },
    {
      "id": "MDG",
      "value": 955192
    },
    {
      "id": "MEX",
      "value": 898832
    },
    {
      "id": "MKD",
      "value": 745200
    },
    {
      "id": "MLI",
      "value": 308175
    },
    {
      "id": "MMR",
      "value": 964963
    },
    {
      "id": "MNE",
      "value": 999605
    },
    {
      "id": "MNG",
      "value": 755881
    },
    {
      "id": "MOZ",
      "value": 82885
    },
    {
      "id": "MRT",
      "value": 364942
    },
    {
      "id": "MWI",
      "value": 120467
    },
    {
      "id": "MYS",
      "value": 84367
    },
    {
      "id": "NAM",
      "value": 771996
    },
    {
      "id": "NCL",
      "value": 925387
    },
    {
      "id": "NER",
      "value": 551389
    },
    {
      "id": "NGA",
      "value": 367457
    },
    {
      "id": "NIC",
      "value": 284741
    },
    {
      "id": "NLD",
      "value": 16068
    },
    {
      "id": "NOR",
      "value": 678653
    },
    {
      "id": "NPL",
      "value": 244581
    },
    {
      "id": "NZL",
      "value": 713685
    },
    {
      "id": "OMN",
      "value": 190324
    },
    {
      "id": "PAK",
      "value": 74819
    },
    {
      "id": "PAN",
      "value": 690763
    },
    {
      "id": "PER",
      "value": 593918
    },
    {
      "id": "PHL",
      "value": 58723
    },
    {
      "id": "PNG",
      "value": 445712
    },
    {
      "id": "POL",
      "value": 494633
    },
    {
      "id": "PRI",
      "value": 500518
    },
    {
      "id": "PRT",
      "value": 401155
    },
    {
      "id": "PRY",
      "value": 758954
    },
    {
      "id": "QAT",
      "value": 396620
    },
    {
      "id": "ROU",
      "value": 905541
    },
    {
      "id": "RUS",
      "value": 329220
    },
    {
      "id": "RWA",
      "value": 950078
    },
    {
      "id": "ESH",
      "value": 202836
    },
    {
      "id": "SAU",
      "value": 552314
    },
    {
      "id": "SDN",
      "value": 269961
    },
    {
      "id": "SDS",
      "value": 431815
    },
    {
      "id": "SEN",
      "value": 18932
    },
    {
      "id": "SLB",
      "value": 722574
    },
    {
      "id": "SLE",
      "value": 281854
    },
    {
      "id": "SLV",
      "value": 949311
    },
    {
      "id": "ABV",
      "value": 519662
    },
    {
      "id": "SOM",
      "value": 21530
    },
    {
      "id": "SRB",
      "value": 858439
    },
    {
      "id": "SUR",
      "value": 923551
    },
    {
      "id": "SVK",
      "value": 656082
    },
    {
      "id": "SVN",
      "value": 270938
    },
    {
      "id": "SWZ",
      "value": 533691
    },
    {
      "id": "SYR",
      "value": 443078
    },
    {
      "id": "TCD",
      "value": 336795
    },
    {
      "id": "TGO",
      "value": 374474
    },
    {
      "id": "THA",
      "value": 910175
    },
    {
      "id": "TJK",
      "value": 329535
    },
    {
      "id": "TKM",
      "value": 126273
    },
    {
      "id": "TLS",
      "value": 747029
    },
    {
      "id": "TTO",
      "value": 241919
    },
    {
      "id": "TUN",
      "value": 567268
    },
    {
      "id": "TUR",
      "value": 239699
    },
    {
      "id": "TWN",
      "value": 324172
    },
    {
      "id": "TZA",
      "value": 406519
    },
    {
      "id": "UGA",
      "value": 185165
    },
    {
      "id": "UKR",
      "value": 293805
    },
    {
      "id": "URY",
      "value": 452942
    },
    {
      "id": "USA",
      "value": 81388
    },
    {
      "id": "UZB",
      "value": 991849
    },
    {
      "id": "VEN",
      "value": 255902
    },
    {
      "id": "VNM",
      "value": 161663
    },
    {
      "id": "VUT",
      "value": 388532
    },
    {
      "id": "PSE",
      "value": 852283
    },
    {
      "id": "YEM",
      "value": 312589
    },
    {
      "id": "ZAF",
      "value": 769912
    },
    {
      "id": "ZMB",
      "value": 913051
    },
    {
      "id": "ZWE",
      "value": 296462
    },
    {
      "id": "KOR",
      "value": 345798
    }
  ]

// let a = []
// geoThai.features.forEach(x=>{
//     a.push({ "id":x.properties.name, "value": 345798 })
//     x.id = x.properties.name
// })
// let data = a;
// let mapData = geoThai
// console.log(mapData)
// console.log(data)


export default function Map(){
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    
    return (
        <>
        <ResponsiveChoropleth
                data={data}
                features={geoThai.features}
                margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                colors="nivo"
                domain={[ 0, 1000000 ]}
                unknownColor="#666666"
                label="properties.name"
                valueFormat=".2s"
                projectionTranslation={[ 0.5, 0.5 ]}
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
                        itemsSpacing: 0,
                        itemWidth: 94,
                        itemHeight: 18,
                        itemDirection: 'left-to-right',
                        itemTextColor: '#444444',
                        itemOpacity: 0.85,
                        symbolSize: 18,
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemTextColor: '#000000',
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