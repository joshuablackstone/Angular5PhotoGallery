import { Component, OnInit } from '@angular/core';
import { routes } from './routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public navRoutes: any[];
  constructor(private _router: Router) { }

  ngOnInit() {
    this.navRoutes = routes.filter(function (r) {
      return r.data;
    }).sort(function (r1, r2) {
      return r1.data.nav - r2.data.nav;
    });
  }

  public isCurrent(path: string) {
    var active = this._router.url.replace("/", "") === path;
    if (active) return true;
    return false;
  };
}