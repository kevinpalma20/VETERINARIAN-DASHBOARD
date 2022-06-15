import { CustomerResponse } from './entity/Customer';
import { ResponseCollection } from './ResponseCollection';

export interface ResponseCustomerCollection extends ResponseCollection {
  collection: CustomerResponse[];
}
