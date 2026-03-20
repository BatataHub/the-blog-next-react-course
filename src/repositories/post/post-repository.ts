import { PostModel } from '@/models/post/post-model';

export interface Postrepository {
  findAllPublic(): Promise<PostModel[]>;
  findById(id: string): Promise<PostModel | null>;
  findBySlug(slug: string): Promise<PostModel | null>;
}
