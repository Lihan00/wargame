import React from "react";

const PlayNotice = () => {
    
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
            <div className="noticeheader">NOTICE</div>  
            <div className="linegroup">
                <div className="leftline"></div><div className="line"></div><div className="rightline"></div>
            </div>
            <div className="notices">
                <div className="notice">
                    <div className="star">★</div>
                    <div className="noticeowner">USER</div>
                    <div className="noticetitle">제목</div>
                    <div className="date">2000.00.00</div>
                </div>
                <div className="notice">
                    <div className="star">★</div>
                    <div className="noticeowner">USER</div>
                    <div className="noticetitle">제목</div>
                    <div className="date">2000.00.00</div>
                </div>
                <div className="notice">
                    <div className="star">★</div>
                    <div className="noticeowner">USER</div>
                    <div className="noticetitle">제목</div>
                    <div className="date">2000.00.00</div>
                </div>
                <div className="notice">
                    <div className="star">★</div>
                    <div className="noticeowner">USER</div>
                    <div className="noticetitle">제목</div>
                    <div className="date">2000.00.00</div>
                </div>
            </div>
        </>
    )
}

export default PlayNotice;