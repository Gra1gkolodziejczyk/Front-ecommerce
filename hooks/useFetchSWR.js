import useSWR from 'swr';
import getSWRData from '../helpers/get_swr_data';

export const useFetchSwr = (path, mounted) => {
    const API_URL = process.env.SERVER_API;
    const fetcher = getSWRData(API_URL, path);
    const { data, error, mutate } = useSWR( mounted ? path : null, fetcher);

    return ({data, error, mutate});
}