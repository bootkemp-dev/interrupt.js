import { FileSystem } from './fs/fileSystem';

interface KernelConfig {
  fileSystem: FileSystem;
}

export class Kernel {
  constructor(config: KernelConfig) {}
}
