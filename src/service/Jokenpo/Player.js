class Player {
  constructor(choice) {
    this.points = 0;
    this.choice = choice;
  }

  play() {
    return this.choice;
  }
}

export default Player;
