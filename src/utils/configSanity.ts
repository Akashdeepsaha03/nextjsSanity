import {createClient} from 'next-sanity';

export const client = createClient({
    projectId: "sg7hqnwf",
    dataset: "production",
    apiVersion: "2022-03-07",
    useCdn: true,
});