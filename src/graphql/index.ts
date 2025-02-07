import { GraphQLClient } from 'graphql-request';
import dotenv from 'dotenv';

dotenv.config();

export const cmsClient = new GraphQLClient(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/graphql`, {
});
