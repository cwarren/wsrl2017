Game.UIMode = {};

Game.UIMode.gameStart = {
  enter: function () {
    console.log("entered gameStart");
  },
  exit: function () {
    console.log("exited gameStart");
  },
  render: function (display) {
    console.log("rendered gameStart");
    display.drawText(5,5,"game start mode");
    display.drawText(5,6,"press any key to play");
  },
  handleInput: function (inputType,inputData) {
    console.log("input for gameStart");
    if (inputData.charCode !== 0) { // ignore the various modding keys - control, shift, etc.
      Game.switchUIMode(Game.UIMode.gamePlay);
    }
  }
};

Game.UIMode.gamePlay = {
  enter: function () {
    console.log("entered gamePlay");
  },
  exit: function () {
    console.log("exited gamePlay");
  },
  render: function (display) {
    console.log("rendered gamePlay");
    display.drawText(5,5,"game play mode");
  },
  handleInput: function (inputType,inputData) {
    console.log("input for gamePlay");
  }
};

Game.UIMode.gameWin = {
  enter: function () {
    console.log("entered gameWin");
  },
  exit: function () {
    console.log("exited gameWin");
  },
  render: function (display) {
    console.log("rendered gameWin");
    display.drawText(5,5,"You WON!!!");
  },
  handleInput: function (inputType,inputData) {
    console.log("input for gameWin");
  }
};

Game.UIMode.gameLose = {
  enter: function () {
    console.log("entered gameLose");
  },
  exit: function () {
    console.log("exited gameLose");
  },
  render: function (display) {
    console.log("rendered gameLose");
    display.drawText(5,5,"you lost :(");
  },
  handleInput: function (inputType,inputData) {
    console.log("input for gameLose");
  }
};