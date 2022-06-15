import { PetResponse } from '../entity/PetResponse';
import { ResponseCollection } from './ResponseCollection';

export interface ResponsePetsCollection extends ResponseCollection {
  collection: PetResponse[];
}
