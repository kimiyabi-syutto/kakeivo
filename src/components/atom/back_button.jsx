// 戻るボタンコンポーネント
import { Link } from "react-router-dom";
import { ArrowBackIos } from '@mui/icons-material';

export const BackButton = (props) => {
  return (
    <Link to={props.to}>
      <ArrowBackIos />
    </Link>
  );
};
