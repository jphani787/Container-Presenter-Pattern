/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type SearchJobsInput = {
  query: string;
};

export type SearchJobsQueryVariables = Exact<{
  input: SearchJobsInput;
}>;


export type SearchJobsQuery = { searchJobs: Array<{ id: string, title: string }> };


export const SearchJobsDocument = gql`
    query SearchJobs($input: SearchJobsInput!) {
  searchJobs(input: $input) {
    id
    title
  }
}
    `;

/**
 * __useSearchJobsQuery__
 *
 * To run a query within a React component, call `useSearchJobsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchJobsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchJobsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSearchJobsQuery(baseOptions: Apollo.QueryHookOptions<SearchJobsQuery, SearchJobsQueryVariables> & ({ variables: SearchJobsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchJobsQuery, SearchJobsQueryVariables>(SearchJobsDocument, options);
      }
export function useSearchJobsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchJobsQuery, SearchJobsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchJobsQuery, SearchJobsQueryVariables>(SearchJobsDocument, options);
        }
// @ts-ignore
export function useSearchJobsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<SearchJobsQuery, SearchJobsQueryVariables>): Apollo.UseSuspenseQueryResult<SearchJobsQuery, SearchJobsQueryVariables>;
export function useSearchJobsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<SearchJobsQuery, SearchJobsQueryVariables>): Apollo.UseSuspenseQueryResult<SearchJobsQuery | undefined, SearchJobsQueryVariables>;
export function useSearchJobsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<SearchJobsQuery, SearchJobsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SearchJobsQuery, SearchJobsQueryVariables>(SearchJobsDocument, options);
        }
export type SearchJobsQueryHookResult = ReturnType<typeof useSearchJobsQuery>;
export type SearchJobsLazyQueryHookResult = ReturnType<typeof useSearchJobsLazyQuery>;
export type SearchJobsSuspenseQueryHookResult = ReturnType<typeof useSearchJobsSuspenseQuery>;
export type SearchJobsQueryResult = Apollo.QueryResult<SearchJobsQuery, SearchJobsQueryVariables>;