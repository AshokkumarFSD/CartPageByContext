import { createContext, useState } from "react"
import ProductsFile from '../assets/products.json'
import Cart from "../components/Cart";

const {products} = ProductsFile;
export const AppCxt = createContext(products)

export function AppContext()
{
    const[productsArray,setProductsArray] = useState(products);
    return(
        <AppCxt.Provider value={{productsArray,setProductsArray}}>
            <Cart></Cart>
        </AppCxt.Provider>
    )
}
