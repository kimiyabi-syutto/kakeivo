// 設定コンポーネント

import {
  Button,
} from "@aws-amplify/ui-react";

export const Setting = ({func}) => {
    return (
      <div>
        設定画面<br/>
        <Button onClick={func}>ログアウト</Button>
      </div>
    );
  };
  