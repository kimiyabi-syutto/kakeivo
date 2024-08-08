
import {
  Button,
} from "@aws-amplify/ui-react";

export const Setting = (signOut) => {
    return (
      <div>
        設定画面<br/>
        <Button onClick={signOut}>ログアウト</Button>
      </div>
    );
  };
  