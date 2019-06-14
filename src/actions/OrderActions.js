// เป็น functionที่เรียกใช้ reducers

import axios from "axios";
import { ORDERS_FETCH } from "./types";

// ส่งไปบอกว่าให้เปลี่ยนแปลงข้อมูลตัว order
export const ordersfetch = () => {

    return dispatch => {
        axios.get("http://localhost:3001/orders")
        .then(
            res => {
                // this.setState({orders:res.data}); ปกติจะเขียนแบบนี้แต่ว่าเราใช้ redux tunck มาเก็บแทน
                //return {type : "orders_fetch", payload : res.data}
                
                dispatch({type:ORDERS_FETCH, payload : res.data});
            }
        )

    }
   
    //returnเป็น object เท่านั้น 
    // return {type : "orders_fetch"} ===> ทำแบบนี้ไม่ได้เพราะเป็น asyncronus 
}

// เรียกเพื่อส่ง action ไปลบ
export const orderDelete = id =>{
    return dispatch => {
        axios.delete("http://localhost:3001/orders/"+id)
            .then(res=>{
                axios.get("http://localhost:3001/orders")
                    .then(res=>{
                        dispatch({type:ORDERS_FETCH, payload : res.data});
                    })
            })
    }
}