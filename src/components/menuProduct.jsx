import React from 'react';

const MenuProduct = (props) => {
    const iconStyle = props.product.selected === true? {opacity : '1'}: {opacity : '.5'};
    return ( 
        <React.Fragment>
            <tr onClick={() => props.onSelect(props.product)} id={props.product.id}>
                <th scope="row">{props.product.id}</th>
                <td>{props.product.name}</td>
                <td>{props.product.price}</td>
                <td><i style={iconStyle} className="fa-solid fa-cart-shopping"></i></td>
            </tr>
        </React.Fragment>
     );
}
 
export default MenuProduct;