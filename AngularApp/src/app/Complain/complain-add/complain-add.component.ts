import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StaffServiceService} from '../../service/StaffService/staff-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ComplainServiceService } from '../../service/complain/complain-service.service';
import { ComplainModel } from '../../ClassModel/ComplainModel';
import { HttpError } from '../../Shared/httpError/HttpError';
import {formatDate} from '@angular/common';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-complain-add',
  templateUrl: './complain-add.component.html',
  styleUrls: ['./complain-add.component.scss']
})

export class ComplainAddComponent implements OnInit {

  //form variables
  title:String="";
  complain:String="";
  

  //form error messages variables
  errorTitle;
  errorComplain;
  

  errorMessage:String;
  //regexp:any;//Regular Expression for NIC
  userId;
  Staff; 
  StaffId;
  Date;
  View;
  Reply;
  

  constructor(
   private router:Router,
   private StaffService:StaffServiceService, 
   private complainService:ComplainServiceService
  ) { }

  ngOnInit() {
    console.log("In Complain add comTs");
    this.userId=sessionStorage.getItem("userId"); 
    this.setStaffAndStaffId(); 
  }

setStaffAndStaffId(){ 
  this.StaffService.getStaffData(this.userId).subscribe(
    response => {
        this.Staff=response;
        this.StaffId=response.staffId;
        console.log("in sub");
        console.log(this.StaffId);
        console.log("p0");
    },
    error =>{
      console.log(error);
      this.handleErrorResponse(error);
      
    }
  )
}



  //Save the Video
  addComplain(){
    
    console.log("In addcomplain method complainaddcomts");
    this.errorComplain="";
    
    
    var datePipe = new DatePipe('en-US');
    this.Date = new Date(); 



    //validate title  
    if(this.title===""){
      this.errorTitle="Title is mandatory";
    }

    //validate url 
   /* if(this.url===""){
      this.errorUrl="URL is mandatory ";
    }*/
    
    //Save to the DB
    if(this.errorMessage==null){  
      console.log("1 complainaddcomts");  
      //work with backend service
          //Save Video relevant Data
                                                            
          this.complainService.saveComplain(new ComplainModel(-1,this.title,this.complain,this.View,this.Date,this.Reply,this.StaffId)).subscribe(
            response => {
              console.log(response);
              this.router.navigate(['complain-list'])}, 
            error => {
              //If some error occurs it is handled using handleErrorResponse method
              console.log(error);
              this.handleErrorResponse(error);
            }
          ) 
      
    }

  }


  closeError(){
    this.errorMessage="";
  }

  handleErrorResponse(error: HttpErrorResponse) {
    this.errorMessage="There is a problem with the service. please try again later."; 
    let httpError = new HttpError();
    httpError.ErrorResponse(error);
  };

}