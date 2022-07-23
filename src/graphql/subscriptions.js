/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateFood = /* GraphQL */ `
  subscription OnCreateFood($owner: String) {
    onCreateFood(owner: $owner) {
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
export const onUpdateFood = /* GraphQL */ `
  subscription OnUpdateFood($owner: String) {
    onUpdateFood(owner: $owner) {
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
export const onDeleteFood = /* GraphQL */ `
  subscription OnDeleteFood($owner: String) {
    onDeleteFood(owner: $owner) {
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
export const onCreateRestaurant = /* GraphQL */ `
  subscription OnCreateRestaurant($owner: String) {
    onCreateRestaurant(owner: $owner) {
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
export const onUpdateRestaurant = /* GraphQL */ `
  subscription OnUpdateRestaurant($owner: String) {
    onUpdateRestaurant(owner: $owner) {
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
export const onDeleteRestaurant = /* GraphQL */ `
  subscription OnDeleteRestaurant($owner: String) {
    onDeleteRestaurant(owner: $owner) {
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
