import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'design_app', class: ''},
    { path: '/staff-list', title: 'Staff List',  icon:'design_bullet-list-67', class: '' },
    { path: '/staff-salary', title: 'Salary',  icon:'design_bullet-list-67', class: '' },
    { path: '/package-list', title: 'Package',  icon:'design_bullet-list-67', class: '' },
    { path: '/vehicle-list', title: 'Vehicle',  icon:'design_bullet-list-67', class: '' },
    { path: '/student-list', title: 'Student',  icon:'design_bullet-list-67', class: '' },
    { path: '/admin-staff-student-dash-board', title: 'Dashboard',  icon:'design_bullet-list-67', class: '' },
    { path: '/time-table', title: 'Time Table',  icon:'design_bullet-list-67', class: '' },
    
    { path: '/student-payment', title: 'Payment',  icon:'business_money-coins', class: '' },
    { path: '/trial-lesson-list/ / ', title: 'Trial Lesson',  icon:'design_bullet-list-67', class: '' },

    { path: '/instructor-time-table', title: 'Time Table',  icon:'design_bullet-list-67', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  admin: any[];//routers link for Admin(role=1)
  adminStaffInstructor: any[];//routers link for AdminStaffInstructor(role=3)
  adminStaffStudent: any[];//routers link for AdminStaffStudent(role=2)
  instructor: any[];//routers link for Instructor(role=4)
  student: any[];//routers link for Student(role=5)

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);

    this.admin=[
      { path: '/dashboard', title: 'Dashboard',  icon: 'design_app', class: ''},
      { path: '/staff-list', title: 'Staff',  icon:'design_bullet-list-67', class: '' },
      { path: '/staff-salary-list', title: 'Salary',  icon:'business_money-coins', class: '' },
      { path: '/student-list', title: 'Student',  icon:'education_hat', class: '' },
      { path: '/vehicle-list', title: 'Vehicle',  icon:'transportation_bus-front-12', class: '' },
      { path: '/package-list', title: 'Package',  icon:'education_agenda-bookmark', class: '' },
      { path: '/report-list', title: 'Report',  icon:'files_single-copy-04', class: '' }
    ];

    this.adminStaffInstructor=[
      { path: '/time-table', title: 'Time Table',  icon:'files_paper', class: '' },
      { path: '/vehicle-list', title: 'Vehicle',  icon:'transportation_bus-front-12', class: '' },
      { path: '/staff-salary', title: 'Salary',  icon:'business_money-coins', class: '' },
      { path: '/instructor-list', title: 'Instructor',  icon:'business_badge', class: '' }
    ];

    this.adminStaffStudent=[
      { path: '/admin-staff-student-dash-board', title: 'Dashboard',  icon:'design_app', class: '' },
      { path: '/student-list', title: 'Student',  icon:'education_hat', class: '' },
      { path: '/staff-salary', title: 'Salary',  icon:'business_money-coins', class: '' },
      { path: '/pdf-list', title: 'Pdf',  icon:'design_bullet-list-67', class: '' },
      { path: '/video-list', title: 'Video',  icon:'design_bullet-list-67', class: '' },
      { path: '/paper-list', title: 'Paper', icon: 'files_paper', class: '' }
    ];

    this.instructor=[
      { path: '/instructor-time-table', title: 'Time Table',  icon:'files_paper', class: '' },
      { path: '/staff-salary', title: 'Salary',  icon:'business_money-coins', class: '' },
    ];

    this.student=[
      { path: '/time-table', title: 'Time Table',  icon:'files_paper', class: '' },
      { path: '/trial-lesson-list/ / ', title: 'Trial Lesson',  icon:'design_bullet-list-67', class: '' },
      { path: '/student-payment/'+sessionStorage.getItem("userId")+'/ ', title: 'Payment',  icon:'business_money-coins', class: '' },
      { path: '/pdf-list-for-students/', title: 'Pdf', icon: 'files_single-copy-04', class: '' },
      { path: '/video-list-for-students', title: 'Video', icon: 'files_single-copy-04', class: '' },
      { path: '/paper-list-for-students/', title: 'Paper', icon: 'files_single-copy-04', class: '' },
    ];
    
  }
  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };

  isAdmin(){
    if(sessionStorage.getItem('userRole')!=null && sessionStorage.getItem('userRole')==='1'){
        return true;
    }
    return false;
  }

  isAdminStaffStudent(){
    if(sessionStorage.getItem('userRole')!=null && sessionStorage.getItem('userRole')==='2'){
        return true;
    }
    return false;
  }

  isAdminStaffInstructor(){
    if(sessionStorage.getItem('userRole')!=null && sessionStorage.getItem('userRole')==='3'){
        return true;
    }
    return false;
  }

  isInstructor(){
    if(sessionStorage.getItem('userRole')!=null && sessionStorage.getItem('userRole')==='4'){
        return true;
    }
    return false;
  }

  isStudent(){
    if(sessionStorage.getItem('userRole')!=null && sessionStorage.getItem('userRole')==='5'){
        return true;
    }
    return false;
  }
}
