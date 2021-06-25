export type FileContent = string | null;

export abstract class FileSystem {
  abstract read(path: string): FileContent;

  abstract save(path: string, content: FileContent): void;

  abstract delete(path: string): void;

  protected parsePath(
    path: string,
    validPathRegex: RegExp = /^(\/)?([^\/\0]+(\/)?)+$/
  ): string[] {
    if (!validPathRegex.test(path)) {
      throw new Error(`Invalid path: ${path}`);
    }

    const isAbsolute = path.startsWith('/');

    const splitPath = path.split('/');
    if (isAbsolute) {
      splitPath.unshift('/');
    }

    return splitPath.filter(val => val !== '');
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
