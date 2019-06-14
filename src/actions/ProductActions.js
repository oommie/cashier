import { PRODUCTS_FETCH,PRODUCT_FETCH,PRODUCT_CREATE,PRODUCT_UPDATE } from "./types";
import axios from "axios";


// ส่งไปบอกว่าให้เปลี่ยนแปลงข้อมูลตัว order
export const productsFetch = () => {
    console.log(process.env.REACT_APP_API_URL);
    return dd => {
        axios.get(process.env.REACT_APP_API_URL+ "/products")
        .then(
            res => {
                // this.setState({orders:res.data}); ปกติจะเขียนแบบนี้แต่ว่าเราใช้ redux tunck มาเก็บแทน
                //return {type : "orders_fetch", payload : res.data}
                dd({type:PRODUCTS_FETCH, payload : res.data});
            }
        )

    }
   
    //returnเป็น object เท่านั้น 
    // return {type : "orders_fetch"} ===> ทำแบบนี้ไม่ได้เพราะเป็น asyncronus 
}

// เรียกเพื่อส่ง action ไปลบ
export const productDelete = id =>{
    return dd => {
        axios.delete("http://localhost:3001"+"/products/"+id)
            .then(res=>{
                axios.get("http://localhost:3001"+"/products")
                    .then(res=>{
                        dd({type:PRODUCTS_FETCH, payload : res.data});
                    })
            })
    }
}

export const productFetch = id => {

    return dd => {
        axios.get("http://localhost:3001"+"/products/"+id)
        .then(
            res => {
                dd({type:PRODUCT_FETCH, payload : res.data});
            }
        )

    }
}


export const productCreate = values => {

    return dd => {
        axios.post("http://localhost:3001"+"/products/",values)
        .then(
            res => {
                
                dd({type:PRODUCT_CREATE, payload : res.data});
            }
        )

    }
}

export const productUpdate = (id,values) => {

    return dd => {
        axios.put("http://localhost:3001"+"/products/"+id,values)
        .then(
            res => {
                
                dd({type:PRODUCT_UPDATE, payload : res.data});
            }
        )

    }
}