//////////////// functional conponent ////////////
/*import React from "react";

const ProductItem = (props) =>{
    const {productName,unitPrice} = props ;
    return (
        <div>
            <p>{productName}</p>
            <p>{unitPrice}</p>
        </div>
    )
} */

//////////////// class component ///////////////
import React,{Component} from "react"; 
class ProductItem extends Component {
    // constructor(props){
    //     super(props); // super จะไปเรียก constructor ของ class component ที่เรา extend มา
    // }
    doSomething(productName,unitPrice){
        console.log(productName);
    }
    render(){
        const {productName,unitPrice,thumbnail} = this.props.product ;
        return(
            <div className="col-md-3 col-sm-6">
                <img className="img-fluid img-thumbnail" src={thumbnail}/>
                <h5 className="mt-2">{productName}</h5>
                <p className="title text-right">{unitPrice}</p>
                {this.props.onAddOrder &&  
                    <button className="btn btn-block btn-secondary title" value={unitPrice} onClick={()=>{this.props.onAddOrder(this.props.product)}} name={productName}>
                    ซื้อ
                    </button>
                }
                {   (this.props.onDelProduct || this.props.onEditProduct) &&
                    <button className="btn  btn-info title col-5" value={unitPrice} onClick={()=>this.props.onEditProduct(this.props.product)}>
                    แก้ไข
                    </button>
                }
                {
                    ( this.props.onDelProduct || this.props.onEditProduct) &&
                    <button className="btn  btn-danger title col-5 float-right" onClick={()=>this.props.onDelProduct(this.props.product)} >
                    ลบ
                    </button>
                }
                
            </div>
        )
    }
}
export default ProductItem ;