import { SignJWT, jwtVerify } from 'jose';

const jwtSecretKey = process.env.JWT_SECRET_KEY;
const jwtEncodedKey = new TextEncoder().encode(jwtSecretKey);
const loginExpStr = process.env.LOGIN_EXP_STR || '1d';

type JWTPayload = {
  username: string;
  expiresAt: Date;
};

export async function signJwt(jwtPayload: JWTPayload) {
  return new SignJWT(jwtPayload)
    .setProtectedHeader({
      alg: 'HS256',
      typ: 'JWT',
    })
    .setIssuedAt()
    .setExpirationTime(loginExpStr)
    .sign(jwtEncodedKey);
}

export async function verifyJwt(jwt: string | undefined = '') {
  try {
    const { payload } = await jwtVerify(jwt, jwtEncodedKey, {
      algorithms: ['HS256'],
    });
    return payload;
  } catch {
    console.log('Invalid Token');
    return false;
  }
}
