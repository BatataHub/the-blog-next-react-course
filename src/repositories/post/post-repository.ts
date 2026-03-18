import { PostModel } from '@/models/post/post-model';

export interface Postrepository {
  findAll(): Promise<PostModel[]>;
  findById(id: string): Promise<PostModel | null>;
}
