import { Box, colors, Toolbar, Typography, useTheme } from "@mui/material"
import { DataGrid,GridToolbar } from "@mui/x-data-grid"
// import { mockDataTeam } from "../../data/data"
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined"
// import LockOpenOutlinedIcon from "@mui/icons-materia/LockOpenOutlined"
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined"
import Header from "../../components/Header"
import { tokens } from "../../theme"

const mockDataTeam = [
    {
      id: 1,
      name: "Jon Snow",
      email: "jonsnow@gmail.com",
      age: 35,
      phone: "(665)121-5454",
      access: "admin",
    },
]

export default function Team() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        { field: "id", headerName: "ID" },
        { field: "registerId", headerName: "Register ID" },
        { field: "name", headerName: "Name", flex: 1, cellClassName: "name-column--cell" },
        { field: "age", headerName: "Age", type: "number", align: "left", headerAlign: "left" },
        { field: "phone", headerName: "Phone Number", flex: 1 },
        { field: "email", headerName: "Email", flex: 1 },
        { field: "address", headerName: "Address", flex: 1 },
        { field: "city", headerName: "City", flex: 1 },
        { field: "zipCode", headerName: "ZipCode", flex: 1 },
        {
            field: "access", headerName: "Access Level", flex: 1, renderCell: ({ row: { access } }) => {
                return (
                    <Box
                        width="60%"
                        m="0 auto"
                        p="5px"
                        display="flex"
                        justifyContent="center"
                        backgroundColor={
                            access === "admin" ?
                                colors.greenAccent[600] : colors.greenAccent[700]
                        }
                        borderRadius="4px"
                    >
                        {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
                        {access === "manager" && <SecurityOutlinedIcon />}
                        {access === "user" && <SecurityOutlinedIcon />}
                        <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                            {access}
                        </Typography>
                    </Box>
                )
            }
        },
    ]

    return (
        <Box m="20px">
            <Header title="Team" Subtitle="Managing Team Members" />
            <Box
                m="40px 0 0 0" height="75vh"
                sx={{
                    "& .MultiDataGrid-root": { border: "none" },
                    "& .MultiDataGrid-cell": { borderBottom: "none" },
                    "& .name-column-cell": { color: colors.greenAccent[300] },
                    "& .MuiDataGrid-columnHeders": { backgroundColor: colors.blueAccent[700], borderBottom: "none" },
                    "& .MuiDataGrid-virtualScroller": { backgroundColor: colors.primary[400] },
                    "& .MuiDataGrid-footerContainer": { borderTop: "none", backgroundColor: colors.blueAccent[700 ] },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": { color: `${colors.grey[100]} !important` }
                }}
            >
                <DataGrid rows={mockDataTeam} columns={columns} components= {{ Toolbar: GridToolbar }} />
            </Box>
        </Box>
    )
}