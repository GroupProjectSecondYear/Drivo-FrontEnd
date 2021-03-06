import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../app.constants';
import { TimeTableDataList } from '../../ClassModel/MapObject/TimeTableDataList';
import { LessonAssingStudentMap } from '../../ClassModel/MapObject/LessonAssignStudentMap';
import { StudentPractricalChartDataMap } from '../../ClassModel/MapObject/StudentPractricalChartDataMap';
import { InstructorModel } from '../../ClassModel/InstructorModel';

@Injectable({
  providedIn: 'root'
})
export class InstructorServiceService {

  constructor(
    private http:HttpClient
  ) { }

  getInstructorLesson(userId){
    return this.http.get<TimeTableDataList[]>(`${API_URL}/instructor/lesson/${userId}`);
  }

  getAssignStudent(userId,lessonId){
    return this.http.get<LessonAssingStudentMap[]>(`${API_URL}/instructor/assignstudent/${userId}/${lessonId}`);
  }

  getLessonDate(userId,lessonId){
    return this.http.get<Date>(`${API_URL}/instructor/lesson/date/${userId}/${lessonId}`);
  }

  markStudentLesson(studentLessonId,mark){
    return this.http.post<any>(`${API_URL}/instructor/student/lesson/mark/${studentLessonId}/${mark}`,{});
  }

  getPractricalLessonChartStudentData(studentLessonId){
    return this.http.get<StudentPractricalChartDataMap>(`${API_URL}/instructor/student/practrical/lesson/${studentLessonId}`);
  }

  //get Instructor List
  instructorList(){
    return this.http.get<InstructorModel[]>(`${API_URL}/instructors`);
  }

  instructorList1(status){
    return this.http.get<InstructorModel[]>(`${API_URL}/instructors/${status}`);
  }

 //Get Specific Instructor Details
 getInstructorbyID(instructorId){
  return this.http.get<InstructorModel>(`${API_URL}/instructor/${instructorId}`);
 }

 //Update Instructor Data
 updateInstructor(instructor: InstructorModel) {
  console.log(instructor);
  return this.http.put<number>(`${API_URL}/instructor/update`, instructor);
}

//Register Instructor
instructorRegister(instructor: InstructorModel) {
  return this.http.post<number>(`${API_URL}/instructor/register`, instructor);
}

//Get Specific Instructor Details using NIC no
getInstructorbyEmail(email) {
  console.log("In service get Instructor");
  return this.http.get<InstructorModel>(`${API_URL}/instructor/getbyEmail/${email}`);
}

//Deactivate Instructor
instructorDeactivate(instructorId) {
  console.log(instructorId + "insDeactv Servc");
  return this.http.put<number>(`${API_URL}/instructor/deactivate/${instructorId}`, {});
}

//activate Instructor accout
activateInstructorAccount(instructorId) {
  console.log("Ins Activation");
  return this.http.put<Number>(`${API_URL}/instructor/activate/account/${instructorId}`, {});
}

//check Salary Payments
checkInstructorSalaryPayments(instructorId) {
  console.log("Ins Salary Payment");
  return this.http.get<Number>(`${API_URL}/instructor/checkSalaryPayments/${instructorId}`);
}

//Delete Instructor
instructorDelete(instructorId) {
  console.log(instructorId + "insDelete Servc");
  return this.http.put<Number>(`${API_URL}/instructor/delete/${instructorId}`, {});
}

//check instructors assigned up coming lessons
getInstructorAssignedUpcomingLessons(instructorId) {
  console.log("Ins lessons-Ins service");
  return this.http.get<Number>(`${API_URL}/instructor/assignedUpComingLessons/${instructorId}`);
}

//check whether any payments are done to instructor
checkInstructorSalaryDetails(instructorId) {
  console.log("Ins lessons-Ins service check bfr delete");
  return this.http.get<Number>(`${API_URL}/instructor/checkInstructorSalaryDetails/${instructorId}`);

}

getInstructorbyUserId(userId){
  return this.http.get<Number>(`${API_URL}/instructor/getbyUser/${userId}`);
}

}
