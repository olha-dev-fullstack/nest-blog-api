import { FileTypes } from '../enums/fileTypes.enum';

export interface IUploadFile {
  name: string;
  path: string;
  type: FileTypes;
  mime: string;
  size: number;
}
