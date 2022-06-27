import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router, private location: Location) {}

  receivedKey(data: string) {
    let url = this.location.path().substring(0, this.router.url.indexOf('?'));
    if (url.length <= 0) {
      this.router.navigate([this.location.path()], {
        queryParams: { key: data },
      });
    } else {
      this.router.navigate([url], { queryParams: { key: data } });
    }
  }
}
