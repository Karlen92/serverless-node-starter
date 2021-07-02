const logger = require('pino')({
  name: 'LAMBDA FUNC',
});

// eslint-disable-next-line import/prefer-default-export
export const handler = async (event) => {
  if (event.body) {
    logger.info({ obj: 1 });
  } else {
    logger.error('error');
  }
};
