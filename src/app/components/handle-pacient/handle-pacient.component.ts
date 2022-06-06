import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PacientService } from 'src/app/service/pacient.service';

@Component({
  selector: 'app-handle-pacient',
  templateUrl: './handle-pacient.component.html',
  styleUrls: ['./handle-pacient.component.css']
})
export class HandlePacientComponent implements OnInit {

  orderNr;

  constructor(private router: Router, private pacientService: PacientService, private _Activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.orderNr = this._Activatedroute.snapshot.paramMap.get("id");
  }

  Proceed() {
    this.pacientService.RemovePacient(this.orderNr);
    this.router.navigateByUrl('/')
  }

  Cancel() {
    this.router.navigateByUrl('/')
  }

}
