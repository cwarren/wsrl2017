Game.UIMode = {};

Game.UIMode.gameStart = {
  enter: function () {
    console.log("entered gameStart");
    Game.Message.send("Welcome to WSRL, the game you never knew you needed");
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
      Game.switchUIMode(Game.UIMode.gamePersistence);
    }
  }
};

Game.UIMode.gamePersistence = {
  enter: function () {
    console.log("entered gamePersistence");
    Game.Message.send("save, restore, or new game");
  },
  exit: function () {
    console.log("exited gamePersistence");
  },
  render: function (display) {
    console.log("rendered gamePersistence");
    display.drawText(5,6,"S to save, L to load, N for a new game");
  },
  handleInput: function (inputType,inputData) {
    console.log("input for gamePersistence");
    if (inputData.charCode !== 0) { // ignore the various modding keys - control, shift, etc.
      Game.switchUIMode(Game.UIMode.gamePlay);
    }
  }
};

Game.UIMode.gamePlay = {
  enter: function () {
    console.log("entered gamePlay");
    Game.Message.send("...game on...");
  },
  exit: function () {
    console.log("exited gamePlay");
  },
  render: function (display) {
    console.log("rendered gamePlay");
    display.drawText(5,5,"game play mode");
    display.drawText(5,7,"W to win, L to lose, anything else to keep on keeping on");
  },
  handleInput: function (inputType,inputData) {
    console.log("input for gamePlay");
    console.log(inputType);
    console.dir(inputData);
    if (inputType == 'keypress') {
      if (((inputData.key == 'w') || (inputData.key == 'W')) && (inputData.shiftKey)) {
        Game.switchUIMode(Game.UIMode.gameWin);
      }
      else if (((inputData.key == 'l') || (inputData.key == 'L')) && (inputData.shiftKey)) {
        Game.switchUIMode(Game.UIMode.gameLose);
      }
    }
  }
};

Game.UIMode.gameWin = {
  enter: function () {
    console.log("entered gameWin");
    Game.Message.send("Congratulations!");
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
    Game.Message.send("So sorry - try again!");
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