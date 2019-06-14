import React, { Component } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
//import ProductItem from "./components/products/ProductItem";
import Monitor from "../components/monitor/Monitor";
import { connect } from "react-redux"; // เชื่อม react component กับ react-redux เข้าด้วยกัน
import { productsFetch } from "../actions";

class Home extends Component {
  constructor(props){
    super(props);
    //this.state = {products : ""}; ==> ไม่เอาแล้วเพราะจะดึงค่ามาจาก store
  }

  componentDidMount(){
  /* ตัวอย่างก่อนต่อ API */
  //   this.setState({products : [
  //     { productId: 1, productName: "สลัดผัก", unitPrice: "120", thumbnail: "/images/product/1.jpg" },
  //     { productId: 2, productName: "ไก่ทอด", unitPrice: "90", thumbnail: "/images/product/2.jpg" },
  //     { productId: 3, productName: "บิงซู", unitPrice: "200", thumbnail: "/images/product/3.jpg" },
  //     { productId: 4, productName: "เฟรนฟราย", unitPrice: "140", thumbnail: "/images/product/4.jpg" },
  //     { productId: 5, productName: "เค้ก 3 ชั้น", unitPrice: "200", thumbnail: "/images/product/5.jpg" },
  //     { productId: 6, productName: "กาแฟ เฮลตี้ฟู้ด", unitPrice: "140", thumbnail: "/images/product/6.jpg" }
  // ]});
  /* ตัวอย่างเมื่อใส่ API */
  // fetch("http://localhost:3001/products",{ method : "GET"})
  //   .then(res=>res.json())
  //   .then(res=>{ this.setState({ products : res })});
  /* ตัวอย่างการใช้ Axois */
  // Axios.get("http://localhost:3001/products").then(res=>{
  //   console.log(res.data);
  //   {this.setState({ products : res.data})}
  // });
    this.props.productsFetch();
  }
  render() {
    return (
      <div className="Home">
        {/* <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="Home-intro">
          To get started, edit <code>src/Home.js</code> and save to reload.
        </p> */}
        <Header />
        {/* <ProductItem productName="Iphone X" unitPrice="50000" />
        <ProductItem productName="Iphone XR" unitPrice="40000" />
        <ProductItem productName="Iphone 8" unitPrice="35000" /> */}
        <Monitor products={this.props.products} />
        <Footer company="google" email="oom@mail.com"/>
      </div>
    );
  }
}

function mapStateToProps({products}){
  // map ข้อมูลใน state ให้ไปอยู่ใน props
 
 //return { products:state.products}; แบบนี้ก็ได้
 return {products};
}


//export default Home; แบบไม่ทำ redux

export default connect(mapStateToProps,{ productsFetch })(Home);
