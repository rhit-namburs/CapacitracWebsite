/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateOrganization = /* GraphQL */ `
  subscription OnCreateOrganization(
    $filter: ModelSubscriptionOrganizationFilterInput
  ) {
    onCreateOrganization(filter: $filter) {
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
export const onUpdateOrganization = /* GraphQL */ `
  subscription OnUpdateOrganization(
    $filter: ModelSubscriptionOrganizationFilterInput
  ) {
    onUpdateOrganization(filter: $filter) {
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
export const onDeleteOrganization = /* GraphQL */ `
  subscription OnDeleteOrganization(
    $filter: ModelSubscriptionOrganizationFilterInput
  ) {
    onDeleteOrganization(filter: $filter) {
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
export const onCreateVisualization = /* GraphQL */ `
  subscription OnCreateVisualization(
    $filter: ModelSubscriptionVisualizationFilterInput
  ) {
    onCreateVisualization(filter: $filter) {
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
export const onUpdateVisualization = /* GraphQL */ `
  subscription OnUpdateVisualization(
    $filter: ModelSubscriptionVisualizationFilterInput
  ) {
    onUpdateVisualization(filter: $filter) {
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
export const onDeleteVisualization = /* GraphQL */ `
  subscription OnDeleteVisualization(
    $filter: ModelSubscriptionVisualizationFilterInput
  ) {
    onDeleteVisualization(filter: $filter) {
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
export const onCreateSettings = /* GraphQL */ `
  subscription OnCreateSettings($filter: ModelSubscriptionSettingsFilterInput) {
    onCreateSettings(filter: $filter) {
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
export const onUpdateSettings = /* GraphQL */ `
  subscription OnUpdateSettings($filter: ModelSubscriptionSettingsFilterInput) {
    onUpdateSettings(filter: $filter) {
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
export const onDeleteSettings = /* GraphQL */ `
  subscription OnDeleteSettings($filter: ModelSubscriptionSettingsFilterInput) {
    onDeleteSettings(filter: $filter) {
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
export const onCreateBin = /* GraphQL */ `
  subscription OnCreateBin($filter: ModelSubscriptionBinFilterInput) {
    onCreateBin(filter: $filter) {
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
export const onUpdateBin = /* GraphQL */ `
  subscription OnUpdateBin($filter: ModelSubscriptionBinFilterInput) {
    onUpdateBin(filter: $filter) {
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
export const onDeleteBin = /* GraphQL */ `
  subscription OnDeleteBin($filter: ModelSubscriptionBinFilterInput) {
    onDeleteBin(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateUserBin = /* GraphQL */ `
  subscription OnCreateUserBin($filter: ModelSubscriptionUserBinFilterInput) {
    onCreateUserBin(filter: $filter) {
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
export const onUpdateUserBin = /* GraphQL */ `
  subscription OnUpdateUserBin($filter: ModelSubscriptionUserBinFilterInput) {
    onUpdateUserBin(filter: $filter) {
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
export const onDeleteUserBin = /* GraphQL */ `
  subscription OnDeleteUserBin($filter: ModelSubscriptionUserBinFilterInput) {
    onDeleteUserBin(filter: $filter) {
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
