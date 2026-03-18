import { JsonPostRepository } from './json-post-repository';
import { Postrepository } from './post-repository';

export const postRepository: Postrepository = new JsonPostRepository();
