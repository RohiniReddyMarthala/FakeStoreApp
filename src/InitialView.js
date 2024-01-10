import React from 'react'
import {Typography, Box} from '@mui/material'
function InitialView() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        overflow: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <section className="max-w-lg items-stretch self-stretch flex flex-col">
        <Typography
          variant="h6"
          align="center"
          color="violet"
          fontWeight="fontWeightBold"
        >
          Nothing to display...
        </Typography>

        <Typography
          variant="h1"
          align="center"
          color="gray"
          fontWeight="fontWeightBold"
          fontSize={40}
          letterSpacing="tight"
        >
          Select an item to display
        </Typography>

        <Typography
          variant="h5"
          align="center"
          color="slate"
          fontWeight="fontWeightBold"
          fontSize={24}
          lineHeight={2}
        >
          Select an item from the master view to display details in the detail
          view.
        </Typography>
      </section>
    </Box>
  )
}
export default InitialView
