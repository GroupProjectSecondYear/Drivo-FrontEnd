import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../app.constants';
import { YearUpdateModel } from '../../ClassModel/YearUpdateModel';
import { PackagePaymentDataMap } from '../../ClassModel/MapObject/PackagePaymentDataMap';
import { OutComeDataMap } from '../../ClassModel/MapObject/OutComeDataMap';
import { ProfitDataMap } from '../../ClassModel/MapObject/ProfitDataMap';
import { YearlyIncomeDataMap } from '../../ClassModel/MapObject/YearlyIncomeDataMap';
import { YearlyOutcomeDataMap } from '../../ClassModel/MapObject/YearlyOutcomeDataMap';
import { YearlyProfitDataMap } from '../../ClassModel/MapObject/YearlyProfitDataMap';

@Injectable({
  providedIn: 'root'
})
export class ReportServiceService {

  constructor(
    private http :HttpClient
  ) { }

  getMonthlyProfit(year:number){
    return this.http.get<[]>(`${API_URL}/month/profit/${year}`);
  }

  getMonthlySalaryExpenses(year:number){
    return this.http.get<[]>(`${API_URL}/salary/month/payment/${year}`);
  }

  getFuelExpenses(year:number){
    return this.http.get<[]>(`${API_URL}/fuel/month/payment/${year}`);
  }

  getInsuranceExpenses(year:number){
    return this.http.get<[]>(`${API_URL}/insurance/month/payment/${year}`);
  }

  getVehicleMaintainanceExpenses(year:number){
    return this.http.get<[]>(`${API_URL}/vehicle/maintainance/month/payment/${year}`);
  }

  getIncome(year:number){
    console.log(year)
    return this.http.get<[]>(`${API_URL}/student/month/payment/${year}`);
  }

  getPackagePaymentMonthly(year){
    return this.http.get<[[PackagePaymentDataMap]]>(`${API_URL}/report/package/month/payment/${year}`);
  }

  getOutComeMonthly(year){
    return this.http.get<[OutComeDataMap]>(`${API_URL}/report/outcome/${year}`);
  }

  getProfitMonthly(year){
     return this.http.get<[ProfitDataMap]>(`${API_URL}/report/profit/${year}`);
  }

  getYearlyIncome(){
    return this.http.get<[YearlyIncomeDataMap]>(`${API_URL}/report/year/income`);
  }

  getYearlyOutcome(){
    return this.http.get<[YearlyOutcomeDataMap]>(`${API_URL}/report/year/outcome`);
  }

  getYearlyProfit(){
    return this.http.get<[YearlyProfitDataMap]>(`${API_URL}/report/year/profit`);
  }

  getYearList(){
    return this.http.get<[]>(`${API_URL}/years`);
  }
}
