"use strict";
let fiat = {
  make: "Fiat",
  model: "500",
  year: 1957,
  color: "Blue",
  passengers: 2,
  mileage: 88000,
  fuel: 0,
  started: false,
  start: function () {
    this.started = true;
  },
  stop: function () {
    this.started = false;
  },
  drive: function () {
    let consumption = 3;
    if (this.started && this.fuel >= consumption) {
      alert("Біп!");
      this.fuel -= consumption;
    } else if (this.started && this.fuel < consumption) {
      alert("Нема палива!");
      this.fuel = 0;
    } else {
      alert("Спочатку запустіть двигун!");
    }
  },
  showFuel: function () {
    alert("У меня в баку " + this.fuel + " літрів бензину!");
  },
  addFuel: function (n = 5) {
    this.fuel += n;
    alert(`Бак поповнено на ${n} літрів`);
  },
  toString: function () {
    return `${this.color} ${this.make} ${this.model} ${this.year}`;
  },
};
alert(fiat.toString());
fiat.showFuel();
fiat.drive();
fiat.start();
fiat.drive();
fiat.addFuel();
fiat.drive();
