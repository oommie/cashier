import React , {Component} from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductList from "../../components/products/ProductList";

import {withRouter} from "react-router-dom";
import { connect } from "react-redux";
import { productsFetch , productDelete } from "../../actions";


class Product extends Component{
    constructor(props){
        super(props);
        //this.state = {products:null};
        this.delProduct = this.delProduct.bind(this);
        this.editProduct = this.editProduct.bind(this);
    }

    componentDidMount(){
        // axios.get("http://localhost:3001/products")
        // .then(res=>{
        //     this.setState({products:res.data});
        // })
        this.props.productsFetch();
    }

    delProduct(product){
    //    console.log(product);
    //     axios.delete("http://localhost:3001/products/"+product.id)
    //     .then(res=>{
    //         console.log('delete success')
    //         axios.get("http://localhost:3001/products")
    //         .then(
    //             res => {
    //                 this.setState({products:res.data});
                    
    //             }
    //         )
    //     }).catch(err=>console.log(err));
        this.props.productDelete(product.id);
    }

    editProduct(product){
        this.props.history.push('products/edit/'+product.id); // หน้าที่ต้องการ redirect
    }
    render(){
        return(
            <div>
                <Header/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6">
                            <h1>สินค้า</h1>
                        </div>
                        <div className="col-6"> 
                            <button className="btn btn-success title float-right" onClick={()=>this.props.history.push('products/add')}>เพิ่ม</button>
                        </div>
                    </div>
                    {this.props.products && Array.isArray(this.props.products)&&
                        (<ProductList products={this.props.products} 
                            onDelProduct={this.delProduct} 
                            onEditProduct={this.editProduct}/>
                        )
                    }
                    
                </div>
                <Footer company="ggkjjjuuuuuu" email="pigolk" />
            </div>
        )
    }

}

// ทำงานก่อน componentDidmount อีก ทำให้เวลาเราดึงจาก store มาก่อน มันเลยเป็นข้อมูลเก่า
function mapStateToProps({products}){
    return {products};
}

export default withRouter(connect(mapStateToProps,{productsFetch,productDelete})(Product)) ;