import { FileContent, FsDirectory, Path } from './interfaces';

export abstract class FileSystem {
  protected dirTree: FsDirectory;

  constructor() {
    this.dirTree = {
      name: '/',
      children: []
    };
  }

  abstract read(path: string): FileContent;

  abstract save(path: string, content: FileContent): void;

  abstract delete(path: string): void;

  protected parsePath(
    path: string,
    validPathRegex: RegExp = /^(\/)?([^\/\0]+(\/)?)+$/
  ): Path {
    if (!validPathRegex.test(path)) {
      throw new Error(`Invalid path: ${path}`);
    }

    return {
      absolute: path.startsWith('/'),
      dirs: path.split('/').filter(val => val !== '')
    };
  }

  protected unparsePath(path: Path) {
    if (path.absolute) {
      path.dirs.unshift('/');
    }

    return path.dirs.join('/');
  }
}
