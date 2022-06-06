import { Component } from '@angular/core';
import { PacientService } from './service/pacient.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PacientService]
})
export class AppComponent {
  title = 'PacientService';

  constructor(private pacientService: PacientService){}

  // pacients: {name: string, status: string}[] = [];

  // ngOnInit(): void {
  //   this.pacients = this.pacientService.pacients;
  // }

}
