import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';


    const Details = (props) => {
    const [product, setProduct] = useState([null]);
    const Params = useParams();
    console.log("params", Params.id);
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${Params.id}`)
            .then((res) => {
                console.log(res.data);
                setProduct(res.data);
            })
    }, [])
    if (product !== null) {
        return (
            <div className='container my-2'>
                <div className='row'>
                    <div className="col-md-2">
                        <div className="cards m-2">
                            <div className="card mb-5" style={{ width: "350px", height: "460px" }}>
                                <img src={product.image} style={{ height: "200px" }} className="card-img-top mt-3" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text" style={{ color: "red" }}>Rs.{product.price}</p>
                                    <Link to="#" className="btn btn-primary" onClick={() => { props.addToCart(product) }}>Add to Cart</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        )
    }
    else {
        return (
            <>
                <div className="spinner-border text-danger" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </>
        )
    }




}


export default Details