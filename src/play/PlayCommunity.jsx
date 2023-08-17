import React from "react";

const PlayCommunity = () => {
    
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
        </>
    )
}

export default PlayCommunity;