export type FileContent = string | null;

export interface FileSystem {
  read(path: string): FileContent;

  save(path: string, content: FileContent): void;

  delete(path: string): void;
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
