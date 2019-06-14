
import { ORDERS_FETCH } from "../actions/types";


export default function(state=[],action){
    switch (action.type) {
        case ORDERS_FETCH :
        console.log(3);
            return action.payload;
        default:
            return state ; // ถ้าไม่มีเลยจะคืนค่า state เดิม
    }
}

