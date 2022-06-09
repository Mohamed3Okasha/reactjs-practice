import React from 'react';
import { Link } from 'react-router-dom';

const Admin = (props) => {
    // const iconStyle = props.product.selected === true? {opacity : '1'}: {opacity : '.5'};
    const iconStyle = {opacity : '.5'};

    return ( 
        <React.Fragment>
            <h1>Admin</h1>
            <Link to={`/add-product/new`}> 
                {/* <span>{props.products.length + 1}</span> */}
                <button className="btn btn-primary">Add</button>
            </Link>
            <table className="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {props.products.filter(p => p.isDeleted === false).map(p => (
                        <tr key={p.id}  id={p.id}>
                        <th scope="row">{p.id}</th>
                        <td>{p.name}</td>
                        <td>{p.price}</td>
                        <td>
                            <Link to={`/add-product/${p.id}`}>
                                <i style={iconStyle} className="fa-solid fa-pen-to-square"></i>
                            </Link>
                        </td>
                        <td onClick={() => props.onDelete(p)}><i style={iconStyle} className="fa-solid fa-trash"></i></td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </React.Fragment>
     );
}
 
export default Admin;