import React from 'react'
import {Box, Typography} from '@mui/material'
import DetailView from './DetailView'

const Header = ({selectedProduct}) => {
  return (
    <Box
      sx={{
        background: '#000',
        color: '#fff',
        padding: '16px',
        paddingY: '24px',
        borderRadius: '8px',
        textAlign: 'center',
        marginBottom: '16px',
      }}
    >
      {!selectedProduct ? (
        <Typography variant="h4" sx={{fontSize: '2.5rem'}}>
          Master View
        </Typography>
      ) : (
        <Typography variant="h4" sx={{fontSize: '2.5rem'}}>
          Detail View
        </Typography>
      )}
    </Box>
  )
}

export default Header
