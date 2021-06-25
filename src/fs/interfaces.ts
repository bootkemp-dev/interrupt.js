export type FileContent = string | null;
export type Path = { absolute: boolean; dirs: string[] };

export interface FsObject {
  name: string;
}

export interface FsFile extends FsObject {
  content: FileContent;
}

export interface FsDirectory extends FsObject {
  children: FsObject[];
}
