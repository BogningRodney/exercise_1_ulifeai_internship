import { Box, Typography } from '@mui/material'
import React from 'react'

export default function Sidebar() {
  return (
    <Box bgcolor="yellow" flex={1} sx={{ display:{ xs:"none", sm:"block"}}}>
        
        <Box sx={{ height: "100vh", bgcolor: "red", boxSizing: "border-box", padding: 5}}> 
          <Typography variant='h4' sx={{ fontWeight: 700}}> Historique </Typography>
          <Box>
            
          </Box>
        </Box>

    </Box>
  )
}
