import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {Child1Component} from './child1/child1.component';
import {Child2Component} from './child2/child2.component';
import {Child3Component} from './child3/child3.component';
import {Child4Component} from './child4/child4.component';
import {Child5Component} from './child5/child5.component';
import {NotfoundComponent} from './notfound/notfound.component';

const routes: Routes = [
  {path: '', redirectTo: 'child1', pathMatch: 'full'},
  {path: 'child1', component: Child1Component},
  {path: 'child2', component: Child2Component},
  {path: 'child3', component: Child3Component},
  {path: 'child4', component: Child4Component},
  {path: 'child5', component: Child5Component},
];

@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component,
    Child3Component,
    Child4Component,
    Child5Component,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
