import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


// Using bootstrap
import Table from 'react-bootstrap/Table';


class ViewProductPage extends React.Component {

  constructor(){
    console.log("ViewProductPage Constructor")
    super()
  }

  render() {

    console.log("ViewProductPage render Page")
  

    let p = this.props.products.filter((product) => {     
      return product.id == this.props.match.params.id
    }) 

    
   

    return (
      <div>
        <h2>Product Description</h2>
        <Table striped bordered hover>
          <tr>
            <th>ID#</th>
            <th>Product Name</th>
            <th>Product Description</th>
            <th>Manufacturer</th>
            <th>Price</th>
            <th>Quantity</th>           
          </tr>
          <tr>
            <td>{p[0].id}</td>
            <td>{p[0].productName}</td>
            <td>{p[0].productDesctiption}</td>
            <td>{p[0].manufacturer}</td>
            <td>{p[0].price}</td>
            <td>{p[0].quantity}</td>          
          </tr>
        </Table>

        <a href="javascript:history.go(-1)"> Back </a>
      </div>
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

  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(ViewProductPage);
