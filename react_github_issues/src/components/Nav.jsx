import React from "react";
import {
    Navbar,
    NavbarItem,
} from "bloomer";

export default function Nav() {
    return (
        <Navbar style={{ border: "solid 3px black", backgroundColor: "grey", margin: "0 0 50px 0" }}>
                <NavbarItem style={{ color: "white"}} href="/">Home</NavbarItem>
                <NavbarItem style={{ margin: "0 auto", color: "white", fontWeight: "bold"}}> Nep's CRA Github Issues App</NavbarItem>
        </Navbar>
    );
}
