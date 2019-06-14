import React , { Component } from "react";
import { reduxForm,Field } from "redux-form";
import FormField from "../common/FormField";
import { productFormFields } from "./formFields";
import { connect } from "react-redux";
class ProductForm extends Component{

    renderFields(formFields){
        // const formFields = [
        //     { label: "Product Name" , name : "productName" , type : "text", require : true},
        //     { label: "Unit Price" , name : "unitPrice" , type : "number", require : true},
        //     { label: "Thumbnail" , name : "thumbnail" , type : "text", require : true}
        // ];
        return formFields.map(({label, name , type , required}) => {
            return(
                <Field key={name} label={label} name={name} type={type} required={required} component={FormField} />
            )
        })
    }

    render(){
        //handleSubmit เป็นของ redux form มันจะเช็คว่า formนี้ valid หริอไม่ ถ้า error จะแสดงผลแสดงerror ถ้าไม่ จะเข้่าonProductSubmit 
        const { onProductSubmit } = this.props;
        return (
           
            <div>
                <form onSubmit={ this.props.handleSubmit(onProductSubmit)}>
                    {/* <Field name="productName" type="text" component="input"/>
                    <Field name="unitPrice" type="number" component="input"/>
                    <Field name="thumbnail" type="text" component="input"/> */}
                    {this.renderFields(productFormFields)}
                    <button className="btn btn-block btn-info title " type="submit">
                        บันทึก
                    </button>
                </form>
            </div>
        )
    }
}
function validate(values){
    console.log(values); // คือค่่าที่อยู่ form ทั้งหมด
    const errors = {};
    productFormFields.forEach(({name,required})=>{
        if(!values[name] && required ){
            errors[name] = 'กรุณากรอกข้อมูลด้วย'
        }
    });
    return errors ;

}

ProductForm = reduxForm({validate, form:"productForm"})(ProductForm);

function mapStateToProps({products}){
    //เป็นหน้า edit
    if(products && products.id){
        return { initialValues : products };
    }// เป็นหน้า add
    else{
        return {};
    }
   
}
export default connect(mapStateToProps)(ProductForm) ;
// ไม่มี action เพราะไม่ต้องการส่ง actionไปทำอะไร ตอนนี้ต้องการแค่ product