import { Component, OnInit } from '@angular/core';
import { PdfModel } from '../../ClassModel/PdfModel';
import { Router } from '@angular/router';
import { AdminStaffServiceService } from '../../service/adminStaff/admin-staff-service.service';
import { PdfServiceService } from '../../service/pdf/pdf-service.service';
import { FileUploadServiceService } from '../../service/file-upload/file-upload-service.service';
import { DatePipe } from '@angular/common';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpError } from '../../Shared/httpError/HttpError';

@Component({
  selector: 'app-pdf-add',
  templateUrl: './pdf-add.component.html',
  styleUrls: ['./pdf-add.component.scss']
})
export class PdfAddComponent implements OnInit {

 //form variables
 pdfId: Number = -1;
 description: String = "";
 title: String = "";
 adminStaff;
 adminStaffId: Number = -1;
 addedDate: Date = null;
 systemDate: Date = null;
 //addedDate:Date=formatDate(new Date(), 'yyyy/MM/dd', 'en');
 userId;
 savedPdfDetails: PdfModel;

 //form error messages variables
 errorPdfId;
 errorDescription;
 errorTitle;
 errorAdminStaffId;
 errorAddedDate;
 errorSelectedFile;

 errorMessage: String;
 regexp: any;//Regular Expression for NIC
 test: boolean;//Regular exprssion result

 selectedFiles;
 showSpinner = false;
 deletePdfFlag = false;


 constructor(
   private router: Router,
   private adminStaffService: AdminStaffServiceService,
   private pdfService: PdfServiceService,
   private fileUploadService: FileUploadServiceService,

   //private studentService:StudentServiceService
 ) { }

 ngOnInit() {
   console.log("In pdfadd new Compo ts OnIt");
   this.userId = sessionStorage.getItem("userId");
   console.log("UserId in onit PDf Add" + this.userId);
   this.setAdminStaffAndAdminStaffId();

 }

 setAdminStaffAndAdminStaffId() {
   console.log("In pdfadd set AdminStaff ID");
   this.adminStaffService.getAdminStaffFromUserID(this.userId).subscribe(
     response => {
       this.adminStaff = response;
       this.adminStaffId = response.adminStaffId;
       console.log("in sub");
       console.log(this.adminStaffId);
       console.log("p0");
     },
     error => {
       console.log("error getting admin stf id");
       console.log(error);
       this.handleErrorResponse(error);

     }
   )
 }

 addPdf() {
   console.log("In pdfadd method in addnewPdfTs with submit");
   var datePipe = new DatePipe('en-US');
   this.addedDate = new Date();
   this.errorTitle = "";
   this.errorAdminStaffId = "";
   this.errorAddedDate = "";
   this.errorSelectedFile = "";


   //validate Title
   if (this.title === "") {
     console.log("Empty");
     this.errorTitle = "Title  is mandatory ";
   }

   //valid added date
   if (this.addedDate === null) {
     this.errorAddedDate = "Error in getting system Date "; // error message bit changed
   }

   //validate admin staff id
   if (this.adminStaffId === -1) {
     this.errorAdminStaffId = "Error getting Admin Staff Details";  // should take admin staff id from log in user details
   }

   if (this.selectedFiles == null) {
     console.log("Error file");
     this.errorSelectedFile = "PDF file is mandatory";
   }

   if (this.errorAddedDate != "") {
     Swal.fire({
       position: 'center',
       type: 'error',
       text: this.errorAddedDate,
       showConfirmButton: false,
       timer: 1500
     });
   }
   if (this.errorAdminStaffId != "") {
     Swal.fire({
       position: 'center',
       type: 'error',
       text: this.errorAdminStaffId,
       showConfirmButton: false,
       timer: 1500
     });
   }
   if (this.errorSelectedFile != "") {
     Swal.fire({
       position: 'center',
       type: 'error',
       text: this.errorSelectedFile,
       showConfirmButton: false,
       timer: 1500
     });
   }

   if (this.errorTitle == "" && this.errorAddedDate == "" && this.errorAdminStaffId == "" && this.errorSelectedFile == "") {

     this.pdfService.addPdf(new PdfModel(-1, this.title, this.description, this.adminStaff, this.addedDate)).subscribe(
       response => {
         this.savedPdfDetails = response;
         console.log("PDF adding response came");
         console.log(response);
        
         this.fileUploadService.fileUpload(this.selectedFiles.item(0), this.savedPdfDetails.pdfId, 2).subscribe(
           response => {
             console.log("In file uploading");
             if (response == 0) {
               this.errorMessage = "File size should be less than 9MB";
             } else if (response == 1) {
               window.location.reload();
               Swal.fire({
                 position: 'center',
                 type: 'success',
                 text: 'Pdf Saved Successfuly.',
                 showConfirmButton: false,
                 timer: 1500
               });
             } else { //null return
               Swal.fire({
                 position: 'center',
                 type: 'error',
                 title: 'Error saving pdf.',
                 showConfirmButton: false,
                 timer: 1500
               });
               this.deletePdfFlag = true;
             }
             this.showSpinner = false;
             this.selectedFiles = undefined;
           },
           error => { //errors
             this.showSpinner = false;
             this.selectedFiles = undefined;
             Swal.fire({
               position: 'center',
               type: 'error',
               title: 'Error saving pdf.',
               showConfirmButton: false,
               timer: 1500
             });
             this.deletePdfFlag = true;
           }
         );
         if(this.deletePdfFlag==true){
           this.pdfService.deletePdf(this.savedPdfDetails.pdfId).subscribe(
         response => {
         },
         error => {
           Swal.fire({
             position: 'center',
             type: 'error',
             title: 'Please deleted '+this.savedPdfDetails.title+'pdf data',
             showConfirmButton: false,
             timer: 3000
           });
         }
       )
         }
       },
       error => {
         console.log(error);//
         Swal.fire({
           position: 'center',
           type: 'error',
           title: 'Error saving pdf.',
           showConfirmButton: false,
           timer: 1500
         });//
         this.handleErrorResponse(error);
       }
     )
   }
 }

 //upload pdf
 selectFile(event) {
   this.showSpinner = true;
   this.selectedFiles = event.target.files;
 }

 closeError() {
   this.errorMessage = "";
 }

 handleErrorResponse(error: HttpErrorResponse) {
   this.errorMessage = "There is a problem with the service. please try again later.";
   let httpError = new HttpError();
   httpError.ErrorResponse(error);
 };
}
