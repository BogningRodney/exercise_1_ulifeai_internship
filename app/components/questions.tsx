import { Box } from '@mui/material'
import React from 'react'

const Questions = () => {
  return (
    <Box>
    <Box sx={{  display: "flex", justifyContent: "space-between", position: "relative"}}>
      <Box flex={1}> </Box>
      <Box flex={1} sx={{position: "absolute", right: "0px"}}>Question</Box>
    </Box>
    </Box>
  )
}

export default Questions
