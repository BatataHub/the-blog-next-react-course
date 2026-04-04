import bcrypt from 'bcryptjs';
import { loadEnvConfig } from '@next/env';

loadEnvConfig(process.cwd());

export async function hashPassword(password: string) {
  const hash = await bcrypt.hash(password, 10);
  const base64 = Buffer.from(hash).toString('base64');
  return base64;
}

export async function verifyPassword(password: string, base64Hash: string) {
  const hash = Buffer.from(base64Hash, 'base64').toString('utf-8');
  return bcrypt.compare(password, hash);
}

// (async () => {
//   const hashedPassword = await hashPassword('123456');
//   console.log('Hashed password:', hashedPassword, process.env.LOGIN_PASS);
// })();

// (async () => {
//   const userAqui = process.env.LOGIN_USER;
//   const passAqui = process.env.LOGIN_PASS;
//   console.log('está pegando mesmo???', passAqui, userAqui);
//   const isPassworldValid = await verifyPassword(
//     '123456',
//     process.env.LOGIN_PASS || '',
//   );
//   console.log('Is password valid?', isPassworldValid);
// })();
