import React, {useState} from 'react';
import { useParams, useLocation, useNavigate, useHistory } from 'react-router-dom';
const queryString = require('query-string');

const ProductDetails = (props) => {
    let {id} = useParams();
    let location = useLocation();
    const parsedLocation = queryString.parse(location.search);
    let product = props.products.filter(p => p.id === parseInt(id))[0];
    // console.log(parsedLocation);
    const [handleSave, setHandleSave] = useState('Hello World');
    console.log(handleSave);
    const navigate = useNavigate();

    const onInputChange = (e) => {
        // setHandleSave()
        // console.log('onInputChange', e);
        // e.preventDefault();
        window.history.replaceState({}, undefined, "/cart");
        navigate('/cart');
    }

    return ( 
    <React.Fragment>
        <h1>Details No. {id} </h1> 
        <h2> {product.name} </h2>
        <h2>Count: {product.count}</h2>
        <button onClick={onInputChange} className='btn btn-primary btn-sm'>Save</button>
    </React.Fragment>
    );
}
 
export default ProductDetails;