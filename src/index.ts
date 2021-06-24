import { FileSystem } from './fs/interfaces';

interface KernelConfig {
  fileSystem: FileSystem;
}

export class Kernel {
  constructor(private config: KernelConfig) {}
}
