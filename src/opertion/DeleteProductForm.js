import React from 'react';
import { connect } from 'react-redux';
import * as actioncreator from '../actions/productActions';

class DeleteProductForm extends React.Component {

  render() {
    if(!(localStorage.getItem('userId')==null))
    {
      window.prompt("First Login")
      window.history.back()
    }
    let p = this.props.products.filter((product) => {     
      return product.id === this.props.match.params.id
    }) 
    this.props.deleteProduct(p[0].id) 
    
    return(
      <>
      </>
    );
     
    
  }
}

const mapStatetoProps = (state) => {
  return {
    products: state.products
  }
}

const mapDispatchtoProps = (dispatch) => {

 
  return {    
    deleteProduct:(id) => dispatch(actioncreator.deleteProduct(id))
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(DeleteProductForm);
