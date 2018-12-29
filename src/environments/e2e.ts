import development from './dev';
import { EnvironmentSchema } from './schema';

export const port = 8013;
export const host = `http://localhost:${port}`;

/**
 * Environment: e2e
 */
const env: EnvironmentSchema = {
  // Start with development config,
  ...development,
  // override for e2e testing:
  name: 'e2e',
  enableAnimations: false,
  ratesAPI: {
    btc: `${host}/bitpay.com/api/rates`,
    bch: `${host}/bitpay.com/api/rates/bch`,
    eth: `${host}/bitpay.com/api/rates`,
    tri: `${host}/bitpay.com/api/rates`,
  },
  activateScanner: false
};

export default env;
