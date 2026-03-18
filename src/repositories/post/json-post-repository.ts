import { resolve } from 'path';
import { Postrepository } from './post-repository';
import { readFile } from 'fs/promises';
import { PostModel } from '@/models/post/post-model';

const ROOT_DIR = process.cwd();
const JSON_POST_FILE_PATH = resolve(
  ROOT_DIR,
  'src',
  'db',
  'seed',
  'posts.json',
);

export class JsonPostRepository implements Postrepository {
  private async readFromDisk() {
    const jsonContent = await readFile(JSON_POST_FILE_PATH, 'utf-8');
    const parseJson = JSON.parse(jsonContent);
    const { posts } = parseJson;
    return posts;
  }

  async findAll(): Promise<PostModel[]> {
    const posts = await this.readFromDisk();
    return posts;
  }
  async findById(id: string): Promise<PostModel | null> {
    const posts = await this.findAll();
    const post = posts.find(post => post.id === id);

    if (!post) throw new Error(`Post with id ${id} not found`);

    return post;
  }
}
