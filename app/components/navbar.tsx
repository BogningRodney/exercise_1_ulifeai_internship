import { AppBar, Box, Button, InputBase, Toolbar, Typography } from '@mui/material'
import React from 'react'

export default function NavBar() {
  return (
    <AppBar position="sticky">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box> <Typography variant='h4'>Nav</Typography></Box>
        <Box sx={{display: "flex", width: "35%", height: 25 }}>
          <Box sx={{ width: "80%", height: "100%", bgcolor: "white", borderRadius: 2, paddingBottom:1}}> <InputBase placeholder="Question..."/> </Box>
          <Button variant='contained' color='secondary' sx={{ width: "20%"}}>Go</Button>
        </Box>
        <Box sx={{ width: 30, height: 30, bgcolor: "white"}}> </Box>
      </Toolbar>
    </AppBar>
  )
}
