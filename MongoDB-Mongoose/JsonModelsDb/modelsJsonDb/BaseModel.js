import fs from 'fs/promises';
import path from 'path';

let cubesDb = undefined;
fs.readFile(path.join(path.resolve('db'), 'cubes.json')).then(x => cubesDb = JSON.parse(x)).catch(x => console.log(x));

class BaseModel {
    constructor(id, name, description, imageUrl, level) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.level = level;
    };

    save() {
        cubesDb.push(this);
        return fs.writeFile(path.join(path.resolve('db'), 'cubes.json'), JSON.stringify(cubesDb));
    };
     
    static getAll() {
        return cubesDb;  
    }

    static getOne(id) {
        return cubesDb.find(x => x.id === id);
    }
}

export default BaseModel;