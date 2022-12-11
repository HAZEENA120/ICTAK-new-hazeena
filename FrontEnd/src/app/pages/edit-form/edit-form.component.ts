import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ApiServiceService } from '../services/api-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {

  constructor(private api:ApiServiceService,private router:Router) { }

  ngOnInit(): void {this.getdata();
  }
_id=this.api.myid;

olddata: any=[{ Name: "", Area: "", Institution: "", Hours: "",
Category: ""}];

getdata() {

  this.api.getbyidappr(this._id).subscribe(res => {
    this.olddata = res;
    console.log("incoming olddata from update, get id", this._id);
    this.setoldvalue()
  });
}

updatepostform: any = new FormGroup({
  Name: new FormControl("", [Validators.required, Validators.minLength(1)]),
  Area: new FormControl("", [Validators.required, Validators.minLength(1)]),
  Institution: new FormControl("", [Validators.required, Validators.minLength(1)]),
  Hours: new FormControl("", [Validators.required, Validators.minLength(1)]),
  Category: new FormControl("", [Validators.required, Validators.minLength(1)])
});

setoldvalue() {
  this.updatepostform.setValue({
    
    Name: this.olddata.Name,
    Area: this.olddata.Area,
    Institution: this.olddata.Institution,
    Category: this.olddata.Category,
    Hours: this.olddata.Hours

  })
}

submit() {

  this.api.updateappr(this.updatepostform.value, this._id).subscribe((res) => {
 
    console.log("incoming data from update form ",this.updatepostform.value);
    alert("Data Updated Successfully");
    this.router.navigateByUrl('crud');
    });
}

}
