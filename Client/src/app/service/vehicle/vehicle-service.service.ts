import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VehicleModel } from '../../ClassModel/VehicleModel';
import { API_URL } from '../../app.constants';
import { InsurancePaymentModel } from '../../ClassModel/InsurancePaymentModel';
import { FuelPaymentModel } from '../../ClassModel/FuelPaymentModel';
import { VehicleCategoryModel } from '../../ClassModel/MapObject/VehicleCategory';

@Injectable({
  providedIn: 'root'
})
export class VehicleServiceService {

  constructor(
    private http :HttpClient
  ) { }

  // getVehicleList(status:Number){
  //   return this.http.get<VehicleModel[]>(`${API_URL}/vehicles/${status}`);
  // }

   // register the new vehicle
   VehicleAdd(vehicle:VehicleModel){
    console.log(vehicle);
    console.log("in vehicle service-service after adding");
    return this.http.post<VehicleModel>(`${API_URL}/vehicle/add`,vehicle);
  }

  //get VehicleList
  vehicleList(){
    console.log("vhcle list service");
      return this.http.get<VehicleModel[]>(`${API_URL}/vehicles`);  
  }

  getVehicleCategoryList(){
    console.log("vhcle list service getVehicleCategoryList");
      return this.http.get<VehicleCategoryModel[]>(`${API_URL}/vehicles/vehiclecategory`);  
  }


  addVehicleCategory(vehicleCategory:VehicleCategoryModel){
    return this.http.post<VehicleCategoryModel>(`${API_URL}/vehicles/vehiclecategory`,vehicleCategory);  
  }

  
  deleteVehicleCategory(vehicleCategoryID){
    return this.http.delete<Number>(`${API_URL}/vehicles/vehiclecategory/${vehicleCategoryID}`);
  }


  getVehicleInsurancePaymentDetails(vehicleId:Number){
    return this.http.get<InsurancePaymentModel[]>(`${API_URL}/vehicle/insurance/${vehicleId}`);
  }

  addInsurancePayment(vehicleId:Number,insurance:InsurancePaymentModel){
    return this.http.post<any>(`${API_URL}/vehicle/insurance/${vehicleId}`,insurance);
  }

  getFuelData(year:number){
    return this.http.get<FuelPaymentModel[]>(`${API_URL}/vehicle/fuel/${year}`);
  }

  addVehicleFuelData(userId:Number,fuelData:FuelPaymentModel){
    console.log(fuelData)
    return this.http.post<any>(`${API_URL}/vehicle/fuel/${userId}`,fuelData);
  }
}
