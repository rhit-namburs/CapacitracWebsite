// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Visualization, Settings, Bin, User, UserBin } = initSchema(schema);

export {
  Visualization,
  Settings,
  Bin,
  User,
  UserBin
};