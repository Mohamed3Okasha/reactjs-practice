import React from 'react';
import MenuProduct from './menuProduct';

const Menu = (props) => {
    // console.log(props);
    return ( 
        <React.Fragment>
            <h1>Menu</h1>
            <table className="table table-hover">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {props.products.filter(p => p.isDeleted === false).map(p => (
                    <MenuProduct 
                        key = {p.id}
                        product = {p}
                        onSelect = {props.onSelect}
                    />
                ))}
                {/* <tr id='1'>
                <th scope="row">2</th>
                <td>Fries</td>
                <td>20</td>
                <td><i className="fa-solid fa-cart-shopping"></i></td>
                </tr>
                <tr id='2'>
                <th scope="row">3</th>
                <td>Cola</td>
                <td>10</td>
                <td><i className="fa-solid fa-cart-shopping"></i></td>
                </tr> */}
            </tbody>
            </table>
        </React.Fragment>
     );
}
 
export default Menu;