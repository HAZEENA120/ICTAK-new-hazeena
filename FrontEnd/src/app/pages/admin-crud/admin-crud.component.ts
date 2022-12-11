import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-admin-crud',
  templateUrl: './admin-crud.component.html',
  styleUrls: ['./admin-crud.component.css']
})
export class AdminCrudComponent implements OnInit {

  constructor(private api: ApiServiceService, private router: Router) { }

  ngOnInit(): void {this.getdata();
  }

  approveposts: any = [{
    File: "", Comments: "", References: "", Hours: "",
    Category: "", Institution: "", Area: "", Name: ""
  }];

  getdata() {
    this.api.getallapprove().subscribe(res => {
      this.approveposts = res;
      // console.log("incoming data from booklist getall", this.approveposts);
    });
  }


  approve(_id: any) {
    this.api.postApprd(this.approveposts.value).subscribe(res => {

      // alert("Data saved successfully");

      alert("Data Is Now Approved")
      this.api.deletesAppr(_id).subscribe((res) => {
        this.getdata()
      })

    })
  }

  deletes(_id: any) {

    this.api.deletesAppr(_id).subscribe((res) => {
      // this.approveposts = res;
      // console.log("incoming data from updatecount ", res);
      alert("Data Deleted Successfully");
      this.getdata()
    })
  }

  edit(_id:any){
  this.api.myid=_id;
this.router.navigate(["editreq"])
  }


}
