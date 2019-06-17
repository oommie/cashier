//import React from "react";
import React,{Component} from "react";
import { Link } from "react-router-dom";


class Header extends Component{

    constructor(props){
        super(props);
        this.state = {date: new Date()} ;
       // setInterval(()=>this.tick(),1000); // ทุกๆ 1นาทีเรียก tick()
    }
    componentDidMount(){
        //console.log('componentDidMount');
        this.timerID =  setInterval(()=>this.tick(),1000);
        
    }
    componentDidUpdate(){
        //console.log('componentDidUpdate');
    }
    componentWillUnmount(){//เอา component ออกจากหน้าเว็ป
        clearInterval(this.timerID); // clear ทรพยากรของบราวเซอร์(ram)
        //console.log('componentWillUnmount');
       
    }

    tick(){
        // การ set ข้อมูล ใน state
        // this.state = {date: new Date()} ; ทำแบบนี้ไม่ได้ ต้อง setState() ใหม่
        this.setState({date : new Date()}); // setState ทุกครั้งเรียก render ทุกครั้ง
    }
    render(){
        // const Header = () => {
        //     return <h1> Header </h1>
        //}
        //const style ={height : 70 }
        return( 
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-8">
                    <h1 className="text-success aqua"><img style={{height : 70}} src="/images/logo/logo.png" alt="oommielogo"/>Chanita Cafe </h1>
                </div>
                <div className="col-md-4 text-right">
                    <h5 className="text-muted mt-5 knomphing">
                        {this.state.date.toLocaleTimeString()} PM
                    </h5>
                    <ul className="list-inline">
                        <li className="list-inline-item title"><Link className="text-success" to="/">Home</Link></li>
                        <li className="list-inline-item title">|</li>
                        <li className="list-inline-item title"><Link className="text-success" to="/products">product</Link></li>
                        <li className="list-inline-item title">|</li>
                        <li className="list-inline-item title"><Link className="text-success" to="/orders">order</Link></li>
                        <li className="list-inline-item title">|</li>
                        <li className="list-inline-item title"><Link className="text-success" to="/about">about</Link></li>
                    </ul>
                </div>

            </div>
            <hr/>
        </div>
        )
    }
    
}


///////////////// class conponent /////////////

export default Header ;