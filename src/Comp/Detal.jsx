import React, { useEffect, useState } from 'react'
import { Button, Card, Container } from 'react-bootstrap'

function Detal() {
    const [Data, setData] = useState("")
    useEffect(() => {
        // function fetchData(){
        fetch("https://fakestoreapi.com/products")
            .then(resp => resp.json())
            .then(dat => { setData(dat) })
        // }
        // fetchData()
        // console.log("hi")

    }, [])
    console.log(Data, " ssa")
    return (
        <div style={{width:"100%"}}>
            <h1 className='text-danger fw-bold' style={{textAlign:"center",padding:"10px 0"}}>Products</h1>
            {Data.length === 0 ? <small>hello products loading</small> :
                <Container className='d-flex gap-5' style={{margin:"40px auto"}}>
                    <div class="card p-3" style={{width: "20rem",boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
                        <img src={Data[0].image} class="card-img-top" alt="..." style={{width:"200px",height:"300px"}}/>
                            <div class="card-body">
                                <h5 class="card-title text-success">{Data[0].title}</h5>
                                <p class="card-text">
                                    <p className='text-info fw-bold'>Price: {Data[0].price}</p>

                                </p>
                                <a href="#" class="btn btn-primary">Add to Cart</a>
                            </div>
                    </div>
                    <div class="card p-3" style={{width: "20rem",boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
                        <img src={Data[2].image} class="card-img-top" alt="..." style={{width:"200px",height:"300px"}}/>
                            <div class="card-body">
                                <h5 class="card-title text-success">{Data[1].title}</h5>
                                <p class="card-text">
                                    <p className='text-info fw-bold'>Price: {Data[2].price}</p>

                                </p>
                                <a href="#" class="btn btn-primary">Add to Cart</a>
                            </div>
                    </div>
                    <div class="card p-3" style={{width: "20rem",boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
                        <img src={Data[3].image} class="card-img-top" alt="..." style={{width:"200px",height:"300px"}}/>
                            <div class="card-body">
                                <h5 class="card-title text-success">{Data[3].title}</h5>
                                <p class="card-text">
                                    <p className='text-info fw-bold'>Price: {Data[3].price}</p>

                                </p>
                                <a href="#" class="btn btn-primary">Add to Cart</a>
                            </div>
                    </div>

                </Container>
            }
        </div>
    )
}

export default Detal