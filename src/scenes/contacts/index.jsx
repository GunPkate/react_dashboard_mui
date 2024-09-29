import { Box, colors, Toolbar, Typography, useTheme } from "@mui/material"
import { DataGrid,GridToolbar } from "@mui/x-data-grid"
// import { mockDataContacts } from "../../data/data"
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined"
// import LockOpenOutlinedIcon from "@mui/icons-materia/LockOpenOutlined"
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined"
import Header from "../../components/Header"
import { tokens } from "../../theme"
export const mockDataContacts = [
    {
      id: 1,
      name: "Jon Snow",
      email: "jonsnow@gmail.com",
      age: 35,
      phone: "(665)121-5454",
      address: "0912 Won Street, Alabama, SY 10001",
      city: "New York",
      zipCode: "10001",
      registrarId: 123512,
    },
    {
      id: 2,
      name: "Cersei Lannister",
      email: "cerseilannister@gmail.com",
      age: 42,
      phone: "(421)314-2288",
      address: "1234 Main Street, New York, NY 10001",
      city: "New York",
      zipCode: "13151",
      registrarId: 123512,
    },
]

export default function Contacts() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        { field: "id", headerName: "ID" },
        { field: "registrarId", headerName: "Register ID" },
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
                        width="80%"
                        my="10px"
                        p="5px"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
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
                <DataGrid rows={mockDataContacts} columns={columns} components= {{ Toolbar: GridToolbar }} />
            </Box>
        </Box>
    )
}