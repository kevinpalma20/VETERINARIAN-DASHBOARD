import { ResponseCollection } from './ResponseCollection';
import { CategoryResponse } from '../entity/CategoryResponse';

export interface ResponseCategoryCollection extends ResponseCollection {
  collection: CategoryResponse[];
}
