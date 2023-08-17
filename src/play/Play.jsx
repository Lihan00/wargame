import React from "react";
import "./Play.css";

const Play = () => {
    return (
        <>
            <div className="playbody">
                <div className="playlogin">LOGIN</div>
                <div className="playinput"><input className="playid" placeholder="id"></input><br/></div>
                <div className="playinput"><input className="playpw" placeholder="password"></input></div>
                <div className="playinput"><div className="playregister">회원가입</div></div>
            </div>
            <div className="playbottom">
                <div className="lineone"></div>
                <div className="linetwo"></div>
                <div className="linethree"></div>
                <div className="linefour"></div>
                <div className="linefive"></div>
                <div className="linesix"></div>
            </div>
        </>
    )
}

export default Play;