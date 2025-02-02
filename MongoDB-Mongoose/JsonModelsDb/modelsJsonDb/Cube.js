import BaseModel from './BaseModel.js';

class Cube extends BaseModel {
    constructor(id, name, description, imageUrl, level) {
        super(id, name, description, imageUrl, level);
        this.id = id;
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.level = level;
    };
};

export default Cube;