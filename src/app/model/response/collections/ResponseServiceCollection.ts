import { ServiceResponse } from '../entity/ServiceResponse';

import { ResponseCollection } from './ResponseCollection';

export interface ResponseServiceCollection extends ResponseCollection {
  collection: ServiceResponse[];
}
