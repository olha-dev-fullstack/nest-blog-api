import { RequestTimeoutException } from '@nestjs/common';

interface HandleDbErrorOptions {
  message?: string;
  description?: string;
}

export async function handleDbError<T>(
  fn: () => Promise<T>,
  options: HandleDbErrorOptions = {},
) {
  const { message, description } = options;
  try {
    return await fn();
  } catch (e) {
    console.log(e);
    throw new RequestTimeoutException(message ?? 'Unable to process request', {
      description: description ?? e.toString(),
    });
  }
}
