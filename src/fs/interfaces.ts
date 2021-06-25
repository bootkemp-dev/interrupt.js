export type FileContent = string | null;
export type Path = { absolute: boolean; dirs: string[] };

export abstract class FileSystem {
  protected fs: FsDirectory;
  private currentDirName: string;

  constructor() {
    this.fs = {
      name: '/',
      children: []
    };
    this.currentDirName = '/';
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
}

export interface FsObject {
  name: string;
}

export interface FsFile extends FsObject {
  content: FileContent;
}

export interface FsDirectory extends FsObject {
  children: FsObject[];
}
