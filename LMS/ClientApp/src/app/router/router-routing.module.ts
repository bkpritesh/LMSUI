import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from '../container/default-layout/default-layout.component';
import { DashboardComponent } from '../container/dashboard/dashboard.component';

const routes: Routes = [
  //{ path: '', component: HomeComponent, pathMatch: 'full' },
  //{
  //  path: 'dash',
  //  redirectTo: 'dashboard',
  //  pathMatch: 'full'
  //},
  {
    path: 'layout', 
    component: DefaultLayoutComponent,
    children: [
      {
        path: 'dashborad',
        component: DashboardComponent,
      },
    ]
  },

  //{ path: 'counter', component: CounterComponent },
  //{ path: 'fetch-data', component: FetchDataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouterRoutingModule { }
