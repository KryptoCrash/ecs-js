export default class Entity {
    constructor(name) {
        this.name = name;
        this.state = 'waiting';
    }
    addComponent(component) {
        this.component.name = this.component.data;
    }
    getComponentData(componentName) {
        return this.componentName.returnData();
    }
    setComponent(componentName, newComponentData) {
        this.componentName = newComponentData;
    }
    removeComponent(componentName) {
        delete this.componentName;
    }
}