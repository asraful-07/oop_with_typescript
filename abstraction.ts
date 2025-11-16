/**

//* idea Before
interface MediaPlayer {
  play(): void;
  pause(): void;
  stop(): void;
}

//* implements After
class MusicPlayer implements MediaPlayer {
  play(): void {
    console.log("start music......");
  }
  pause(): void {
    console.log("pause music......");
  }
  stop(): void {
    console.log("stop music......");
  }
}

const RookStar = new MusicPlayer();
RookStar.stop();

 */

//TODO on more example
abstract class MediaPlayer {
  abstract playT(): void;
  abstract pauseT(): void;
  abstract stopT(): void;
}

class UserPlayer extends MediaPlayer {
  private volume: number = 60;

  playT() {
    console.log(`Playing music at volume: ${this.volume}`);
  }
  pauseT(): void {
    console.log("Music is paused!");
  }
  stopT(): void {
    console.log("Music is stopped!");
  }

  setVolume(v: number) {
    this.volume = v;
  }
}

const userPlay = new UserPlayer();
userPlay.setVolume(70);
userPlay.playT();
