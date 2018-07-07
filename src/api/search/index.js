import searchResolvers from "./search.resolvers";
import { loadGQLFile } from "../../utils/gqlLoader";

export default {
    resolvers: searchResolvers,
    typeDefs: loadGQLFile('search/search.graphql')
}