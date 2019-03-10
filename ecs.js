import Entity from "./entity.js";
import Component from "./component.js";
import System from "./system.js";

export default class EntityComponentSystem {
  constructor() {
    this.entites = [];
    this.systems = [];
  }
  addEntity() {
    let entity = new Entity();
    this.entites.push(entity);
  }
  removeEntity() {
      
  }
}
