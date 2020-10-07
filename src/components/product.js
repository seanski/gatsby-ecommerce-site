import React from "react"
import { Box, Button, Grid, Image } from 'theme-ui'
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";

function Product({ product }) {
  const { addItem } = useShoppingCart()

  return (
    <Box sx={{ maxWidth: '768px', margin: '0 auto'}}>
      <Grid
        sx={{color: 'primary', fontWeight: 'heading'}}
        columns={[1, 2]}
      >
        <Box>
          <Image src={product.image} alt={product.name} />
        </Box>
        <Box
          as="section"
          sx={{
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Box as="p">{product.description}</Box>
          <Box as="">{formatCurrencyString({value: product.price, currency: product.currency})}</Box>
        </Box>
        <Button
          aira-label={`Add ${product.name} to cart`}
          onClick={() => addItem(product)}
          sx={{ backgroundColor: 'primary' }}
        >
          Add To Cart
        </Button>
      </Grid>
    </Box>
  )
}

export default Product
