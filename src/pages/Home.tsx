import React from 'react'
import { Helmet } from 'react-helmet-async'

function Home() {
    return (
        <div>
            <Helmet>
                <title>ShopMondo – Discover Trendy Fashion & Deals</title>
                <meta
                    name="description"
                    content="ShopMondo is your go-to for trendy fashion for men and women. Explore new arrivals, enjoy free shipping, and shop with confidence."
                />
                <meta
                    name="keywords"
                    content="ShopMondo, trendy fashion, latest clothes, online shopping, men's fashion, women's fashion"
                />
                <meta property="og:title" content="ShopMondo – Trendy Fashion Online" />
                <meta
                    property="og:description"
                    content="Discover the latest fashion trends and enjoy exclusive deals. Shop now at ShopMondo with free shipping!"
                />
                <meta
                    property="og:image"
                    content="https://dokan.co/app/uploads/2024/12/Top-Fashion-eCommerce-Trends.jpg"
                />
                <meta property="og:url" content="https://shopmondo.com/" />
                <meta name="twitter:title" content="ShopMondo – Discover Trendy Fashion" />
                <meta
                    name="twitter:description"
                    content="Explore stylish clothing for men and women with fast, free shipping at ShopMondo."
                />
                <meta
                    name="twitter:image"
                    content="https://dokan.co/app/uploads/2024/12/Top-Fashion-eCommerce-Trends.jpg"
                />
            </Helmet>
            <h1 className='text-4xl mt-[20px]'>HOME Page</h1>
        </div>
    )
}

export default Home
