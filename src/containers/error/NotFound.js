import React, { Component } from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const NotFound = () => {


    return(
        <div>
            <Header/>
            <div className="container col-md-8 text-center">
            <h1>404</h1>
            <h2 className="title mb-2">Not Found</h2>
            <p className="title mb-5">ขออภัยไม่พบหน้าที่คุณค้นหา ดูเหมือนว่าหน้าเว็ปที่คุณพยายามเข้าถึงไม่มีอยู่อีกต่อไปหรืออาจจะย้ายไป</p>

            </div>
            <Footer company="OommieLab React" email="oommie.chanita@gmail.com"/>
        </div>
    )
}

export default NotFound ;