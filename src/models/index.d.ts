import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type FoodMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type RestaurantMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Food {
  readonly id: string;
  readonly name: string;
  readonly pounds: number;
  readonly daysOld: string;
  readonly pickUp: string;
  readonly restaurantID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Food, FoodMetaData>);
  static copyOf(source: Food, mutator: (draft: MutableModel<Food, FoodMetaData>) => MutableModel<Food, FoodMetaData> | void): Food;
}

export declare class Restaurant {
  readonly id: string;
  readonly name: string;
  readonly address: string;
  readonly phone: string;
  readonly email: string;
  readonly pounds?: number | null;
  readonly Foods?: (Food | null)[] | null;
  readonly latitude: number;
  readonly longitude: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Restaurant, RestaurantMetaData>);
  static copyOf(source: Restaurant, mutator: (draft: MutableModel<Restaurant, RestaurantMetaData>) => MutableModel<Restaurant, RestaurantMetaData> | void): Restaurant;
}