// 設定コンポーネント

import { Route, Routes } from "react-router-dom";

import { SettingTop } from "./setting_top";
import { SettingType } from "./setting_type";
import { SettingWay } from "./setting_way";

export const Setting = ({signOut}) => {
  return (
    <div>
      <h2>設定</h2>
      <Routes>
        <Route path="/type" element={<SettingType />} />
        <Route path="/way" element={<SettingWay />} />
        <Route path="/" element={<SettingTop func={signOut} />} />
      </Routes>
    </div>
  );
};
