export default class Component {
    constructor(data){
        this.name = data.name;
        this.data = data;
    }
    returnData(){
        return this.data;
    }
}