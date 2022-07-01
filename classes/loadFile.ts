class LoadFile {
    private path: string;

    constructor(path: string) {
        this.path = path;
    }

    public getPath() {
        return this.path;
    }
}

const file = new LoadFile("./data.txt");

console.log(file.getPath());