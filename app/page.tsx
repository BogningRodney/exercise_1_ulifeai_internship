import { Box, Stack } from "@mui/material";
import Sidebar from "./components/sidebar";
import HomePage from "./components/Home";


export default function Home() {
  return (
    <Box>

      <Stack direction="row" justifyContent="space-between">
        <Sidebar />
        <HomePage />
        
      </Stack>
    </Box>
  );
}
