/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createFood = /* GraphQL */ `
  mutation CreateFood(
    $input: CreateFoodInput!
    $condition: ModelFoodConditionInput
  ) {
    createFood(input: $input, condition: $condition) {
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
export const updateFood = /* GraphQL */ `
  mutation UpdateFood(
    $input: UpdateFoodInput!
    $condition: ModelFoodConditionInput
  ) {
    updateFood(input: $input, condition: $condition) {
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
export const deleteFood = /* GraphQL */ `
  mutation DeleteFood(
    $input: DeleteFoodInput!
    $condition: ModelFoodConditionInput
  ) {
    deleteFood(input: $input, condition: $condition) {
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
export const createRestaurant = /* GraphQL */ `
  mutation CreateRestaurant(
    $input: CreateRestaurantInput!
    $condition: ModelRestaurantConditionInput
  ) {
    createRestaurant(input: $input, condition: $condition) {
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
export const updateRestaurant = /* GraphQL */ `
  mutation UpdateRestaurant(
    $input: UpdateRestaurantInput!
    $condition: ModelRestaurantConditionInput
  ) {
    updateRestaurant(input: $input, condition: $condition) {
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
export const deleteRestaurant = /* GraphQL */ `
  mutation DeleteRestaurant(
    $input: DeleteRestaurantInput!
    $condition: ModelRestaurantConditionInput
  ) {
    deleteRestaurant(input: $input, condition: $condition) {
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
