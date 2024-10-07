import { Box, Typography, useTheme } from "@mui/material"
import { tokens } from "../../../theme"
import BarChart from "../../../components/chart/BarChart";
import Header from "../../../components/Header";

const data = [
    {
        "country": "AD",
        "hot dog": 24,
        "hot dogColor": "hsl(267, 70%, 50%)",
        "burger": 78,
        "burgerColor": "hsl(270, 70%, 50%)",
        "sandwich": 148,
        "sandwichColor": "hsl(348, 70%, 50%)",
        "kebab": 85,
        "kebabColor": "hsl(69, 70%, 50%)",
        "fries": 144,
        "friesColor": "hsl(243, 70%, 50%)",
        "donut": 48,
        "donutColor": "hsl(195, 70%, 50%)"
    },
    {
        "country": "AE",
        "hot dog": 153,
        "hot dogColor": "hsl(260, 70%, 50%)",
        "burger": 60,
        "burgerColor": "hsl(209, 70%, 50%)",
        "sandwich": 186,
        "sandwichColor": "hsl(132, 70%, 50%)",
        "kebab": 88,
        "kebabColor": "hsl(135, 70%, 50%)",
        "fries": 35,
        "friesColor": "hsl(191, 70%, 50%)",
        "donut": 79,
        "donutColor": "hsl(113, 70%, 50%)"
    },
    {
        "country": "AF",
        "hot dog": 124,
        "hot dogColor": "hsl(358, 70%, 50%)",
        "burger": 11,
        "burgerColor": "hsl(145, 70%, 50%)",
        "sandwich": 95,
        "sandwichColor": "hsl(192, 70%, 50%)",
        "kebab": 47,
        "kebabColor": "hsl(96, 70%, 50%)",
        "fries": 3,
        "friesColor": "hsl(231, 70%, 50%)",
        "donut": 124,
        "donutColor": "hsl(61, 70%, 50%)"
    },
    {
        "country": "AG",
        "hot dog": 92,
        "hot dogColor": "hsl(188, 70%, 50%)",
        "burger": 120,
        "burgerColor": "hsl(46, 70%, 50%)",
        "sandwich": 25,
        "sandwichColor": "hsl(344, 70%, 50%)",
        "kebab": 178,
        "kebabColor": "hsl(203, 70%, 50%)",
        "fries": 37,
        "friesColor": "hsl(344, 70%, 50%)",
        "donut": 191,
        "donutColor": "hsl(284, 70%, 50%)"
    },
    {
        "country": "AI",
        "hot dog": 97,
        "hot dogColor": "hsl(20, 10%, 50%)",
        "burger": 56,
        "burgerColor": "hsl(266, 70%, 50%)",
        "sandwich": 177,
        "sandwichColor": "hsl(72, 70%, 50%)",
        "kebab": 152,
        "kebabColor": "hsl(353, 70%, 50%)",
        "fries": 166,
        "friesColor": "hsl(94, 70%, 50%)",
        "donut": 106,
        "donutColor": "hsl(220, 70%, 50%)"
    },
    {
        "country": "AL",
        "hot dog": 17,
        "hot dogColor": "hsl(180, 70%, 50%)",
        "burger": 174,
        "burgerColor": "hsl(236, 70%, 50%)",
        "sandwich": 75,
        "sandwichColor": "hsl(199, 70%, 50%)",
        "kebab": 144,
        "kebabColor": "hsl(160, 70%, 50%)",
        "fries": 63,
        "friesColor": "hsl(290, 70%, 50%)",
        "donut": 135,
        "donutColor": "hsl(216, 70%, 50%)"
    },
    {
        "country": "AM",
        "hot dog": 134,
        "hot dogColor": "hsl(165, 70%, 50%)",
        "burger": 122,
        "burgerColor": "hsl(61, 70%, 50%)",
        "sandwich": 62,
        "sandwichColor": "hsl(85, 70%, 50%)",
        "kebab": 159,
        "kebabColor": "hsl(292, 70%, 50%)",
        "fries": 38,
        "friesColor": "hsl(62, 70%, 50%)",
        "donut": 107,
        "donutColor": "hsl(37, 70%, 50%)"
    }
]



export default function Barchart({ isDashboard = false }) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <BarChart data={data}/>
      </Box>
    </Box>
    )
}