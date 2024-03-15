import { marshall } from "@aws-sdk/util-dynamodb";
import { Movie , MovieReview} from "./types";

type Entity = Movie  | MovieReview;  // NEW
export const generateItem = (entity: Entity) => {
  return {
    PutRequest: {
      Item: marshall(entity),
    },
  };
};

export const generateBatch = (data: Entity[]) => {
  return data.map((e) => {
    return generateItem(e);
  });
};