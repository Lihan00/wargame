import React, { useState } from "react";
import "./Main.css"
import Black from "../img/black.png";
import Red from "../img/red.png";
import { useNavigate } from "react-router-dom";

const Main = () => {
    const navigate = useNavigate();
    const [img, setImg] = useState(0);

    setInterval(() => {
            if (img === 0) setImg(1)
            if (img === 1) setImg(0)
    }, 20000);

    return (
        <div className="whole">  
            <div className="backset">
                {img === 0 && (<img className="back" src={Black}/>)}
                {img === 1 && (<img className="back" src={Red}/>)}
            </div>
            <div className="header">
                <div className="logo">LOGO</div>
                <div className="menu"></div>
                <div className="user">
                    <div className="login">로그인</div>
                    <div className="register">회원가입</div>
                </div>
            </div>
            <div className="body">
                <div className="cate">필요에 따른 카테고리 같은 소제목</div>
                <div className="title">제목을 입력하세요. 제목은 1줄 정도의 분량입니다.</div>
                <div className="service">서비스에 대한 설명을 입력하세요. <br/>이 설명은 2~3줄로 작성될 수 있습니다.</div>
                <div className="play" onClick={() => navigate("/play/login")}>PLAY NOW</div>
            </div>
            <div className="noticehome">
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
            </div>
            <div className="rankhome">
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
            </div>
            <div className="board">
                <div className="boardleft">
                    <div className="boardheader">Board</div>  
                    <div className="linegroup">
                        <div className="boardline"></div><div className="rightline"></div>
                    </div>
                    <div className="rankbottom">
                        <div className="blistuser">USER</div>
                        <div className="blisttitle">TITLE</div>
                        <div className="blistview">VIEW</div>
                        <div className="blistdate">DATE</div>
                    </div>
                    <div className="linegroup">
                        <div className="blistline"></div>
                    </div>
                    <div className="rlist">
                        <div className="blistu">USER</div>
                        <div className="blistt">TITLE</div>
                        <div className="blistv">1</div>
                        <div className="blistd">2000.00.00</div>
                    </div>
                    <div className="rlist">
                        <div className="blistu">USER</div>
                        <div className="blistt">TITLE</div>
                        <div className="blistv">1</div>
                        <div className="blistd">2000.00.00</div>
                    </div>
                    <div className="rlist">
                        <div className="blistu">USER</div>
                        <div className="blistt">TITLE</div>
                        <div className="blistv">1</div>
                        <div className="blistd">2000.00.00</div>
                    </div>
                    <div className="rlist">
                        <div className="blistu">USER</div>
                        <div className="blistt">TITLE</div>
                        <div className="blistv">1</div>
                        <div className="blistd">2000.00.00</div>
                    </div>
                </div>
                <div className="boardright">
                    <div className="exam"></div>
                </div>
            </div>
            <div className="myhome">
                <div className="noticeheader">GitHub</div>  
                <div className="linegroup">
                    <div className="leftline"></div><div className="line"></div><div className="rightline"></div>
                </div>
            </div>
        </div>
    )
}

export default Main;