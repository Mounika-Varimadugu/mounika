import React from "react";
import {Component} from 'react';
class ExpenseEntryItem extends React.Component{
    render(){
        return(
            <div>
            <div><b>Item:<em>Mangojuice</em></b></div>
            <div><b>Amount:<em>30.00</em></b></div>
            <div><b>spend Date:<em>2024-07-01</em></b></div>
            <div><b>category:<em>Food</em></b></div>
            </div>

        );
    }
}
export default ExpenseEntryItem;