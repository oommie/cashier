import React , { Component} from "react" ;
import ProductItem from "./ProductItem";

class ProductList extends Component{


    showProduct(){
       // if(this.props.products){ มีค่าเท่ากัน

            // ตรงนี้จะได้ค่าเป็นอาเรย์ <ProductItem > เก็บไว้
            return this.props.products && this.props.products.map(product=>(
                //<ProductItem productName={product.productName} unitPrice={product.unitPrice}/>
                <ProductItem key={product.id} product={product} onAddOrder={this.props.onAddOrder} 
                onDelProduct={this.props.onDelProduct} 
                onEditProduct={this.props.onEditProduct}/>
                // {...product}
            ));
        //}
    }
    render(){
        return(
            <div className="row">
               {this.showProduct()}
            
            </div>
        )
    }
}

export default ProductList ;