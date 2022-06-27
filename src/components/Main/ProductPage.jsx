import React from 'react';
import styled from 'styled-components';

function ProductPage() {
    const StyledProductsPage = styled.div`
        margin: 32rem 0 0 0;   
        color: yellow;
    `;
  return (
    <StyledProductsPage>
        <h2>Product</h2>
    </StyledProductsPage>
  )
}

export default ProductPage