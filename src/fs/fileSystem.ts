type Path = string;
type FileContent = string | null;

export interface FileSystem {
  read(path: Path): FileContent;

  save(path: Path, content: FileContent): void;

  delete(path: Path): void;
}
