import { Component, OnInit } from '@angular/core';

import {CrudService} from '../crud/crud.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  employe:any;
  constructor(public crudservice:CrudService) { }

  ngOnInit() {
    this.crudservice.get_AllNotes().subscribe(data => {

      this.employe = data.map(e => {
        return {
          id: e.payload.doc.id,
          isedit: false,
          notetitle: e.payload.doc.data()['notetitle'],
          note: e.payload.doc.data()['note'],
        };
      })
      console.log(this.employe);

    });
  }

}
