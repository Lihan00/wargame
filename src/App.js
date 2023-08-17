import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Notice from "./pages/Notice";
import Rank from "./pages/Rank";
import My from "./pages/My";
import Community from "./pages/Community";

function App() {
  /*
  <Route path="/login" element={}/>
      <Route path="/join" element={}/>
      <Route path="/my" element={}/>
      <Route path="/my/modify" element={}/>
      <Route path="/notice" element={}/>
      <Route path="/notice/view" element={}/>
      <Route path="/community" element={}/>
      <Route path="/community/view" element={}/>
      <Route path="/community/post" element={}/>
      <Route path="/rank" element={}/>
      <Route path="/rank/detail" element={}/>
      <Route path="/play/login" element={}/>
      <Route path="/play" element={}/>
      <Route path="/play/notice" element={}/>
      <Route path="/play/notice/view" element={}/>
      <Route path="/play/community" element={}/>
      <Route path="/play/community/view" element={}/>
      <Route path="/play/community/post" element={}/>
      <Route path="/play/rank" element={}/>
      <Route path="/play/rank/detail" element={}/>
      <Route path="/play/hint" element={}/>
      <Route path="/play/count" element={}/>
      <Route path="/play/chat" element={}/>
  */
  return (
    <Routes>
      <Route exact path="/" element={<Main/>}/>
      <Route path="/notice" element={<Notice/>}/>
      <Route path="/rank" element={<Rank/>}/>
      <Route path="/community" element={<Community/>}/>
      <Route path="/my" element={<My/>}/>
    </Routes>
  );
}

export default App;
