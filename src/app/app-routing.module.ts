import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPacientComponent } from './components/add-pacient/add-pacient.component';
import { EditPacientComponent } from './components/edit-pacient/edit-pacient.component';
import { HandlePacientComponent } from './components/handle-pacient/handle-pacient.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'add-pacient', component: AddPacientComponent},
  { path: 'edit-pacient/:id', component: EditPacientComponent},
  { path: 'proceed/:id', component: HandlePacientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
