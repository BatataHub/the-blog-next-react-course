import { ZodFormattedError } from 'zod';

export function getZodErrorMessages<T>(error: ZodFormattedError<T>): string[] {
  return Object.values(error)
    .map(field => {
      if (Array.isArray(field)) return field;

      if (
        field &&
        typeof field === 'object' &&
        '_errors' in field &&
        Array.isArray(field._errors)
      ) {
        return field._errors;
      }

      return [];
    })
    .flat()
    .filter(Boolean);
}
