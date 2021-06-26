import { FileSystem } from './fs/abstractFileSystem';

interface KernelConfig {
  fileSystem: FileSystem;
}

export class Kernel {
  constructor(private config: KernelConfig) {}
}
