import { RaceResponse } from './RaceResponse';
import { ResponseCollection } from './ResponseCollection';

export interface ResponseRacesCollection extends ResponseCollection {
  collection: RaceResponse[];
}
