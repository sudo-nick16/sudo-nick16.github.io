import { graphql } from 'graphql';
import schema from './schema';

export default async function queryGraphql(query: string, variableValues = {}) {
    const { data } = await graphql({ schema, source: query, variableValues });
    return data || {};
};

