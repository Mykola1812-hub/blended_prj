import { getCategories, getProducts } from "./products-api"
import { renderCategoryList, renderProductsList } from "./render-function";

export async function initHomePage() {
    const categories = await getCategories();
    renderCategoryList(categories)
    
    const {products} = await getProducts()
    renderProductsList(products);
}

