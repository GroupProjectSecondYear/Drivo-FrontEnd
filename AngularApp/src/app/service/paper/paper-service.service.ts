import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { PaperModel } from '../../ClassModel/PaperModel';
import { API_URL } from '../../app.constants';


/*import { StudentPackageAddComponent,StudentPackage } from '../../student/student-package-add/student-package-add.component';
import { PackageModel } from '../../ClassModel/PackageModel';
import { CourseFee } from '../../ClassModel/CourseFeeModel';
import { PayPal } from '../../student/student-payment/student-payment.component';
import { ExamList } from '../../adminStaff/admin-staff-student-dash-board/admin-staff-student-dash-board.component';
*/


@Injectable({
  providedIn: 'root'
})
export class PaperServiceService {

  constructor(
    private http: HttpClient,
  ) { }

  //get paper List
  paperList() {
    return this.http.get<PaperModel[]>(`${API_URL}/papers`);
  }

  //Get Specific paper Details using paperID
  getPaperbyID(paperId) {
    return this.http.get<PaperModel>(`${API_URL}/paper/${paperId}`);
  }

  //add new paper
  addPaper(paper: PaperModel, answers) {
    console.log("In paper Service add meth");
    console.log(paper);
    for (var i = 0; i < paper.no_of_questions; i++) {
      for (var j = 0; j < paper.no_of_answers; j++) {
        //console.log(paper.no_of_answers);
        console.log(answers[i][j]);
      }
    }
    console.log(paper.no_of_questions);
    return this.http.post<PaperModel>(`${API_URL}/paper/add/${answers}`, paper);
  }

  deletePaper(paperId) {
    console.log("In paper Service delete meth");
    console.log(paperId);
    return this.http.delete<any>(`${API_URL}/paper/delete/${paperId}`);
  }


  //Update Paper Data
  updatePaper(paper: PaperModel) {
    return this.http.put<PaperModel>(`${API_URL}/paper/update`, paper);
  }
  /*//register the new student
  studentRegister(student:StudentModel){
    console.log(student);
    return this.http.post<StudentModel>(`${API_URL}/student/register`,student);
    //console.log(user);
  }


  //getStudent following package's Id(Result is integer list)
  studentPackagesId(id:Number){
    return this.http.get<[]>(`${API_URL}/student/package/${id}`);
  }

  //getStudent following package's(result is packageModel(list))
  studentPackages(id:Number){
    return this.http.get<PackageModel[]>(`${API_URL}/student/package/list/${id}`)
  }


  //insert student package details
  studentPackegeAdd(selectedPackage,id){
    return this.http.post<any>(`${API_URL}/student/package/${id}`,selectedPackage);
  }

  //delete student package details
  studentPackegeDelete(stuId,pacId){
    return this.http.delete<any>(`${API_URL}/student/package/${stuId}/${pacId}`);
  }

  //get student CourseFee Details
  studentCourseFees(stuId,pacId){
    return this.http.get<[]>(`${API_URL}/student/coursefees/${stuId}/${pacId}`);
  }

  // Add Course Fees
  studentCourseFeeAdd(courseFee:CourseFee,studentPackageId,packageId){
    
    console.log(courseFee+" package Id:"+studentPackageId)
     return this.http.post<any>(`${API_URL}/student/coursefee/${studentPackageId}/${packageId}`,courseFee);
  }

  

  //Update Student Data
  studentUpdate(student:StudentModel){
    return this.http.put<StudentModel>(`${API_URL}/student/update`,student);
  }

  //delete Student Data
  studentDelete(stuId){
    return this.http.delete<any>(`${API_URL}/student/${stuId}`);
  }

  //get StudentId
  getStudentId(userId){
    return this.http.get<Number>(`${API_URL}/student/id/${userId}`);
  }

  //paypal
  makePayment(sum) {
    return this.http.post<PayPal>(`${API_URL}/paypal/make/payment/?sum=`+sum,{});
  }

  studentTrialList(date){
    return this.http.get<ExamList[]>(`${API_URL}/student/trial/list?date=`+date);
  }

  studentExamList(date){
    return this.http.get<ExamList[]>(`${API_URL}/student/exam/list?date=`+date);
  }

  //written Exam Data
  studentWrittenExamData(){
    return this.http.get<[]>(`${API_URL}/student/writtenexam/result`);
  }

  submitWrittenExamResult(date,countPass,countFail){
    return this.http.post<any>(`${API_URL}/student/writtenexam/result?date=`+date+"&countPass="+countPass+"&countFail="+countFail,{});
  }

  submitTrialExamResult(date,countPass,countFail){
    return this.http.post<any>(`${API_URL}/student/trialexam/result?date=`+date+"&countPass="+countPass+"&countFail="+countFail,{});
  }
*/

}
