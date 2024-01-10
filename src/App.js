import React, {useState, useEffect} from 'react'
import {Grid} from '@mui/material'
import axios from 'axios'
import MasterView from './MasterView.js'
import DetailView from './DetailView.js'
import InitialView from './InitialView.js'
import Header from './Header.js'

const App = () => {
  const [products, setProducts] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(null)

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error))
  }, [])

  return (
    <>
    <Header selectedProduct={selectedProduct} />
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <MasterView
            products={products}
            setSelectedProduct={setSelectedProduct}
          />
        </Grid>
        <Grid item xs={12} md={6}>
        {selectedProduct ? (
            <DetailView selectedProduct={selectedProduct} />
          ) : (
            <InitialView />
          )}
        </Grid>
      </Grid>
    </>
  )
}

export default App
