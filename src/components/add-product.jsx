import React, {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddProduct = (props) => {
    let {id} = useParams();
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [product, setProduct] = useState({
        name: '',
        price: ''
    });

    useEffect( () => {
        if(id !== 'new'){
            const {data} = axios.get(`http://localhost:3000/products/${id}`);
            //clone
                const cloneProduct = {...product}
            //edit
                cloneProduct.name = data.name;
                cloneProduct.price = data.price;
                // console.log(data);
            //setState
            setProduct(cloneProduct);
        }
    }, []);

    // console.log(props.products);
    // if(!isNaN(id)){
    //      const sentProd = {...props.products[id-1]}
    //      const cloneProd = {...product};
    //      console.log(sentProd.name);
    //      cloneProd.name = sentProd.name;
    //      cloneProd.price = sentProd.price; 
    //      console.log(cloneProd);
    //     //  setProduct(cloneProd);
    //     // console.log(cloneProd);
    // }
    // if(!isNaN(id)){
    //     // console.log(id);
    //     // const {name, price} = props.products;
    //     console.log(prodData);
    //     // prodData[name] = name;
    //     // prodData[price] = price;
    //     // setProduct(prodData);
    // }
    function handleChange(e){
        const {name, value} = e.target;
        let prodData = {...product};
        prodData[name] = value;
        setProduct(prodData);
        console.log(product);
    }

    async function handleAddEditProduct () {
        //create object for new product
        // console.log('product', product);
        //e.preventDefault();
        console.log('Prod', product)
        if(id === 'new'){
            const obj = {
                id: props.products.length + 1,
                name: product.name,
                count: 0,
                price: product.price,
                isSelected: false, 
                isDeleted: false
            };
            await axios.post('http://localhost:3000/products/', obj)
        }
        else{
            const obj = {
                name: product.name,
                count: 0,
                price: product.price,
                isSelected: false, 
                isDeleted: false
            };
            await axios.put(`http://localhost:3000/products/${id}`, obj)
        }
        // console.log(this.history);
        navigate('/admin');
        // window.history.replaceState({}, undefined, '/admin');
    }

    return ( 
        <React.Fragment>
            <h1>{id === 'new'? 'Add New' : 'Edit'} Product {id}</h1>
            <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                type="name" 
                name='name'
                value={product.name}
                onChange={handleChange}
                className="form-control" 
                id="name" 
                aria-describedby="nameHelp" 
                placeholder="Enter name" />
                <small id="nameHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                {/* {errors.email && (
                    <div className="alert alert-danger">{errors.email}</div>
                )
                } */}
            </div>
            <div className="form-group">
                <label htmlFor="price">Price</label>
                <input 
                type="price"
                name='price'
                value={product.price} 
                onChange={handleChange}
                className="form-control" 
                id="price" 
                placeholder="Enter price" />
                {/* {errors.price && (
                    <div className="alert alert-danger">{errors.price}</div>
                )} */}
            </div>

            <button type="submit" onClick={() => handleAddEditProduct()} className="btn btn-primary">{id === 'new'? 'Add' : 'Edit'}</button>
            </form> 
        </React.Fragment>
     );
}
 
export default AddProduct;