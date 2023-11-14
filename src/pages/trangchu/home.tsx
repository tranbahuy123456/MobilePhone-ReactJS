import { Footer } from "~/components/footer"
import { Header } from "~/components/header"
import { Header_1_page } from "./import_h-b-f_trangchu/header_1_page"
import Product_sp from "./product/product_sp"

export const HomePage = () => {
    return(
        <>
        <Header/>
        <Header_1_page/>
        <Product_sp/>
        <Footer/>
        
        </>
    )
}