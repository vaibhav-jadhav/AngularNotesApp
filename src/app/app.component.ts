import { Component } from '@angular/core';
import {CrudService} from './crud/crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

employee: any;
employeeName:string;
employeeAge:number;
employeeAddress:string;
message:string;

notetitle:string;
note:string;



  constructor(public crudservice:CrudService){}

ngOnInit() {
    this.crudservice.get_AllNotes().subscribe(data => {

      this.employee = data.map(e => {
        return {
          id: e.payload.doc.id,
          isedit: false,
          name: e.payload.doc.data()['name'],
          age: e.payload.doc.data()['age'],
          address: e.payload.doc.data()['address'],
        };
      })
      console.log(this.employee);

    });
  }

  CreateRecord()
  {
    let Record = {};
    Record['notetitle'] = this.notetitle;
    Record['note'] = this.note;

    this.crudservice.newNote(Record).then(res => 
      {

        this.notetitle = "";
        this.note ="";
        console.log(res);
        this.message = "new note save Done";
    }).catch(error => {
      console.log(error);
    });
    
  }

  EditRecord(Record)
  {
   

  }

  Updatarecord(recorddata)
  {
    
  }

  Deleteemployee(record_id)
  {
    // this.crudservice.delete_employee(record_id);
  }


}