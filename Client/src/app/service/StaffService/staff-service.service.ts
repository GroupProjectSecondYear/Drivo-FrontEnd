import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SalaryInformationModel } from '../../ClassModel/SalaryInformationModel';
import { API_URL } from '../../app.constants';
import { WorkTimeModel } from '../../ClassModel/WorkTimeModel';
import { SalaryModel } from '../../ClassModel/SalaryModel';
import { StaffWorkDaysDataMap } from '../../ClassModel/MapObject/StaffWorkDaysDataMap';
import { StaffModel } from '../../ClassModel/StaffModel';
import { AttendanceModel } from '../../ClassModel/MapObject/AttendanceModel';
import { LeaveSettingModel } from '../../ClassModel/LeaveSettingModel';

@Injectable({
  providedIn: 'root'
})
export class StaffServiceService {

  constructor(
    private http : HttpClient
  ) { }

  getStaffList(){
    return this.http.get<StaffModel[]>(`${API_URL}/staff`);
  }

  getStaffSalaryInformationList(){
    return this.http.get<SalaryInformationModel[]>(`${API_URL}/staff/salary/information`);
  }

  getStaffSalaryInformation(salaryInformationId:Number){
    return this.http.get<SalaryInformationModel>(`${API_URL}/staff/salary/information/${salaryInformationId}`);
  }

  addStaffSalaryInformation(salaryInformation:SalaryInformationModel){
    return this.http.post<any>(`${API_URL}/staff/salary/information`,salaryInformation);
  }

  updateStaffSalaryInformation(salaryInformation:SalaryInformationModel){
    return this.http.put<any>(`${API_URL}/staff/salary/information`,salaryInformation);
  }

  getStaffRoleSalaryInformation(staffId:Number,year:Number,month:Number){
    return this.http.get<SalaryInformationModel>(`${API_URL}/staff/role/salary/information/${staffId}/${year}/${month}`);
  }

  deleteStaffSalaryInfromation(salaryInformationId:Number){
    return this.http.delete<any>(`${API_URL}/staff/salary/information/${salaryInformationId}`);
  }

  getStaffWorkTime(){
    return this.http.get<WorkTimeModel>(`${API_URL}/staff/work/time`);
  }

  updateStaffWorkTime(updateWorkTime:WorkTimeModel){
    return this.http.put<any>(`${API_URL}/staff/work/time`,updateWorkTime);
  }

  getStaffSalaryDetails(month:number,year:number){
    return this.http.get<SalaryModel[]>(`${API_URL}/staff/salary/${month}/${year}`);
  }

  getStaffSalaryData(staffId:Number,month:number,year:number){
    return this.http.get<SalaryModel>(`${API_URL}/staff/salary/data/${staffId}/${month}/${year}`);
  }

  payStaffSalary(payment:SalaryModel){
    return this.http.put<any>(`${API_URL}/staff/pay/salary`,payment);
  }

  getStaffWorkDays(staffId:Number,month:number,year:number){
    return this.http.get<StaffWorkDaysDataMap>(`${API_URL}/staff/work/days/${staffId}/${month}/${year}`);
  }

  // getStaffAttendance(staffId:Number,month:Number,year:number){
  //   return this.http.get<AttendanceModel[]>(`${API_URL}/staff/attendance/${staffId}/${month}/${year}`);
  // }

  getStaffData(userId:Number){
    return this.http.get<StaffModel>(`${API_URL}/staff/data/${userId}`);
  }

  getStaffLeave(){
    return this.http.get<LeaveSettingModel>(`${API_URL}/staff/leave`);
  }

  updateStaffLeave(leaveSetting:LeaveSettingModel){
    return this.http.put<any>(`${API_URL}/staff/leave`,leaveSetting);
  }

  getYears(){
    let years = [];
    years.push(2019);
    years.push(2020);
    return years;
  }

}
