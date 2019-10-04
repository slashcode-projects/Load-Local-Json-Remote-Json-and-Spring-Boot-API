import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  results: any;
  url = 'https://jsonplaceholder.typicode.com/users';
    constructor(private http: HttpClient) {}
  ngOnInit() {  this.results = this.http.get(this.url).pipe(
    map(results => {
      console.log('RAW :: ', results);
      return results;
    })
  );
  }

}
