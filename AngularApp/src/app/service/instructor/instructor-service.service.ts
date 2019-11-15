import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../app.constants';
import { TimeTableDataList } from '../../ClassModel/MapObject/TimeTableDataList';
import { InstructorModel } from '../../ClassModel/InstructorModel';
import { LessonAssingStudentMap } from '../../ClassModel/MapObject/LessonAssignStudentMap';
import { StudentPractricalChartDataMap } from '../../ClassModel/MapObject/StudentPractricalChartDataMap';

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
      console.log("ins serv ts");
      return this.http.get<InstructorModel[]>(`${API_URL}/instructors`);
  }
   //Get Specific Instructor Details
  getInstructorbyID(instructorId){
    console.log("In service get Instructor");
    return this.http.get<InstructorModel>(`${API_URL}/instructor/${instructorId}`);

  }
}