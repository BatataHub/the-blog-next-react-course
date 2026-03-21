import { DrizzlePostRepository } from './drizzle-post-repository';
import { Postrepository } from './post-repository';

export const postRepository: Postrepository = new DrizzlePostRepository();
