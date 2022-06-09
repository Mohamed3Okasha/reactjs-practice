import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Product extends Component {
    // state = { 
    //     name: this.props.product.name,
    //     count: this.props.product.count,
    //     names: ['Ahmed', 'Osama', 'Ali'] //'Ahmed', 'Osama', 'Ali'
    //  } 

    getClasses() {
        return (this.props.product.count === 0)?
        'badge bg-warning m-2'
        :'badge bg-primary m-2';
    
    }
    
    // renderNames(){
    //     return (this.state.names.length) === 0? <h2>No Names</h2> : this.state.names.map(n => <li key={n}>{n}</li>);
    // }

    // increment = () => {
    //     this.incrementHandler(2);
    // }

    componentWillUnmount(){
        //invalidating timers, canceling network requests 
        console.log('Product ===> componentWillUnmount()');
    }

    render() {
        console.log('Product ===> render()');
        return (
            <div className='row'>
                <div className='col-2'>
                <span>
                    <Link to={`/products/${this.props.product.id}`}>
                        {this.props.product.name}
                    </Link>
                </span>

                </div>
                <div className="col">

                <span className={this.getClasses()}>{this.props.product.count}</span>
                <button onClick={() => this.props.onIncrement(this.props.product)} className='btn btn-primary btn-sm'> + </button>
                <span style={{cursor: 'pointer'}} onClick={() => this.props.onDelete(this.props.product)}>
                    <i className="fa-solid fa-trash m-2"></i>
                </span>
                </div>
                {/* take advantage of && operator as it returns the first false value or the last true value */}
                {/* {this.state.names.length === 0 && <h4>No Names!</h4>} */}
                <ul>
                    {/* {this.renderNames()} */}
                    {/* {this.state.names.map(n => <li key={n}>{n}</li>)} */}
                </ul>
            </div>
        );
    }
}
 
export default Product;