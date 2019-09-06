import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService} from '../../service/user/user-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { StudentServiceService } from '../../service/student/student-service.service';
import { UserModel } from '../../ClassModel/UserModel';
import { StudentModel } from '../../ClassModel/StudentModel';
import { HttpError } from '../../Shared/httpError/HttpError';
import { UserValidation } from '../../Shared/validation/user-validation/user-validation';


@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.scss']
})
export class StudentAddComponent implements OnInit {

  //form variables
  name:String="";
  nic:String="";
  tel:String="";
  address:String="";
  email:String="";
  password:String="";
  examDate:Date=null;
  trialDate:Date;

  //form error messages variables
  errorName;
  errorNic;
  errorTel;
  errorAddress;
  errorEmail;
  errorPassword;
  errorExamDate;

  errorMessage:String;
  regexp:any;//Regular Expression for NIC
  test:boolean;//Regular exprssion result

  //idate:Date;
  
  //user Validation Instance
  userValidation = new UserValidation();

  constructor(
   private router:Router,
   private userService:UserServiceService,
   private studentService:StudentServiceService
  ) { }

  ngOnInit() {
    
  }

  //Student Registration Funtion
  registerStudent(){
    
    this.errorName="";
    this.errorNic="";
    this.errorTel="";
    this.errorEmail="";
    this.errorPassword="";
    this.errorExamDate="";

    //validate name
    if(this.name===""){
      this.errorName="Name is mandatory";
    }

    //validate NIC
    if(this.nic===""){
      this.errorNic="NIC number is mandatory ";
    }else if( !this.userValidation.isValidNicNumber(this.nic) ){
      this.errorNic="Enter Valid NIC Number";
    }

    //Valid Number
    if(this.tel===""){
      this.errorTel="Telephone number is mandatory";
    }else if( !this.userValidation.isValidTelNumber(this.tel) ){
      this.errorTel="Enter Valid Telephone Number ";
    }

    //valid address
    if( this.address === "" ){
      this.errorAddress="Address is mandatory ";
    }

    //valid email
    if( this.email === "" ){
      this.errorEmail="Email is mandatory ";
    }else if( !this.userValidation.isValidEmail(this.email) ){
       this.errorEmail="Enter Valid Email Address";
    }

    //password
    if( this.password === ""){
      this.errorPassword="Password is mandatory";
    }  

    //valid Exam Date
    if( this.examDate === null ){
      this.errorExamDate="Exam Date is mandatory";
    }

    //valid Trial Date
    // if(!this.isDateFuture(this.trialDate)){
    //   this.errorMessage+="Enter Valid Trial Date(future) / "
    // }else if(this.examDate>this.trialDate){
    //   this.errorMessage+="Enter Correct Exam date and Trial date / "
    // }


    //Save to the DB
    if(this.errorMessage==""){
    
      //work with backend service

      //1)Save User relevant Data
      this.userService.userRegister(new UserModel(-1,this.email,this.password,new Date(),1,5)).subscribe(
        response => {
          var userId=response.userId
          console.log(userId);

          //Save Student relevant Data
          this.studentService.studentRegister(new StudentModel(-1,this.name,this.tel,this.nic,this.examDate,this.trialDate,this.address,response)).subscribe(
            response => {
              console.log(response);
              this.router.navigate(['student-list'])},
            error => {
              //If it's error should delete user record from the db
              this.userService.userDelete(userId).subscribe(
                response => {console.log("user delete success")},
                error => {console.log("User delete not success")}

              )
              console.log(error);
              this.handleErrorResponse(error);
            }
          )

        },
        error => this.handleErrorResponse(error)
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