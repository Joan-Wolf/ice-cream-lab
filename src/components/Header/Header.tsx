import { useState } from "react";
import "./Header.css"
export function Header(props: {gameType : string, user: string}) {

    return (
        <header className="Header">
            <h1>{props.gameType}</h1>
            <h3>Welcome, {props.user}</h3>
        </header>
    )
}