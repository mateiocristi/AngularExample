import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PacientService } from 'src/app/service/pacient.service';

@Component({
  selector: 'app-edit-pacient',
  templateUrl: './edit-pacient.component.html',
  styleUrls: ['./edit-pacient.component.css']
})
export class EditPacientComponent implements OnInit {

  orderNr;
  nume;
  prenume;
  sex;
  data;
  tel;
  CNP;
  pacient;

  constructor(private _Activatedroute: ActivatedRoute, private router: Router, private pacientService: PacientService) { }

  async ngOnInit(): Promise<void> {
    this.orderNr=this._Activatedroute.snapshot.paramMap.get("id");
    this.pacient = await this.pacientService.GetPacient(this.orderNr);
  }

  EditPacient() {  
  
    this.nume = this.nume === undefined ? this.pacient.nume : this.nume;
    this.prenume = this.prenume === undefined ? this.pacient.prenume : this.prenume;
    this.sex = this.sex === undefined ? this.pacient.sex : this.sex;
    this.data = this.data === undefined ? this.pacient.dataNasterii : this.data;
    this.tel = this.tel === undefined ? this.pacient.tel : this.tel;
    this.CNP = this.CNP === undefined ? this.pacient.CNP : this.CNP;
    this.tel = this.tel === undefined ? this.pacient.tel : this.tel;

    
    this.pacientService.EditPacient(this.nume, this.prenume, this.data, this.sex, this.CNP, this.tel, this.orderNr);
    this.router.navigateByUrl('/');
  }

}


