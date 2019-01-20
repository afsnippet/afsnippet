import moment from 'moment/src/moment';
import _date = moment.unitOfTime;

export interface Snippet {
  uid: string;
  snippetId: string;
  snippetTitle: string;
  beginnerSnippet: string;
  stackblitzBeginnerUrl?: string;
  expertSnippet: string;
  stackblitzExpertUrl?: string;
  commonSnippet: string;
  stackblitzCommonPracticeUrl?: string;
  versions: object[];
  useCases?: object[];
  commonErrors?: object[];
  stackoverflowPosts?: object[];
  interviewQuestions?: object[];
  videoTutorials?: object[];
  writtenTutorials?: object[];
  snippetCreatedDate: _date;
  snippetLastUpdatedDate?: _date;
  // bookmark?: boolean;
  // likes?: number;
}
