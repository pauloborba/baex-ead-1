export class Module {
  name: string;
  description: string;
  releaseDate: Date;

  constructor(name?: string, description?: string, releaseDate?: Date) {
    this.name = name || "";
    this.description = description || "";
    this.releaseDate = releaseDate || new Date();
  }
}
