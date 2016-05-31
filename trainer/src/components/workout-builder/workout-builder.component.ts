import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';
import { SubNavComponent} from './navigation/sub-nav.component';
import { ExerciseComponent} from './exercise/exercise.component';
import { ExercisesComponent} from './exercises/exercises.component';
import { WorkoutComponent} from './workout/workout.component';
import { WorkoutsComponent} from './workouts/workouts.component';

@Component({
    template: `<div class="navbar navbar-default navbar-fixed-top second-top-nav">
                  <sub-nav></sub-nav>
               </div>
               <div class="container body-content app-container">
                  <router-outlet></router-outlet>
               </div>`,
    directives: [ROUTER_DIRECTIVES, SubNavComponent]
})

@Routes([

    {path:'/', component: WorkoutsComponent},// this is what works now but it does not add "workouts" to the navigation path
    {path:'/workouts', component: WorkoutsComponent}, //useAsDefault: true} coming soon per https://angular.io/docs/ts/latest/guide/router.html
    {path:'/workout/new',  component: WorkoutComponent },
    {path:'/workout/:id', component: WorkoutComponent },
    {path:'/exercises', component: ExercisesComponent},
    {path:'/exercise/new', component: ExerciseComponent },
    {path:'/exercise/:id', component: ExerciseComponent }
])

export class WorkoutBuilderComponent{
}