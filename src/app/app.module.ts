import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPacientComponent } from './components/add-pacient/add-pacient.component';
import { HandlePacientComponent } from './components/handle-pacient/handle-pacient.component';
import { HomeComponent } from './components/home/home.component';
import { EditPacientComponent } from './components/edit-pacient/edit-pacient.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPacientComponent,
    HandlePacientComponent,
    HomeComponent,
    EditPacientComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
