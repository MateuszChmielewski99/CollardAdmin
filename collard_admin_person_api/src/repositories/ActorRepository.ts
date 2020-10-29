import { Person } from 'collard_admin_models';
import { FilterQuery } from 'mongoose';
import { injectable } from 'tsyringe';
import { BaseRepository } from './BaseRepository/BaseRepository';

@injectable()
export class ActorRepositry extends BaseRepository<Person> {
    private type:string = "Actor"

    public async search(queryString:string):Promise<Person[] | undefined>{
        const query:FilterQuery<Person> = {
            $text:{$search:queryString},
            type:this.type
        };
        
        return this.getByQuery(query);
    }
}