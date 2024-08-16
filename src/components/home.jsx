// ホームコンポーネント
import { RectButton } from './atom/rect_button';
import { SquareButton } from './atom/sqare_button';
import { CameraAlt,AppRegistration, CalendarMonth, Equalizer, Settings } from '@mui/icons-material';

export const HomePage = () => {
    return (
      <div>
        <RectButton to="/scribe" bg_color='orange'>
          <AppRegistration />手入力
        </RectButton>
        <RectButton to="/calendar" bg_color='cyan'>
          <CameraAlt />レシート読込
        </RectButton>
        <SquareButton to="/data" bg_color='lightgreen'>
          <CalendarMonth />一覧
        </SquareButton>
        <SquareButton to="/graph" bg_color='yellow'>
          <Equalizer />グラフ
        </SquareButton>
        <SquareButton to="/settlement" bg_color='red'>月初入力</SquareButton>
        <SquareButton to="/setting" bg_color='gray'>
          <Settings />設定
        </SquareButton>
      </div>
    );
  };
  