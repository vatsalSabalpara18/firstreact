import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import SearchBar from "./SearchBar";

export default function FetchProducts() {
    const [products, setProducts] = useState([]);    
    const [query, setQuery] = useState("");
    const [selectedOption, setSelectedOption] = useState("");
    const handleChange = (event) => {
        const query_value = event.target.value;
        setQuery(query_value);
        console.log("QueryValue", query_value);        
           const fillterData = products?.filter(
                (item) =>
                    item.title.toLowerCase().includes(query_value.toLowerCase()) ||
                    item.category.toLowerCase().includes(query_value.toLowerCase()) || 
                    item.description.toLowerCase().includes(query_value.toLowerCase()) ||
                    item.price.toString().includes(query_value)
            )        
    };

    const handleSelectChange = (event) => {
        const select_value = event.target.value;
        setSelectedOption(select_value);
        console.log("select_value", select_value);
        if (select_value === "Name(A-Z)") {
            setProducts(products?.toSorted((a, b) => a.title.localeCompare(b.title)));
        } else if (select_value === "Name(Z-A)") {
            setProducts(products?.toSorted((a, b) => b.title.localeCompare(a.title)));
        } else if (select_value === "PLH") {
            setProducts(products?.toSorted((a, b) => a.price - b.price));
        } else if (select_value === "PHL") {
            setProducts(products?.toSorted((a, b) => b.price - a.price));
        } else {
            setProducts(products);
        }
    };

    const getProducts = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/products");
            if (!response.ok) {
                console.log("Error in fetching Products", response.statusText);
            }
            return response.json();
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        async function fetchData() {
            try {
                const productData = await getProducts();
                setProducts(productData);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);   

    console.log("products", products);
    return (
        <div className="background-div">
            <h1 style={{ textAlign: "center", color: "#3B1E54", position: "sticky" }}>
                Fake API Store Products
            </h1>
            <div className="search-div">
                <SearchBar
                    handleChange={handleChange}
                    query={query}
                    selectedOption={selectedOption}
                    handleSelectChange={handleSelectChange}
                />
            </div>
            <ul className="product-list-ul">
                {products.length ? (
                    products?.map((value) => {
                        const ratings = value?.rating.rate;
                        return (
                            <li className="product-list-li">
                                <div className="outside-div" key={value?.id}>
                                    <div className="product-div" key={value?.id}>
                                        <h3>{value?.title}</h3>
                                        <img src={value?.image} height="250px" width="150px" />
                                        <p style={{ fontSize: "25px", margin: "0" }}>
                                            {value?.category}
                                        </p>
                                        <p
                                            style={{
                                                fontSize: "35px",
                                                margin: "0",
                                                fontWeight: "bolder",
                                            }}
                                        >
                                            {"$" + value?.price}
                                        </p>
                                        {/* <p style={{ textAlign: "justify" }}>{value?.description}</p> */}
                                        {/* <p>{ratings}<span>{value?.rating.count}</span></p> */}
                                        <div className="rating">
                                            <span
                                                className={
                                                    ratings >= 1
                                                        ? "fa fa-star checked"
                                                        : ratings > 0 && ratings < 1
                                                            ? "fa fa-star-half-o checked"
                                                            : "fa fa-star"
                                                }
                                            ></span>
                                            <span
                                                className={
                                                    ratings >= 2
                                                        ? "fa fa-star checked"
                                                        : ratings > 1 && ratings < 2
                                                            ? "fa fa-star-half-o checked"
                                                            : "fa fa-star"
                                                }
                                            ></span>
                                            <span
                                                className={
                                                    ratings >= 3
                                                        ? "fa fa-star checked"
                                                        : ratings > 2 && ratings < 3
                                                            ? "fa fa-star-half-o checked"
                                                            : "fa fa-star"
                                                }
                                            ></span>
                                            <span
                                                className={
                                                    ratings >= 4
                                                        ? "fa fa-star checked"
                                                        : ratings > 3 && ratings < 4
                                                            ? "fa fa-star-half-o checked"
                                                            : "fa fa-star"
                                                }
                                            ></span>
                                            <span
                                                className={
                                                    ratings >= 5
                                                        ? "fa fa-star checked"
                                                        : ratings > 4 && ratings < 5
                                                            ? "fa fa-star-half-o checked"
                                                            : "fa fa-star"
                                                }
                                            ></span>{" "}
                                            <span>({value?.rating?.count})</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        );
                    })
                ) : (
                    <Loader />
                )}
            </ul>
        </div>
    );
}
