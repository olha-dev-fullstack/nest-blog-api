import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { Upload } from '../upload.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UploadToAwsProvider } from './upload-to-aws.provider';
import { ConfigService } from '@nestjs/config';
import { IUploadFile } from '../interfaces/uploadFile.interface';
import { FileTypes } from '../enums/fileTypes.enum';

@Injectable()
export class UploadsService {
  constructor(
    @InjectRepository(Upload)
    private readonly uploadsRepository: Repository<Upload>,
    private readonly uploadToAwsProvider: UploadToAwsProvider,
    private readonly configService: ConfigService,
  ) {}

  public async uploadFile(file: Express.Multer.File) {
    try {
      if (
        !['image/gif', 'image/jpeg', 'image/jpg', 'image/png'].includes(
          file.mimetype,
        )
      ) {
        throw new BadRequestException('Mime type is not supported');
      }
      const fileName = await this.uploadToAwsProvider.fileUpload(file);
      const uploadFile: IUploadFile = {
        name: fileName,
        path: `${this.configService.get('appConfig.awsCloudfrontUrl')}/${fileName}`,
        type: FileTypes.IMAGE,
        mime: file.mimetype,
        size: file.size,
      };

      const upload = this.uploadsRepository.create(uploadFile);
      return this.uploadsRepository.save(upload);
    } catch (e) {
      throw new ConflictException(e);
    }
  }
}
