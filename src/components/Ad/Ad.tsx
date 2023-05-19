import { useState } from "react";
import "./Ad.css";

export function Ad(props : {flavor: string, fontSize: number, darkTheme: boolean}): any {

    return (
        <div id="box" className={props.darkTheme ? 'lightTheme' : 'darkTheme'} style={{fontSize: `${props.fontSize}px`}}>
            Vote for {props.flavor}
        </div>
    )
}