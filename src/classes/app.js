const express = require('express');

class App{
  static instance;
  constructor () {
    if(!!App.instance) {
      return App.instance;
    }

    App.instance = this;
    this.name = "app";
    this.app = express();

  }
};
const app = new App().app

module.exports.app = app;