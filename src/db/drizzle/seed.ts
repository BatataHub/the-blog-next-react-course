import { JsonPostRepository } from '@/repositories/post/json-post-repository';
import { drizzleDb } from '.';
import { postsTable } from './schemas';

(async () => {
  const jsonPostRepository = new JsonPostRepository();
  const posts = await jsonPostRepository.findAll();
  try {
    // await drizzleDb.delete(postsTable); // ISSO LIMPA A BASE DE DADOS ANTES DE INSERIR OS POSTS NOVAMENTE
    await drizzleDb.insert(postsTable).values(posts);

    console.log();
    console.log(`${posts.length} posts inseridos com sucesso.`);
    console.log();
  } catch (e) {
    console.log();
    console.log('Ocorreu um erro ao buscar os posts do DrizzleDB:');
    console.log();
    console.log(e);
    console.log();
  }
})();
