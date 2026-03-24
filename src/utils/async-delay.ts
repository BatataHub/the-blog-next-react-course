import { logColor } from './log-colors';

export async function asyncDelay(milleseconds: number = 0, verbose: false) {
  if (milleseconds <= 0) return;

  if (verbose) {
    logColor(`Delay for ${milleseconds / 1000}s`);
  }

  await new Promise(resolve => setTimeout(resolve, milleseconds));
}
