import React from "react";
function Shop(){
    render(
        <div class="main">
            <h2>bookshop</h2>
            <hr/>
         <div class="fields">
            <input class="title" type="text" placeholder="title"/>
            <input class="Author_fname" type="text" placeholder="Author_fname"/>
            <input class="Author_lname" type="text" placeholder="Author_lname"/>
            <input class="stock_quantity" type="text" placeholder="stock_quantity"/>
            <input class="pages" type="text" placeholder="pages"/>
            <input class="released_year" type="text" placeholder="released_year"/>
            <input class="password" type="text" placeholder="Password"/>
            </div>
        </div>
    );
}
export default Shop;
