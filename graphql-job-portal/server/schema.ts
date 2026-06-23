import "graphql-import-node";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { typeDefs as scalarTypeDefs, resolvers as scalarResolvers } from "./scalars";

import {
  resolvers as companyResolvers,
  typeDefs as companyTypeDefs,
} from "./entities/company";

import {
  resolvers as userResolvers,
  typeDefs as userTypeDefs,
} from "./entities/user";

import {
  resolvers as jobResolvers,
  typeDefs as jobTypeDefs,
} from "./entities/job";

const schema = makeExecutableSchema({
  typeDefs: [scalarTypeDefs, companyTypeDefs, userTypeDefs, jobTypeDefs],
  resolvers: [scalarResolvers, companyResolvers, userResolvers, jobResolvers],
});

export default schema;
