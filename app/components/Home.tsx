import { Box } from '@mui/material'
import React from 'react'
import NavBar from './navbar'

export default function HomePage() {
  return (
    <Box bgcolor="pink" flex={4}>
        <NavBar />
        Home
    </Box>
  )
}
