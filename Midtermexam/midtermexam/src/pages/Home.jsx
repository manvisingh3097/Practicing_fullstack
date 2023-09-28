// import CategoryList from "../components/CategoryList"

import Header from "../components/Header"

import Navbar from "../components/Navbar"

//import ProductList from "../components/ProductList"
import AllProducts from "../components/AllProducts"

const HomePages = () => {

return(
    <>
       
        <Header />
        <hr />
        <Navbar /> 
        <hr />
        <AllProducts />
        {/* <EachCategory data={catName} /> */}
        {/* <ProductList /> */}
    </>
)
}
export default HomePages;