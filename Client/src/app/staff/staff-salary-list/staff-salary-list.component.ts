import { Component, OnInit } from '@angular/core';
import { SalaryModel } from '../../ClassModel/SalaryModel';
import { StaffServiceService } from '../../service/StaffService/staff-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpError } from '../../Shared/httpError/HttpError';
import { Router } from '@angular/router';
import { UserValidation } from '../../Shared/validation/user-validation/user-validation';


@Component({
  selector: 'app-staff-salary-list',
  templateUrl: './staff-salary-list.component.html',
  styleUrls: ['./staff-salary-list.component.scss']
})
export class StaffSalaryListComponent implements OnInit {

  monthNames = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"];
  selectMonth:number;
  currentMonth:number;
  
  
  years = [];
  selectYear:number;
  currentYear:number;

  staffSalaryList:SalaryModel[]=[];
  
  
  errorMessage:String;

  validation:UserValidation = new UserValidation();

  //Filter Option Implement
  filteredStaffSalaryList: SalaryModel[] = [];
  private _searchTerm:string;
  get searchTerm(): string{
    return this._searchTerm;
  }
  set searchTerm(value:string){
    this._searchTerm=value;
    this.filteredStaffSalaryList = this.filterSalary(value);
  }

  filterSalary(searchString:string){
     if(this.validation.isDigitContain(searchString)){
      return this.staffSalaryList.filter(salary => 
        salary.staffId.userId.nic.toLocaleLowerCase().indexOf(searchString.toLocaleLowerCase()) !== -1) ;
     }
     return this.staffSalaryList.filter(salary => 
        salary.staffId.userId.firstName.toLocaleLowerCase().indexOf(searchString.toLocaleLowerCase()) !== -1 || salary.staffId.userId.lastName.toLocaleLowerCase().indexOf(searchString.toLocaleLowerCase()) !== -1) ;
  }
  //Finish filter option implementation

  constructor(
    private staffService : StaffServiceService,
    private router : Router
  ) { }

  ngOnInit() {
    this.getYears();
    this.getCurrentMonthAndYear();
    this.getStaffSalaryDetails();
  }

  getYears(){
    this.years = this.staffService.getYears();
  }
  

  getStaffSalaryDetails(){
    this.staffService.getStaffSalaryDetails(this.selectMonth+1,this.selectYear).subscribe(
      response => {
        this.staffSalaryList=response;
        this.filteredStaffSalaryList=response;
      },
      error => {
        console.log(error);
        this.handleErrorResponse(error);
      }
    );
  }

  getCurrentMonthAndYear(){
    var date = new Date(); 
    this.currentMonth=date.getMonth();
    this.selectMonth =this.currentMonth; //set current month as default selection
    
    this.currentYear=date.getFullYear();
    this.selectYear=this.currentYear;
  }

  selectMonths(index:number){
    this.errorMessage="";
    if( (this.selectYear==this.selectYear && index<=this.currentMonth) || (this.selectYear<this.currentYear)){
      this.selectMonth=index;
      this.getStaffSalaryDetails();
    }else{
      this.errorMessage="Cannot select future months";
    }  
  }

  selectYears(index:number){
    this.selectYear=this.years[index];
    if(this.selectYear==this.currentYear){
      this.selectMonth=this.currentMonth;
    }
    this.getStaffSalaryDetails();   
  }

  staffSalaryPay(staffId:Number){
    this.router.navigate(['staff-salary-pay',staffId,this.selectMonth+1,this.selectYear]);
  }

  closeError(){
    this.errorMessage="";
  }

  handleErrorResponse(error: HttpErrorResponse) {
    let httpError = new HttpError();
    httpError.ErrorResponse(error);
  }

}
