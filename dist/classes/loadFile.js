"use strict";
class LoadFile {
    constructor(path) {
        this.path = path;
    }
    getPath() {
        return this.path;
    }
}
const file = new LoadFile("./data.txt");
console.log(file.getPath());
