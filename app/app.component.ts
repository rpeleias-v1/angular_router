import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES],
    template: `
                <h1>My first Angular 2 app</h1>
                <ul>
                    <li><a [routerLink]="['/home']">Home</a></li>
                    <li><a [routerLink]="['/login']">Login</a></li>
                    <li><a [routerLink]="['/dashboard']">Dashboard</a></li>
                </ul>
                <div><router-outlet></router-outlet></div>                
                `
})
export class AppComponent {
  
}