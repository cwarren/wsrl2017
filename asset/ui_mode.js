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

    if (inputType == 'keypress') {
      if (((inputData.key == 's') || (inputData.key == 'S')) && (inputData.shiftKey)) {
        // console.log(JSON.stringify(Game.theGame));
        if (this.localStorageAvailable()) {
          window.localStorage.setItem(Game.PERSISTANCE_NAMESPACE, JSON.stringify(Game.theGame)); // .toJSON()
          Game.switchUIMode(Game.UIMode.gamePlay);
        }
      }
      
      else if (((inputData.key == 'l') || (inputData.key == 'L')) && (inputData.shiftKey)) {
        var  json_state_data = window.localStorage.getItem(Game.PERSISTANCE_NAMESPACE); //'{"randomSeed":12}';
        console.log(json_state_data);
        var state_data = JSON.parse(json_state_data);
        // console.dir(state_data);
        Game.setRandomSeed(state_data._randomSeed);
        
        Game.switchUIMode(Game.UIMode.gamePlay);
      }
      
      else if (((inputData.key == 'n') || (inputData.key == 'N')) && (inputData.shiftKey)) {
        Game.setRandomSeed(5 + Math.floor(ROT.RNG.getUniform()*100000));
        Game.switchUIMode(Game.UIMode.gamePlay);
      }
    }
  },
  localStorageAvailable: function () { // NOTE: see https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
  	try {
  		var x = '__storage_test__';
  		window.localStorage.setItem(x, x);
  		window.localStorage.removeItem(x);
  		return true;
  	}
  	catch(e) {
      Game.Message.send('Sorry, no local data storage is available for this browser');
  		return false;
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
    display.drawText(5,9,"= to save, load, or start over");
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
      else if (inputData.key == '=') {
        Game.switchUIMode(Game.UIMode.gamePersistence);
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