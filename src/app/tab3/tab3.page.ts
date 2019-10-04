import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  results: any;
url = 'http://localhost:9091/employees';
  constructor(private http: HttpClient) {}

ngOnInit() {
  this.results = this.http.get(this.url).pipe(
    map(results => {
      console.log('RAW :: ', results);
      return results;
    })
  );
}
}
