import { Injectable } from '@angular/core';

let uid = { uid: '' };

@Injectable()
export class UidService {

  constructor() {

  }

  setUid(obj) {
    uid = obj;
  }

  getUid() {
    // console.log('UID FROM UID SERVICE', uid);
    return uid.uid;
  }
}
