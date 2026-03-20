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
const SIMULATE_WAIT_IN_MS = 0;

export class JsonPostRepository implements Postrepository {
  private async simulateWait() {
    return new Promise(resolve => setTimeout(resolve, SIMULATE_WAIT_IN_MS));
  }

  private async readFromDisk() {
    const jsonContent = await readFile(JSON_POST_FILE_PATH, 'utf-8');
    const parseJson = JSON.parse(jsonContent);
    const { posts } = parseJson;
    return posts;
  }

  async findAllPublic(): Promise<PostModel[]> {
    await this.simulateWait();

    const posts = await this.readFromDisk();
    return posts.filter(post => post.published);
  }
  async findById(id: string): Promise<PostModel | null> {
    const posts = await this.findAllPublic();
    const post = posts.find(post => post.id === id);

    if (!post) throw new Error(`Post with id ${id} not found`);

    return post;
  }
  async findBySlug(slug: string): Promise<PostModel | null> {
    const posts = await this.findAllPublic();
    const post = posts.find(post => post.slug === slug);

    if (!post) throw new Error(`Post with slug ${slug} not found`);

    return post;
  }
}
