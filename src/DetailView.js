import React from 'react'
import {CardContent, Typography, CardMedia, Rating, Box, Grid} from '@mui/material'

const DetailView = ({selectedProduct}) => {
  return (
    <Grid item xs={12} sm={6} md={9}>
      <Box
        sx={{
          display: 'objectFit',
        }}
      >
        <CardMedia
          component="img"
          style={{
            aspectRatio: '1.88',
            objectFit: 'contain',
            objectPosition: 'center',
            width: '100%',
            alignSelf: 'stretch',
            overflow: 'hidden',
            maxWidth: '864px',
          }}
          image={selectedProduct.image}
          alt={selectedProduct.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {selectedProduct.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {selectedProduct.description}
          </Typography>
          <br />
          <Typography variant="body1">
            Price: ${selectedProduct.price}
          </Typography>
          <Typography variant="body1">
            Category: {selectedProduct.category}
          </Typography>
          <Rating name="rating" value={selectedProduct.rating} />
        </CardContent>
      </Box>
    </Grid>
  )
}

export default DetailView
