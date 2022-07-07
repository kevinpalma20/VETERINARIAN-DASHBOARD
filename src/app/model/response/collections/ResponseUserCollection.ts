import { UserResponse } from './../entity/UserResponse';
import { ResponseCollection } from './ResponseCollection';

export interface ResponseUserCollection extends ResponseCollection {
  collection: UserResponse[];
}
