
import Webcam from 'react-webcam';

export const Camera = () => {
    return (
      <div>
        <h1>Camera</h1>
        <Webcam
        audio={false}
//        ref={webcamRef}
        screenshotFormat="image/jpeg"
      />

      </div>
    );
  };
  