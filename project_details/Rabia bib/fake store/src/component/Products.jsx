
import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
    const [allProducts, setAllproducts] = useState([]);

    useEffect(() => {

        axios.get('https://fakestoreapi.com/products/')
            .then((res) => {
                console.log(res.data);
                setAllproducts(res.data);
            })

    }, [])

    console.log(allProducts);

    return (
        <div>
            <div className="container">
                <div className="row mt-5">
                    {
                        allProducts.map((item) => {

                            return (
                                <>
                                    <div className="col-md-4 my-2">
                                        <div className="cards m-2">
                                            <div className="card mb-5" style={{ width: "350px", height: "420px" }}>
                                                <img src={item.image} style={{ height: "200px" }} className="card-img-top mt-3" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">{item.title}</h5>
                                                    <p className="card-text" style={{ color: "red" }} >Rs.{item.price}</p>
                                                    <Link to={`/detail/${item.id}`} className="btn btn-primary"> 
                                                        Detail
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Products