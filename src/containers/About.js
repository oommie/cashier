import React, { Component } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () =>{
    return (
        <div>
            <Header />
            <div className="container col-md-5">
            <h3 className="title">สวัสดีค่ะ</h3>
            <p className="title text-justify mt-4">
                fke[wojgf[oej[ojejeo[jefo[ewjf;;gkrjgrjgo[rngowfjsvdfiychsviy]]]]]]
            </p>
            <h4 className="text-success">Oommie Cafe ยินดีต้อนรับค่ะ </h4>
            </div>


            <Footer company="ChanitaLab" email="oommie.chanita@gmail.com"/>
        </div>
    )
} 

export default About ;