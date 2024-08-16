// 長方形ボタンコンポーネント
import { Link } from "react-router-dom";

export const SquareButton = (props) => {
  return (
    <Link to={props.to}>
      <div className="square_button" style={{background:props.bg_color}}>
        {props.children}
      </div>
    </Link>
  );
};
