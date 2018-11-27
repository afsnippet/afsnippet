import moment from 'moment/src/moment'
//import moment = require("moment");
import _date = moment.unitOfTime;

export interface Snippet {
  uid: string;
  snippetId: string;
  snippetText: string;
  snippetCreatedDate: _date;
  // bookmark?: boolean;
  // likes?: number;
}
