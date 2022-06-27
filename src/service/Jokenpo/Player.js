class Player {
  constructor(choice) {
    this.points = 0;
    this.choice = choice;
  }

  play() {
    console.log(this.choice);
  }
}

export default Player;
