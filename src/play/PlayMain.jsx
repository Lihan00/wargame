import React, { useState } from "react";
import Black from "../img/black.png";
import Red from "../img/red.png";

const PlayMain = () => {
    const [img, setImg] = useState(0);
    setInterval(() => {
            if (img === 0) setImg(1)
            if (img === 1) setImg(0)
    }, 20000);

    return (
        <>  
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
                <div className="play">PLAY NOW</div>
            </div>
        </>
    )
}

export default PlayMain;