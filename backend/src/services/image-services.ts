import sharp from "sharp";
import { v4 as uuidv4 } from "uuid";
import util from "util";
import path from "path";
import fs from "fs";

const fsunlink = util.promisify(fs.unlink);

export class ImageService {
  directory: string;

  constructor(directory: string) {
    this.directory = directory;
  }

  static filename(): string {
    return `${uuidv4()}.png`;
  }

  filepath(filename: string): string {
    return path.resolve(this.directory, filename);
  }

  async store(buffer: Buffer): Promise<string> {
    const filename = ImageService.filename();
    const filepath = this.filepath(filename);

    await sharp(buffer)
      .resize(500, 500, {
        fit: sharp.fit.inside,
        withoutEnlargement: true,
      })
      .toFile(filepath);

    return filename;
  }

  async delete(filename: string): Promise<void> {
    await fsunlink(this.filepath(filename));
  }
}
