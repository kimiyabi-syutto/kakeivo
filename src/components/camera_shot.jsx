// レシート読取コンポーネント

import React from 'react';

import Webcam from 'react-webcam';
export const Camera = () => {
  const [deviceId, setDeviceId] = React.useState({});
  const [devices, setDevices] = React.useState([]);
  const handleDevices = React.useCallback(
    mediaDevices =>
      setDevices(mediaDevices.filter(({ kind }) => kind === "videoinput")),
    [setDevices]
  );
  React.useEffect(
    () => {
      navigator.mediaDevices.enumerateDevices().then(handleDevices);
    },
    [handleDevices]
  );

  return (
      <div>
        <h1>Camera</h1>
        <div>
        {devices.map((device, key) => (
          <button
            key={device.deviceId}
            onClick={() => setDeviceId(device.deviceId)}
          >
            {device.label || `Device ${key + 1}`}
          </button>
        ))}
      </div>
        <Webcam
        audio={false}
//        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={{ deviceId }}
      />

      </div>
    );
  };
  