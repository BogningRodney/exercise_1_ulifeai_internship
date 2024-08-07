import { Box } from '@mui/material'
import React from 'react'
import NavBar from './navbar'
import ApiRespose from './apiRespose'
import Questions from './questions'

export default function HomePage() {
  return (
    <Box bgcolor="pink" flex={4}>
        <NavBar />
        <Box sx={{ width: "80%", margin: "auto", bgcolor:" gray", padding: 5}}>
          <ApiRespose />
          <Questions />
        </Box>
    </Box>
  )
}
