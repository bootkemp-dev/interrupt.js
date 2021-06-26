import { FileContent } from './interfaces';
import { FileSystem } from './abstractFileSystem';

export class LocalStorageFileSystem extends FileSystem {
  read(path: string): FileContent {
    throw new Error('Method not implemented.');
  }

  save(path: string, content: FileContent): void {
    throw new Error('Method not implemented.');
  }

  delete(path: string): void {
    throw new Error('Method not implemented.');
  }
}
