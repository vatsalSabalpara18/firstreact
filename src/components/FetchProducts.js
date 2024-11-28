import React, { useEffect, useState } from 'react'

export default function FetchProducts() {
    const [load, setLoad] = useState(true)
    const [products, setProducts] = useState([])
    const getProducts = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/products");
            if (!response.ok) {
                console.log("Error in fetching Products", response.statusText);
            }
            return response.json()
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const productData = await getProducts()
                setProducts(productData)
            } catch (error) {
                console.error(error)
            }
        }
        fetchData()
    }, [])

    console.log("products", products)
    return (
        <div>
            {
                products?.map((value, index) => {
                    return (
                        <div>
                            <h2>{value?.title}</h2>
                            <img src={value?.image} height="250px" width="150px" />
                            <span>{value?.category}</span>
                            <p>{value?.description}</p>
                            <p>{value?.rating.rate}<span>{value?.rating.count}</span></p>
                        </div>
                    )
                })
            }
        </div>
    )
}
