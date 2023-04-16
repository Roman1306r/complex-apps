export const getProductData = async() => {
    try {
        const url = 'https://dummyjson.com/products'
        const responce = await fetch(url)
        const result = await responce.json()
        return result
    } catch (error: any) {
        alert(error.message)
    }
}   