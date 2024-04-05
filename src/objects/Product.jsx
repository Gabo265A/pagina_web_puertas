import ProductList from './ProductList'

const Product = () => {
    const products = [
        {
            id: 1,
            imageUrl: 'https://via.placeholder.com/150',
            name: 'Product 1',
            description: 'Description 1',
            price: 100
        },
        {
            id: 2,
            imageUrl: 'https://via.placeholder.com/150',
            name: 'Product 2',
            description: 'Description 2',
            price: 200
        },
        {
            id: 3,
            imageUrl: 'https://via.placeholder.com/150',
            name: 'Product 3',
            description: 'Description 3',
            price: 300
        }
    ]

    return <ProductList products={products} />
}

export default Product
