import Sound from 'react-native-sound';

let audio1 = './../android/app/src/main/res/raw/sound1.mp3';
let audio2 = './../android/app/src/main/res/raw/sound2.mp3';

export const audioPath = {
  src1: new Sound(audio1),
  src2: new Sound(audio2)
};

export default audioPath;