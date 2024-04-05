import ProductsCard from '../components/ProductsCard'

const ProductList = ({ products }) => {
    console.log(products)
    return (
        <>
            {
                products.map((product) => (
                    <ProductsCard
                        key={product.id}
                        imageUrl={product.imageUrl}
                        name={product.name}
                        description={product.description}
                        price={product.price.valueOf()}
                    />
                ))
            }
        </>
    )
}

export default ProductList
