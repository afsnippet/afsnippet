import * as moment from 'moment';
import _date = moment.unitOfTime._date;

export interface Snippet {
  uid: string;
  snippetId: string;
  snippetText: string;
  snippetCreatedDate: _date;
  // bookmark?: boolean;
  // likes?: number;
}
