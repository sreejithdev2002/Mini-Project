import React from 'react'
import Header from '../../Components/Admin/Header/Header'
import Footer from '../../Components/Admin/Footer/Footer'
import ProductsTable from '../../Components/Admin/ProductsTable/ProductsTable'

function AdminViewProducts() {
  return (
    <>
      <Header/>
      <ProductsTable/>
      <Footer/>
    </>
  )
}

export default AdminViewProducts
