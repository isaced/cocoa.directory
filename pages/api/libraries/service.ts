import data from '../../../assets/data.json';

/**
 * Query the data.json file
 */
export function queryLibraries() {
  const resData = {
    libraries: data.libraries,
    total: data.libraries.length,
  } as any;
  return resData;
}