import productModel from "./product.model";
import productResolvers from "./product.resolvers";
import { loadGQLFile } from "../../utils/gqlLoader";

export default {
    model: productModel,
    resolvers: productResolvers,
    typeDefs : loadGQLFile('product/product.graphql')
}