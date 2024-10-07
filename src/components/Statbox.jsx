import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import ProgressCircle from "../../components/ProgressCircle";

const Statbox = ({ title, subtitle, icon, progress, increase }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box width="100%" m="0 30px">
            <Box display="flex" justifyContent="space-between">
                <Box>
                    {icon}
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        sx={{ color: colors.grey[100] }}
                    >
                        {title}
                    </Typography>
                </Box>
                <Box>
                    <ProgressCircle progress={progress}/>
                </Box>
                {/* <Header title="Dashboard" Subtitle="Welcome" /> */}
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="5h" sx={{ color: colors.greenAccent[500]}}>
                        {subtitle}
                    </Typography>
                    <Typography
                        variant="h5"
                        fontWeight="italic"
                        sx={{ color: colors.greenAccent[600] }}
                    >
                        {increase}
                    </Typography>
                </Box>
            </Box>

        </Box>
    )
}

export default Dashboard;