

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
export const Home = () => {
    return (
      <div>
        <Link to="/calendar">カレンダーを見る</Link><br/>
        <Link to="/graph">グラフを見る</Link><br/>
        <Link to="/camera">カメラを起動する</Link><br/>
        <Link to="/setting">設定</Link><br/>
      </div>
    );
  };
  