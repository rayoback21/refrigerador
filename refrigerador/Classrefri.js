'use strict';

class Refrigerador {
  constructor(marca, color, capacidad, alimentos) {
    this.marca = marca;
    this.color = color;
    this.capacidad = capacidad;
    this.alimentos = alimentos;
  }

  showInfo() {
    alert(`El refrigerador ${this.marca} color ${this.color} tiene una capacidad de ${this.capacidad} que en su interior contiene ${this.alimentos}`);
  }

  addFood(nuevosAlimentos) {
    this.alimentos.push(nuevosAlimentos);
    alert(`Se agregó ${nuevosAlimentos} al refrigerador`);
    alert(`Lista de alimentos actuales: ${this.alimentos.join(", ")}`);
  }
}

let refrigerador = new Refrigerador("Samsung", "Gris",
 "450L", ["peras", "uvas", "queso", "Leche"]);
refrigerador.showInfo();
refrigerador.addFood("fresa");
refrigerador.addFood("atún");
refrigerador.showInfo();
