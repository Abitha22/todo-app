import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TasksListPage } from './tasks-list.page';
import { NewtaskComponent } from './newtask/newtask.component';

const routes: Routes = [
  {
    path: '',
    component: TasksListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TasksListPage, NewtaskComponent]
})
export class TasksListPageModule {}
