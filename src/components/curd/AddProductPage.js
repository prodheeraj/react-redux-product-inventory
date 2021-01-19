import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import toastr from 'toastr';

import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import AddProductForm from './AddProductForm';
//import ProductActions from '../actions/ProductActions';

import * as actionCreator from '../../actions/productActions'


import * as productActions from '../../actions/productActions';

class AddProductPage extends React.Component{
    render(){
        return(
            <div>
              <h3>Add Product Using Redux</h3>
            <AddProductForm onSave={this.props.saveProduct}/>
          
            </div>
        );
    }
}



function mapStateToProps(state) {
    return {
      product: state.product
    };
  }
  
  function mapDispatchToProps(dispatch) {
    console.log("Dispatch method");
    return {
     // saveProduct:(product)=>dispatch({type:'ADD_PRODUCT_SUCCESS',product})
        saveProduct:(product)=>dispatch(actionCreator.addProduct(product))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddProductPage));