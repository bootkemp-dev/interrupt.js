import { FsDirectory, FileContent, FileSystem } from './interfaces';

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
