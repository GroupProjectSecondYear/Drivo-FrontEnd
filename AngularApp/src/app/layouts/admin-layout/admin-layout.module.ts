import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { StaffListComponent } from '../../staff/staff-list/staff-list.component';
import { PackageListComponent } from '../../package/package-list/package-list.component';
import { ReportListComponent } from '../../report/report-list/report-list.component';
import { VehicleListComponent } from '../../vehicle/vehicle-list/vehicle-list.component';
import { StudentListComponent } from '../../student/student-list/student-list.component';
import { StudentAddComponent } from '../../student/student-add/student-add.component';
import { StudentPackageAddComponent } from '../../student/student-package-add/student-package-add.component';
import { StudentPaymentComponent } from '../../student/student-payment/student-payment.component';
import { StudentMoreDetailsComponent } from '../../student/student-more-details/student-more-details.component';
import { AdminStaffStudentDashBoardComponent } from '../../adminStaff/admin-staff-student-dash-board/admin-staff-student-dash-board.component';
import { StudentExamResultAddComponent } from '../../student/student-exam-result-add/student-exam-result-add.component';
import { TimeTableComponent } from '../../timeTable/time-table/time-table.component';
import { LessonAddComponent } from '../../timeTable/lesson-add/lesson-add.component';
import { TimeSlotComponent } from '../../timeTable/time-slot/time-slot.component';
import { PathMapComponent } from '../../timeTable/path-map/path-map.component';
import { LessonUpdateComponent } from '../../timeTable/lesson-update/lesson-update.component';
import { StudentProfileComponent } from '../../profile/student-profile/student-profile.component';
import { TrialLessonBookComponent } from '../../LessonBooking/trial-lesson-book/trial-lesson-book.component';
import { TrialLessonListComponent } from '../../LessonBooking/trial-lesson-list/trial-lesson-list.component';
import { PackageAnalysisComponent } from '../../timeTable/package-analysis/package-analysis.component';
import { InstructorTimeTableComponent } from '../../instructor/instructor-time-table/instructor-time-table.component';
import { LessonAssignStudentComponent } from '../../instructor/lesson-assign-student/lesson-assign-student.component';
import { PractricalLessonChartStudentComponent } from '../../instructor/practrical-lesson-chart-student/practrical-lesson-chart-student.component';
import { StudentPaymentCheckComponent } from '../../student/student-payment-check/student-payment-check.component';
import { TrialLessonDayFeedbackComponent } from '../../LessonBooking/trial-lesson-day-feedback/trial-lesson-day-feedback.component';
import { TrialLessonDayFeedbackChartComponent } from '../../LessonBooking/trial-lesson-day-feedback-chart/trial-lesson-day-feedback-chart.component';
import { StaffSalaryComponent } from '../../staff/staff-salary/staff-salary.component';
import { StudentDeactivateComponent } from '../../student/student-deactivate/student-deactivate.component';
import { PackageAddComponent } from '../../package/package-add/package-add.component';
import { StaffSalaryInformationListComponent } from '../../staff/StaffSalaryInformation/staff-salary-information-list/staff-salary-information-list.component';
import { StaffSalaryInformationAddComponent } from '../../staff/StaffSalaryInformation/staff-salary-information-add/staff-salary-information-add.component';
import { StaffWorkTimeComponent } from '../../staff/StaffWorkTime/staff-work-time/staff-work-time.component';
import { StaffSalaryListComponent } from '../../staff/staff-salary-list/staff-salary-list.component';
import { StaffSalaryPayComponent } from '../../staff/staff-salary-pay/staff-salary-pay.component';
import { PdfListComponent } from '../../pdf/pdf-list/pdf-list.component';
import { PdfMoreDetailsComponent } from '../../pdf/pdf-more-details/pdf-more-details.component';
import { PdfAddComponent } from '../../pdf/pdf-add/pdf-add.component';
import { VideoAddComponent } from '../../video/video-add/video-add.component';
import { VideoListComponent } from '../../video/video-list/video-list.component';
import { VideoMoreDetailsComponent } from '../../video/video-more-details/video-more-details.component';
import { InstructorListComponent } from '../../instructor/instructor-list/instructor-list.component';
import { InstructorAddComponent } from '../../instructor/instructor-add/instructor-add.component';
import { InstructorMoreDetailsComponent } from '../../instructor/instructor-more-details/instructor-more-details.component';
import { InstructorDeactivatedListComponent } from '../../instructor/instructor-deactivated-list/instructor-deactivated-list.component';





@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ChartsModule,
    NgbModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    DashboardComponent,
    AdminStaffStudentDashBoardComponent,
    
    StaffListComponent,
    StaffSalaryComponent,
    StaffSalaryInformationListComponent,
    StaffSalaryInformationAddComponent,
    StaffWorkTimeComponent,
    StaffSalaryListComponent,
    StaffSalaryPayComponent,

    PackageListComponent,
    PackageAddComponent,

    ReportListComponent,
    VehicleListComponent,
 
    
    StudentListComponent,
    StudentAddComponent,
    StudentPackageAddComponent,
    StudentPaymentComponent,
    StudentMoreDetailsComponent,  
    StudentExamResultAddComponent,
    StudentPaymentCheckComponent,
    StudentDeactivateComponent,

    TimeTableComponent,
    LessonAddComponent,
    LessonUpdateComponent,
    TimeSlotComponent,
    PathMapComponent,
    PackageAnalysisComponent,
    
    TrialLessonBookComponent,
    TrialLessonListComponent,
    TrialLessonDayFeedbackComponent,
    TrialLessonDayFeedbackChartComponent,

    StudentProfileComponent,

    InstructorTimeTableComponent,
    LessonAssignStudentComponent,
    PractricalLessonChartStudentComponent,

    PdfListComponent,
    PdfMoreDetailsComponent,
    PdfAddComponent,
    VideoAddComponent,
    VideoListComponent,
    VideoMoreDetailsComponent,
    InstructorListComponent,
    InstructorAddComponent,
    InstructorMoreDetailsComponent,
    InstructorDeactivatedListComponent,
    InstructorMoreDetailsComponent

  ]
})

export class AdminLayoutModule {}
