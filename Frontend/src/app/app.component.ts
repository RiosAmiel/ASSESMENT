import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { IgxNavigationDrawerComponent } from 'igniteui-angular';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { routes } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  public topNavLinks: {
    path: string,
    name: string
    icon: string
  }[] = [];
  
  @ViewChild(IgxNavigationDrawerComponent, { static: true })
  public navdrawer!: IgxNavigationDrawerComponent;

  constructor(
    public router: Router) {
    for (const route of routes) {
      if (route.path && route.data && route.path.indexOf('*') === -1) {
        this.topNavLinks.push({
          name: route.data.text,
          path: '/' + route.path,
          icon: route.data.icon
        });
      }
    }
  }

  public ngOnInit(): void {
    this.routerEvent();
  }

  private routerEvent() {
    this.router.events.pipe(
      filter((x): x is NavigationStart => x instanceof NavigationStart)
    )
      .subscribe((event: NavigationStart) => {
        if (event.url !== '/' && !this.navdrawer.pin) {
          // Close drawer when selecting a view on mobile (unpinned)
          this.navdrawer.close();
        }
      });
  }

  logout(){
    this.router.navigate(['']);
    
  }
}
