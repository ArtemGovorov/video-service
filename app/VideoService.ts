import { Http } from '@angular/http';
import { Injectable, Inject } from '@angular/core';

import 'rxjs/add/operator/map';

@Injectable()
export class VideoService {

  constructor(private http: Http) {}

  getVideos() {
    return this.http.get(`http://google.com/videos`)
      .map(res => res.json().data);
  }
}