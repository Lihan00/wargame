import React from "react";
import "./Rank.css"

const Rank = () => {
    return (
        <>
            <div className="header">
                <div className="logo">LOGO</div>
                <div className="menu"></div>
                <div className="user">
                    <div className="login">로그인</div>
                    <div className="register">회원가입</div>
                </div>
            </div>
            <div className="noticeheader">RANKING</div>  
            <div className="linegroup">
                <div className="leftline"></div><div className="line"></div><div className="rightline"></div>
            </div>
            <div className="ranktop">
                <div className="rankform">
                    <div className="rankimg"></div>
                    <div className="rankuser">USER</div>
                    <div className="rankscore">00 : 00 : 00</div>
                    <div className="rankcomment">"comment"</div>
                </div>
                <div className="rankform">
                    <div className="rankimgone"></div>
                    <div className="rankuser">USER</div>
                    <div className="rankscore">00 : 00 : 00</div>
                    <div className="rankcomment">"comment"</div>
                </div>
                <div className="rankform">
                    <div className="rankimg"></div>
                    <div className="rankuser">USER</div>
                    <div className="rankscore">00 : 00 : 00</div>
                    <div className="rankcomment">"comment"</div>
                </div>
            </div>
            <div className="rankbottom">
                <div className="rlistrank">RANK</div>
                <div className="rlistuser">USER</div>
                <div className="rlistcomment">COMMENT</div>
                <div className="rlistscore">SCORE</div>
            </div>
            <div className="linegroup">
                <div className="rlistline"></div>
            </div>
            <div className="rlist">
                <div className="rlistr">4</div>
                <div className="rlistu">USER</div>
                <div className="rlistc">"comment"</div>
                <div className="rlists">00:00:00</div>
            </div>
            <div className="rlist">
                <div className="rlistr">5</div>
                <div className="rlistu">USER</div>
                <div className="rlistc">"comment"</div>
                <div className="rlists">00:00:00</div>
            </div>
            <div className="rlist">
                <div className="rlistr">5</div>
                <div className="rlistu">USER</div>
                <div className="rlistc">"comment"</div>
                <div className="rlists">00:00:00</div>
            </div>
            <div className="rlist">
                <div className="rlistr">5</div>
                <div className="rlistu">USER</div>
                <div className="rlistc">"comment"</div>
                <div className="rlists">00:00:00</div>
            </div>
        </>
    )
}

export default Rank;