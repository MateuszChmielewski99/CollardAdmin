import { injectable } from 'tsyringe';
import { IImageDao } from './IImageDao';
import { Bucket, Storage } from '@google-cloud/storage';

@injectable()
export class GcImageDao implements IImageDao {
  private storage: Storage;
  private bucket: Bucket;
  constructor() {
    this.storage = new Storage({
      projectId: process.env.GOOOGLE_PROJECT_ID,
      keyFilename: `${__dirname}/../collard-26e14b4cc98a.json`,
    });
    console.log(process.env.GOOGLE_BUCKET_NAME);
    this.bucket = this.storage.bucket(process.env.GOOGLE_BUCKET_NAME as string);
  }

  public upload() {
    return [];
  }
}
