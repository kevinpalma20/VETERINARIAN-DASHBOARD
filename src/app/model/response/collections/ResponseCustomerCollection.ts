import { CustomerResponse } from '../entity/CustomerResponse';
import { ResponseCollection } from './ResponseCollection';

export interface ResponseCustomerCollection extends ResponseCollection {
  collection: CustomerResponse[];
}
