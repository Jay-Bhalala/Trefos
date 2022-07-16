// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Food, Restaurant } = initSchema(schema);

export {
  Food,
  Restaurant
};