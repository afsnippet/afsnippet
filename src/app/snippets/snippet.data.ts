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
  versions: array;
  useCases?: array;
  commonErrors?: array;
  stackoverflowPosts?: array;
  interviewQuestions?: array;
  videoTutorials?: array;
  writtenTutorials?: array;
  snippetCreatedDate: _date;
  snippetLastUpdatedDate?: _date;
  // bookmark?: boolean;
  // likes?: number;
}
