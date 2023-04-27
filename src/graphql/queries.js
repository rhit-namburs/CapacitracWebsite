/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getOrganization = /* GraphQL */ `
  query GetOrganization($id: ID!) {
    getOrganization(id: $id) {
      id
      Owner {
        id
        name
        email
        admin
        UsersToBins {
          nextToken
        }
        createdAt
        updatedAt
      }
      Employee {
        id
        name
        email
        admin
        UsersToBins {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      organizationOwnerId
      organizationEmployeeId
    }
  }
`;
export const listOrganizations = /* GraphQL */ `
  query ListOrganizations(
    $filter: ModelOrganizationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrganizations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Owner {
          id
          name
          email
          admin
          createdAt
          updatedAt
        }
        Employee {
          id
          name
          email
          admin
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        organizationOwnerId
        organizationEmployeeId
      }
      nextToken
    }
  }
`;
export const getVisualization = /* GraphQL */ `
  query GetVisualization($id: ID!) {
    getVisualization(id: $id) {
      id
      beginningWeight
      startTime
      runTimeSec
      runTimeMin
      binID
      rate
      feedMoved
      createdAt
      updatedAt
    }
  }
`;
export const listVisualizations = /* GraphQL */ `
  query ListVisualizations(
    $filter: ModelVisualizationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVisualizations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        beginningWeight
        startTime
        runTimeSec
        runTimeMin
        binID
        rate
        feedMoved
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const visualizationsByBinID = /* GraphQL */ `
  query VisualizationsByBinID(
    $binID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelVisualizationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    visualizationsByBinID(
      binID: $binID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        beginningWeight
        startTime
        runTimeSec
        runTimeMin
        binID
        rate
        feedMoved
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSettings = /* GraphQL */ `
  query GetSettings($id: ID!) {
    getSettings(id: $id) {
      id
      diameter
      cylinderHeight
      conicalAngle
      binHeight
      createdAt
      updatedAt
    }
  }
`;
export const listSettings = /* GraphQL */ `
  query ListSettings(
    $filter: ModelSettingsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSettings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        diameter
        cylinderHeight
        conicalAngle
        binHeight
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBin = /* GraphQL */ `
  query GetBin($id: ID!) {
    getBin(id: $id) {
      id
      name
      city
      state
      users {
        items {
          id
          binId
          userId
          createdAt
          updatedAt
        }
        nextToken
      }
      BinToSetting {
        id
        diameter
        cylinderHeight
        conicalAngle
        binHeight
        createdAt
        updatedAt
      }
      BinToVis {
        items {
          id
          beginningWeight
          startTime
          runTimeSec
          runTimeMin
          binID
          rate
          feedMoved
          createdAt
          updatedAt
        }
        nextToken
      }
      fillPercentage
      createdAt
      updatedAt
      binBinToSettingId
    }
  }
`;
export const listBins = /* GraphQL */ `
  query ListBins(
    $filter: ModelBinFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBins(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        city
        state
        users {
          nextToken
        }
        BinToSetting {
          id
          diameter
          cylinderHeight
          conicalAngle
          binHeight
          createdAt
          updatedAt
        }
        BinToVis {
          nextToken
        }
        fillPercentage
        createdAt
        updatedAt
        binBinToSettingId
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      email
      admin
      UsersToBins {
        items {
          id
          binId
          userId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        admin
        UsersToBins {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserBin = /* GraphQL */ `
  query GetUserBin($id: ID!) {
    getUserBin(id: $id) {
      id
      binId
      userId
      bin {
        id
        name
        city
        state
        users {
          nextToken
        }
        BinToSetting {
          id
          diameter
          cylinderHeight
          conicalAngle
          binHeight
          createdAt
          updatedAt
        }
        BinToVis {
          nextToken
        }
        fillPercentage
        createdAt
        updatedAt
        binBinToSettingId
      }
      user {
        id
        name
        email
        admin
        UsersToBins {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUserBins = /* GraphQL */ `
  query ListUserBins(
    $filter: ModelUserBinFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserBins(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        binId
        userId
        bin {
          id
          name
          city
          state
          fillPercentage
          createdAt
          updatedAt
          binBinToSettingId
        }
        user {
          id
          name
          email
          admin
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const userBinsByBinId = /* GraphQL */ `
  query UserBinsByBinId(
    $binId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserBinFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userBinsByBinId(
      binId: $binId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        binId
        userId
        bin {
          id
          name
          city
          state
          fillPercentage
          createdAt
          updatedAt
          binBinToSettingId
        }
        user {
          id
          name
          email
          admin
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const userBinsByUserId = /* GraphQL */ `
  query UserBinsByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserBinFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userBinsByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        binId
        userId
        bin {
          id
          name
          city
          state
          fillPercentage
          createdAt
          updatedAt
          binBinToSettingId
        }
        user {
          id
          name
          email
          admin
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
