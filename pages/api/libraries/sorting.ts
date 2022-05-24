import { Library } from '../../../types'

export const issues = (libraries: Library[]) => {
  return libraries.sort((a, b) => b.github.stats.issues - a.github.stats.issues);
};

export const stars = (libraries: Library[]) => {
  return libraries.sort((a, b) => b.github.stats.stars - a.github.stats.stars);
};
