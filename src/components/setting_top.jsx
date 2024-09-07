// 設定コンポーネント
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const SettingTop = ({func}) => {
    return (
      <div>
        <Button variant="contained" component={Link} to="./type">種別設定</Button><br/><br/>
        <Button variant="contained" component={Link} to="./way">支払方法設定</Button><br/><br/>
        <Button variant="contained" onClick={func}>ログアウト</Button><br/>
      </div>
    );
  };
  