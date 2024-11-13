import React from "react";

export default function Header(){
    return(
        <header className="header">
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="shop">Shop</a></li>
                        <li><a href="room">Room</a></li>
                        <li><a href="specials">Specials</a></li>
                        <li><a href="cart">Cart</a></li>
                    </ul>
                </nav>
        </header>
    );
}