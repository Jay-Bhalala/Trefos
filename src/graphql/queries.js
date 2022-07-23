/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFood = /* GraphQL */ `
  query GetFood($id: ID!) {
    getFood(id: $id) {
      id
      name
      pounds
      daysOld
      pickUp
      restaurantID
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listFoods = /* GraphQL */ `
  query ListFoods(
    $filter: ModelFoodFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFoods(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        pounds
        daysOld
        pickUp
        restaurantID
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getRestaurant = /* GraphQL */ `
  query GetRestaurant($id: ID!) {
    getRestaurant(id: $id) {
      id
      name
      address
      phone
      email
      type
      pounds
      totalpounds
      Foods {
        items {
          id
          name
          pounds
          daysOld
          pickUp
          restaurantID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      latitude
      longitude
      image
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listRestaurants = /* GraphQL */ `
  query ListRestaurants(
    $filter: ModelRestaurantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRestaurants(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        address
        phone
        email
        type
        pounds
        totalpounds
        Foods {
          nextToken
        }
        latitude
        longitude
        image
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const restaurantsByPounds = /* GraphQL */ `
  query RestaurantsByPounds(
    $type: String!
    $pounds: ModelFloatKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelRestaurantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    restaurantsByPounds(
      type: $type
      pounds: $pounds
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        address
        phone
        email
        type
        pounds
        totalpounds
        Foods {
          nextToken
        }
        latitude
        longitude
        image
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const searchRestaurants = /* GraphQL */ `
  query SearchRestaurants(
    $filter: SearchableRestaurantFilterInput
    $sort: [SearchableRestaurantSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableRestaurantAggregationInput]
  ) {
    searchRestaurants(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        name
        address
        phone
        email
        type
        pounds
        totalpounds
        Foods {
          nextToken
        }
        latitude
        longitude
        image
        createdAt
        updatedAt
        owner
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
