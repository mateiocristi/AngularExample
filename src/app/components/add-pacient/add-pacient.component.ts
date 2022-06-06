import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PacientService } from 'src/app/service/pacient.service';

@Component({
  selector: 'app-add-pacient',
  templateUrl: './add-pacient.component.html',
  styleUrls: ['./add-pacient.component.css'],
  //providers: [PacientService]
})
export class AddPacientComponent implements OnInit {
  orderId;
  nume;
  prenume;
  sex;
  data;
  tel;
  CNP;

  constructor(private pacientService: PacientService, private router: Router) { }

  ngOnInit(): void {  
  }

  AddPacient() {
    
    this.pacientService.AddNewPacient(this.nume, this.prenume, this.data, this.sex, this.CNP, this.tel);
    this.router.navigateByUrl('/');
  }

}
