import { AdminModel } from './AdminModel';

export class SalaryInformationModel{
    constructor(
      public salaryInformationId:Number,
      public updateDate:Date,
      public applyMonth:Number,
      public staffType:Number,
      public fullDaySalary:Number,
      public halfDaySalary:Number,
      public nopay:Number,
      public adminId:AdminModel
    ){}
}