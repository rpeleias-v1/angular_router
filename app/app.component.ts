import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
    selector: 'my-app',
    template: `
                <h1>My first Angular 2 app</h1>
                <div><router-outlet></router-outlet></div>
                
                `
})
export class AppComponent {

}