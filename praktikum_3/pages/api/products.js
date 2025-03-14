export default async function handler(re, res){
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();

    res.status(200).json(products);
}