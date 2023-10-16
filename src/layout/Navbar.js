import React from "react";
import './Navbar.css'; 


export default function Navbar() {

  return (


<div>
        <nav className="navv">
            <h1 class="logo">Stock management</h1>
            <ul class="menu">
                <li><a href="/">Product Listings</a></li>
                <li><a href="/test">Adding products</a></li>
            </ul>
        </nav>
</div>);
}
