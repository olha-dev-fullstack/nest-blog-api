import { Injectable, RequestTimeoutException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { S3 } from 'aws-sdk';
import * as path from 'path';
import { v4 as uuid4 } from 'uuid';

@Injectable()
export class UploadToAwsProvider {
  constructor(private readonly configServise: ConfigService) {}

  public async fileUpload(file: Express.Multer.File) {
    const s3 = new S3();
    try {
      const uploadResult = await s3
        .upload({
          Bucket: this.configServise.get('appConfig.awsBucketName'),
          Body: file.buffer,
          Key: this.generateFileName(file),
          ContentType: file.mimetype,
        })
        .promise();
      return uploadResult.Key;
    } catch (e) {
      throw new RequestTimeoutException(e);
    }
  }

  private generateFileName(file: Express.Multer.File) {
    const fileName = file.originalname.split('.')[0];
    fileName.replace(/\s/g, '').trim();
    const extension = path.extname(file.originalname);
    const timestamp = new Date().getTime().toString().trim();
    return `${fileName}-${timestamp}-${uuid4()}${extension}`;
  }
}
