import { SingleNew } from '../models/single-new.model';

export interface News {
  totalResults: number;
  articles: SingleNew[];
}
