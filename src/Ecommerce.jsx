import { useState } from "react";

function Ecommerce(){
    let [products,setProducts]=useState([]);
    function addToCart(event) {
        event.preventDefault();
        let producTS = [...products];
        let form = event.target;
        let productItem = {
            name: form.productName.value,
            price: form.price.value,
            desc: form.productDesc.value,
            color: form.productColor.value
        }
        producTS.push(productItem);
        setProducts(producTS);
        document.querySelector("tbody").innerHTML="";
        producTS.forEach(function(product) {
            document.querySelector("tbody").innerHTML+=`
            <tr>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td>${product.color}</td>
                <td>${product.desc}</td>
            </tr>`;
        })
    }
    return(
        <div>
            <h1 className='topicHeading'>WAL Ecommerce</h1>
            <div className='replyContainer'>
                <table className='styled-table'>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Color</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
            <div className="commentForm">
                <h2>Add a Product Here</h2>
                <form onSubmit={addToCart}>
                    <input type="text" name="productName" placeholder="Product Name"/><br/>
                    <input type="number" name="price" placeholder="Price"/><br/>
                    <textarea name="productDesc" cols="30" rows="10" placeholder='Production Description'></textarea><br/>
                    <input type="color" name='productColor'/>
                    <input type="submit" name='commentSubmitButton'/>
                </form>
            </div>
        </div>
    )
}
export default Ecommerce;