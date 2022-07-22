import { ResponseCollection } from './ResponseCollection';
import { ProductResponse } from '../entity/ProductResponse';

export interface ResponseProductCollection extends ResponseCollection {
  collection: ProductResponse[];
}
