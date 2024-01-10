import React from 'react'
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Divider,
  Avatar,
  Grid,
  Paper
} from '@mui/material'

const truncateDescription = (description, maxLength) => {
  if (description.length > maxLength) {
    return description.substring(0, maxLength) + ' ...'
  }
  return description
}

const MasterView = ({products, setSelectedProduct}) => {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Paper
        style={{
          position: 'sticky',
          top: 0,
          maxHeight: 'calc(100vh)',
          overflowY: 'auto',
          width: 'min-content',
        }}
        elevation={3}
      >
        <List>
          {products.map((product, index) => (
            <ListItem
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              sx={{
                marginBottom: index < products.length - 1 ? 2 : 0,
                cursor: 'pointer',
              }}
            >
              <ListItemAvatar>
                <Avatar
                  alt={product.title}
                  src={product.image}
                  variant="rounded"
                  sx={{
                    width: '1.5in',
                    height: '1.5in',
                    objectFit: 'cover',
                  }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <span>
                    <span style={{color: 'purple'}}>{product.category}</span>
                    <br />
                    <span style={{color: 'black', fontWeight: 'bold'}}>
                      {` ${product.title}`}
                    </span>
                  </span>
                }
                secondary={truncateDescription(product.description, 100)}
                sx={{marginLeft: 2, marginTop: 1}}
              />
            </ListItem>
          ))}
          <Divider />
        </List>
      </Paper>
    </Grid>
  )
}

export default MasterView
