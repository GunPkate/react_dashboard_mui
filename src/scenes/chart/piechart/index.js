import { Box } from "@mui/material";
import Header from "../../../components/Header";
import PieChart from "../../../components/chart/PieChart";

const data = [
    {
      "id": "css",
      "label": "css",
      "value": 253,
      "color": "hsl(102, 70%, 50%)"
    },
    {
      "id": "lisp",
      "label": "lisp",
      "value": 396,
      "color": "hsl(32, 70%, 50%)"
    },
    {
      "id": "haskell",
      "label": "haskell",
      "value": 44,
      "color": "hsl(51, 70%, 50%)"
    },
    {
      "id": "python",
      "label": "python",
      "value": 328,
      "color": "hsl(311, 70%, 50%)"
    },
    {
      "id": "php",
      "label": "php",
      "value": 271,
      "color": "hsl(231, 70%, 50%)"
    }
  ]

export default function Piechart(){
    return (
        <Box m="20px">
            <Header title="Pie Chart" subtitle="Simple Pie Chart" />
            <Box height="75vh">
                <PieChart data={data}/>
            </Box>
        </Box>
    )
}