import { Box, colors, Toolbar, Typography, useTheme } from "@mui/material"
import { DataGrid, GridToolbar } from "@mui/x-data-grid"
// import { mockDataTeam } from "../../data/data"
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined"
// import LockOpenOutlinedIcon from "@mui/icons-materia/LockOpenOutlined"
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined"
import Header from "../../components/Header"
import { tokens } from "../../theme"

const mockDataInvoices = [
    {
        id: 1,
        name: "Jon Snow",
        email: "jonsnow@gmail.com",
        cost: "21.24",
        phone: "(665)121-5454",
        date: "03/12/2022",
    },
    {
        id: 2,
        name: "Cersei Lannister",
        email: "cerseilannister@gmail.com",
        cost: "1.24",
        phone: "(421)314-2288",
        date: "06/15/2021",
    },
]

export default function Invoices() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        { field: "id", headerName: "ID" },
        { field: "name", headerName: "Name", flex: 0.5, cellClassName: "name-column--cell" },
        { field: "phone", headerName: "Phone Number", flex: 1 },
        { field: "email", headerName: "Email", flex: 1 },
        { field: "cost", headerName: "Cost", flex: 1, renderCell: (params) => (<Typography my="15px" color={colors.greenAccent[500]}> ${params.row.cost} </Typography>) },
        { field: "date", headerName: "Date", flex: 1 },
    ]

    return (
        <Box m="20px">
            <Header title="Invoices" Subtitle="List of Invoice Balances" />
            <Box
                m="40px 0 0 0" height="75vh"
                sx={{
                    "& .MultiDataGrid-root": { border: "none" },
                    "& .MultiDataGrid-cell": { borderBottom: "none" },
                    "& .name-column-cell": { color: colors.greenAccent[300] },
                    "& .MuiDataGrid-columnHeders": { backgroundColor: colors.blueAccent[700], borderBottom: "none" },
                    "& .MuiDataGrid-virtualScroller": { backgroundColor: colors.primary[400] },
                    "& .MuiDataGrid-footerContainer": { borderTop: "none", backgroundColor: colors.blueAccent[700] },
                    "& .MuiCheckbox-root": { color: `${colors.redAccent[200]} !important` }
                }}
            >
                <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} components={{ Toolbar: GridToolbar }} />
            </Box>
        </Box>
    )
}