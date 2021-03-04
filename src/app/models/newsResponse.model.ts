import { SingleNew } from '../models/single-new.model';

export interface NewsResponse {
  status: string;
  totalResults: string;
  articles: SingleNew[];
}
