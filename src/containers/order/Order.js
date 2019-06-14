
import React, { Component } from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
//import axios from 'axios';
import { connect }  from "react-redux";
import { ordersfetch , orderDelete } from "../../actions";
import {productsFetch } from "../../actions";


class Order extends Component{
    // ดึงข้อมูลมาจากapi
    // ลบได้


    constructor(props){
        super(props);
       // this.state = {orders:null};
    }

    componentDidMount(){
        // axios.get("http://localhost:3001/orders")
        // .then(
        //     res => {
        //         this.setState({orders:res.data});
        //     }
        // )
        
      
        this.props.ordersfetch();
    }

    delOrder(order){
        // axios.delete("http://localhost:3001/orders/"+order.id)
        // .then(res=>{
        //     axios.get("http://localhost:3001/orders")
        //     .then(res=>{
        //         this.setState({orders:res.data});
        //     })
        // })
        this.props.orderDelete(order.id);
    }

    showOrders(){
        return this.props.orders && this.props.orders.map(order=>{
            const date = new Date(order.orderDate);
            return(
                <div key={order.id} className="col-md-3">
                    <hr/>
                    <p className="text-right">
                        <button className="btn btn-danger btn-sm-title" onClick={()=>this.delOrder(order)}>X</button>
                    </p>
                    <h5>วันที่ {date.toLocaleDateString()} {date.toLocaleTimeString()}</h5>
                    <ul>
                        {order.orders && order.orders.map(record=>{
                            return(
                                <li key={record.product.id}>
                                    {record.product.productName} x {record.product.quantity} = {record.product.unitPrice * record.quantity}
                                </li>
                            )
                        })}
                    </ul>
                    <p className="title">ยอดรวม {order.totalPrice}</p>
                </div>
            );
        });

    }

    render(){
        return(
            <div>
                <Header/>
                    <div className="container">
                        <h1>รายการสั่งซื้อ</h1>
                        <div className="row">
                        {this.showOrders()}
                        </div>
                    </div>
                <Footer company="Facebook" email="oommie.chanita@gmail.com"/>
            </div>
        );

    }


}

function mapStateToProps({orders}){
    //var {order} = state;
//function mapStateToProps({state}){
    // x : {x, y}
    //return {state};
    
    return {orders} ;
}

export default connect(mapStateToProps,{ordersfetch,orderDelete,productsFetch})(Order) ;