//TODO this class opp A → P → I → E topic
// - A → Abstraction
abstract class MediaPlayer {
  abstract playT(): void;
  abstract pauseT(): void;
  abstract stopT(): void;
}

// - I → Inheritance
class UserPlayer extends MediaPlayer {
  private volume: number = 60;

  // - P → Polymorphism
  playT() {
    console.log(`Playing music at volume: ${this.volume}`);
  }
  pauseT(): void {
    console.log("Music is paused!");
  }
  stopT(): void {
    console.log("Music is stopped!");
  }

  // - E → Encapsulation
  setVolume(v: number) {
    this.volume = v;
  }
}

const userPlay = new UserPlayer();
userPlay.setVolume(70);
userPlay.playT();
