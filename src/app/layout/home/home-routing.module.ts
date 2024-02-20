import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from 'src/app/layout/home/business/table/table.component';
import { ListComponent } from './business/list/list.component';
import { LittleTableComponent } from './business/littleTable/littleTable.component';
import { ViewComponent } from './business/view/view.component';
import { HomeComponent } from './home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'table',
        component: TableComponent,
      },
      {
        path: 'list',
        component: ListComponent,
      },
      {
        path: 'view',
        component: ViewComponent,
      },
      {
        path: 'littleTable',
        component: LittleTableComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
