import { FsDirectory, FileContent, FileSystem } from './interfaces';

export class LocalStorageFileSystem extends FileSystem {
  private fs: FsDirectory;

  constructor() {
    super();
    this.fs = {
      name: '/',
      children: []
    };
  }

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
