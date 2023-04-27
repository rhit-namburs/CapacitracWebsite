import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerVisualization = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Visualization, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly timeStamp?: string | null;
  readonly inches?: number | null;
  readonly amps?: number | null;
  readonly ampsum?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyVisualization = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Visualization, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly timeStamp?: string | null;
  readonly inches?: number | null;
  readonly amps?: number | null;
  readonly ampsum?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Visualization = LazyLoading extends LazyLoadingDisabled ? EagerVisualization : LazyVisualization

export declare const Visualization: (new (init: ModelInit<Visualization>) => Visualization) & {
  copyOf(source: Visualization, mutator: (draft: MutableModel<Visualization>) => MutableModel<Visualization> | void): Visualization;
}

type EagerSettings = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Settings, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly diameter?: number | null;
  readonly cylinderHeight?: number | null;
  readonly conicalAngle?: number | null;
  readonly binHeight?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySettings = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Settings, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly diameter?: number | null;
  readonly cylinderHeight?: number | null;
  readonly conicalAngle?: number | null;
  readonly binHeight?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Settings = LazyLoading extends LazyLoadingDisabled ? EagerSettings : LazySettings

export declare const Settings: (new (init: ModelInit<Settings>) => Settings) & {
  copyOf(source: Settings, mutator: (draft: MutableModel<Settings>) => MutableModel<Settings> | void): Settings;
}

type EagerBin = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Bin, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly city?: string | null;
  readonly state?: string | null;
  readonly users?: (UserBin | null)[] | null;
  readonly BinToSetting?: Settings | null;
  readonly BinToVis?: Visualization | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly binBinToSettingId?: string | null;
  readonly binBinToVisId?: string | null;
}

type LazyBin = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Bin, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly city?: string | null;
  readonly state?: string | null;
  readonly users: AsyncCollection<UserBin>;
  readonly BinToSetting: AsyncItem<Settings | undefined>;
  readonly BinToVis: AsyncItem<Visualization | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly binBinToSettingId?: string | null;
  readonly binBinToVisId?: string | null;
}

export declare type Bin = LazyLoading extends LazyLoadingDisabled ? EagerBin : LazyBin

export declare const Bin: (new (init: ModelInit<Bin>) => Bin) & {
  copyOf(source: Bin, mutator: (draft: MutableModel<Bin>) => MutableModel<Bin> | void): Bin;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly admin?: boolean | null;
  readonly UsersToBins?: (UserBin | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly admin?: boolean | null;
  readonly UsersToBins: AsyncCollection<UserBin>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerUserBin = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserBin, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly binId?: string | null;
  readonly userId?: string | null;
  readonly bin: Bin;
  readonly user: User;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserBin = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserBin, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly binId?: string | null;
  readonly userId?: string | null;
  readonly bin: AsyncItem<Bin>;
  readonly user: AsyncItem<User>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserBin = LazyLoading extends LazyLoadingDisabled ? EagerUserBin : LazyUserBin

export declare const UserBin: (new (init: ModelInit<UserBin>) => UserBin) & {
  copyOf(source: UserBin, mutator: (draft: MutableModel<UserBin>) => MutableModel<UserBin> | void): UserBin;
}