// 正方形ボタンコンポーネント
import { Link } from "react-router-dom";

export const RectButton = (props) => {
  return (
    <Link to={props.to}>
      <div className="rect_button" style={{background:props.bg_color}}>
        {props.children}
      </div>
    </Link>
  );
};
