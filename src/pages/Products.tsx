import React from 'react'
import { Helmet } from 'react-helmet-async'

function Products() {
    return (
        <div>
            <Helmet>
                <title>All Products – ShopMondo</title>
                <meta
                    name="description"
                    content="Browse all ShopMondo products — from trendy clothing to accessories. Find your perfect style and enjoy free shipping today."
                />
                <meta
                    name="keywords"
                    content="ShopMondo products, clothes, accessories, fashion, shopping online, free shipping"
                />
                <meta property="og:title" content="ShopMondo Products – Trendy Clothing & More" />
                <meta
                    property="og:description"
                    content="Browse the full collection of stylish clothing and accessories at ShopMondo. Shop with ease and enjoy exclusive deals."
                />
                <meta
                    property="og:image"
                    content="https://dokan.co/app/uploads/2024/12/Top-Fashion-eCommerce-Trends.jpg"
                />
                <meta property="og:url" content="https://shopmondo.com/products" />
                <meta name="twitter:title" content="ShopMondo Products – Browse All" />
                <meta
                    name="twitter:description"
                    content="ShopMondo offers a wide range of trendy clothes and accessories with fast, free shipping."
                />
                <meta
                    name="twitter:image"
                    content="https://dokan.co/app/uploads/2024/12/Top-Fashion-eCommerce-Trends.jpg"
                />
            </Helmet>
            <h1 className='text-4xl mt-[20px]'>Products Page</h1>

        </div>
    )
}

export default Products
