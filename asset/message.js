Game.Message = {
  _curMessage: '',
  render: function (display) {
    display.clear();
    display.drawText(1,1,this._curMessage,'#fff','#000');
  },
  send: function (msg) {
    this._curMessage = msg;
    Game.renderMessage();
  },
  clear: function () {
    this._curMessage = '';
  }
};