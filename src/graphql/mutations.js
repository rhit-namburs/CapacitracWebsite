/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createOrganization = /* GraphQL */ `
  mutation CreateOrganization(
    $input: CreateOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    createOrganization(input: $input, condition: $condition) {
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
export const updateOrganization = /* GraphQL */ `
  mutation UpdateOrganization(
    $input: UpdateOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    updateOrganization(input: $input, condition: $condition) {
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
export const deleteOrganization = /* GraphQL */ `
  mutation DeleteOrganization(
    $input: DeleteOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    deleteOrganization(input: $input, condition: $condition) {
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
export const createVisualization = /* GraphQL */ `
  mutation CreateVisualization(
    $input: CreateVisualizationInput!
    $condition: ModelVisualizationConditionInput
  ) {
    createVisualization(input: $input, condition: $condition) {
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
export const updateVisualization = /* GraphQL */ `
  mutation UpdateVisualization(
    $input: UpdateVisualizationInput!
    $condition: ModelVisualizationConditionInput
  ) {
    updateVisualization(input: $input, condition: $condition) {
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
export const deleteVisualization = /* GraphQL */ `
  mutation DeleteVisualization(
    $input: DeleteVisualizationInput!
    $condition: ModelVisualizationConditionInput
  ) {
    deleteVisualization(input: $input, condition: $condition) {
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
export const createSettings = /* GraphQL */ `
  mutation CreateSettings(
    $input: CreateSettingsInput!
    $condition: ModelSettingsConditionInput
  ) {
    createSettings(input: $input, condition: $condition) {
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
export const updateSettings = /* GraphQL */ `
  mutation UpdateSettings(
    $input: UpdateSettingsInput!
    $condition: ModelSettingsConditionInput
  ) {
    updateSettings(input: $input, condition: $condition) {
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
export const deleteSettings = /* GraphQL */ `
  mutation DeleteSettings(
    $input: DeleteSettingsInput!
    $condition: ModelSettingsConditionInput
  ) {
    deleteSettings(input: $input, condition: $condition) {
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
export const createBin = /* GraphQL */ `
  mutation CreateBin(
    $input: CreateBinInput!
    $condition: ModelBinConditionInput
  ) {
    createBin(input: $input, condition: $condition) {
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
export const updateBin = /* GraphQL */ `
  mutation UpdateBin(
    $input: UpdateBinInput!
    $condition: ModelBinConditionInput
  ) {
    updateBin(input: $input, condition: $condition) {
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
export const deleteBin = /* GraphQL */ `
  mutation DeleteBin(
    $input: DeleteBinInput!
    $condition: ModelBinConditionInput
  ) {
    deleteBin(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createUserBin = /* GraphQL */ `
  mutation CreateUserBin(
    $input: CreateUserBinInput!
    $condition: ModelUserBinConditionInput
  ) {
    createUserBin(input: $input, condition: $condition) {
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
export const updateUserBin = /* GraphQL */ `
  mutation UpdateUserBin(
    $input: UpdateUserBinInput!
    $condition: ModelUserBinConditionInput
  ) {
    updateUserBin(input: $input, condition: $condition) {
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
export const deleteUserBin = /* GraphQL */ `
  mutation DeleteUserBin(
    $input: DeleteUserBinInput!
    $condition: ModelUserBinConditionInput
  ) {
    deleteUserBin(input: $input, condition: $condition) {
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
