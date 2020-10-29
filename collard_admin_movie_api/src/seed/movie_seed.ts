import { BaseRepository } from "../repositories/BaseRepository";


const a = () => {
const test = new BaseRepository<{id:string, name:string}>('movies');
test.getOne('ala').then(s => console.log(s));
}

((() => a()))();
