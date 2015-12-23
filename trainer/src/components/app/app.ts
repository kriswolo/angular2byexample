import {Component} from 'angular2/core';
import {WorkoutRunner} from '../workout-runner/workout-runner';
import {Start} from '../workout-runner/start';
import {Finish} from '../workout-runner/finish';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
@Component({
  selector: 'trainer-app',
  directives: [ROUTER_DIRECTIVES],
  template: `<div class="navbar navbar-default navbar-fixed-top top-navbar">
              <div class="container app-container">
                <div class="navbar-header">
                  <h1>7 Minute Workout</h1>
                </div>
              </div>
            </div>
            <div class="container body-content app-container">
              <router-outlet></router-outlet>
            </div>`
})
@RouteConfig([
  { path: '/start', name: 'Start', component: Start, useAsDefault: true },
  { path: '/workout', name: 'Workout', component: WorkoutRunner },
  { path: '/finish', name: 'Finish', component: Finish }
])
export class TrainerApp {
}
