import drop from 'lodash/drop';
import take from 'lodash/take';
import data from '../../../assets/data.json';
import { Library, Query } from '../../../types'
import { isEmptyOrNull } from '../../../util/strings';

import * as Sorting from './sorting';

const NUM_PER_PAGE = 10;

/**
 * Query the data.json file
 */
export function queryLibraries(query?: Query) {

  const querySearch = query?.search
    ? query.search.toString().toLowerCase().trim()
    : undefined;

  const libraries = librariesFilter(data.libraries as any as Library[], {
    querySearch
  });

  const page = query?.page ? parseInt(query.page.toString(), 10) : 0;
  const pageSize = query?.pageSize ? parseInt(query.pageSize.toString(), 10) : NUM_PER_PAGE;

  const relevanceSortedLibraries = query?.order ? Sorting.stars([...libraries]) : libraries;
  const filteredAndPaginatedLibraries = take(drop(relevanceSortedLibraries, (page - 1) * pageSize), pageSize);

  return {
    libraries: filteredAndPaginatedLibraries,
    total: libraries.length,
  };;
}

export interface LibrariesFilter {
  querySearch?: any,
}

export const librariesFilter = (libraries: Library[], { querySearch }: LibrariesFilter) => {

  return libraries.filter(library => {

    const viewerHasTypedSearch = !isEmptyOrNull(querySearch);

    let isSearchMatch = false;

    if (querySearch) {
      isSearchMatch = library.github?.name?.toLowerCase().includes(querySearch.toLowerCase());
      if (!isSearchMatch) {
        library.github?.description?.toLowerCase().includes(querySearch.toLowerCase());
      }
    }

    if (!viewerHasTypedSearch) {
      return true;
    }

    return isSearchMatch;
  });
};
