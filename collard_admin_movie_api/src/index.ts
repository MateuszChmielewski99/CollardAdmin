import { Mongoose } from 'mongoose';
import { BaseRepository } from "./repositories/BaseRepository";


const a = () => {
const mongoose = new Mongoose();
const test = new BaseRepository(mongoose);
console.log(test)
}

((() => a()))();
