import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { PacientService, Pacient } from 'src/app/service/pacient.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  title = 'PacientService';

  constructor(private pacientService: PacientService, private router: Router){}

  pacients: Pacient[] = [];

  ngOnInit(): void {
    console.log('started');
    this.pacients = this.pacientService.pacients;
  }

  handleAddButton() {
    this.router.navigateByUrl('/add-pacient');
  }

  handleProceedButton(e) {
    
    this.router.navigateByUrl('/proceed/' + e.target.id);
  }

  handleEditButton(e) {
    this.router.navigateByUrl('/edit-pacient/' + e.target.id);
  }

}


