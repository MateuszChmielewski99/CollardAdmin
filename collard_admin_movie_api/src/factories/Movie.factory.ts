import { CreateMovieRequest, Movie } from 'collard_admin_models'
import { ObjectId } from 'mongodb'

export const createMovie = (request:CreateMovieRequest):Movie => {
    return {
        ...request,
        _ts:Date.now(),
        _id: new ObjectId().toHexString()
    }
}