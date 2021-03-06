import { Component, OnInit } from '@angular/core';
import { HttpError } from '../../Shared/httpError/HttpError';
import { PaperMarkServiceService } from '../../service/paper-mark/paper-mark-service.service';
import { PaperServiceService } from '../../service/paper/paper-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentPaperModel } from '../../ClassModel/StudentPaperModel';
import { UserValidation } from '../../Shared/validation/user-validation/user-validation';
import { API_URL, WEBSOCKETENDPOINT, WEBSOCKETTOPIC } from '../../app.constants';

@Component({
  selector: 'app-paper-mark-list',
  templateUrl: './paper-mark-list.component.html',
  styleUrls: ['./paper-mark-list.component.scss']
})
export class PaperMarkListComponent implements OnInit {

  errorMessage = "";
  papers: StudentPaperModel[] = [];
  studentId;

  validation: UserValidation = new UserValidation();

  //Filter Option Implement
  filteredPaper: StudentPaperModel[] = [];
  private _searchTerm: string;
  apiUrl = API_URL;
  get searchTerm(): string {
    return this._searchTerm;
  }
  set searchTerm(value: string) {
    this._searchTerm = value;
    this.filteredPaper = this.filterPaper(value);
  }

  //Filtering method
  filterPaper(searchString: string) {
    return this.papers.filter(paper =>
      paper.studentId.userId.firstName.toString().toLocaleLowerCase().indexOf(searchString.toLocaleLowerCase()) !== -1 ||
      paper.paperId.title.toString().toLocaleLowerCase().indexOf(searchString.toLocaleLowerCase()) !== -1 ||
      paper.studentId.userId.lastName.toString().toLocaleLowerCase().indexOf(searchString.toLocaleLowerCase()) !== -1 ||
      paper.date.toString().toLocaleLowerCase().indexOf(searchString.toLocaleLowerCase()) !== -1
      //paper.addedDate.toString().toLocaleLowerCase().indexOf(searchString.toLocaleLowerCase()) !== -1
    );

  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private paperService: PaperServiceService,
    private paperMarksService: PaperMarkServiceService,



  ) { }

  ngOnInit() {
    this.studentId = this.route.snapshot.params['id'];
    if (this.studentId != null) {
        //this.filteredPaper=this.filteredPaper(this.studentId);
    } else
      this.paperList();

  }

  //to get the list of Papers
  paperList() {

    this.paperMarksService.paperMarksList().subscribe(
      response => {
        this.papers = response;
        this.filteredPaper = this.papers;
      //   this.filteredPaper = this.papers.filter(paper =>
      // paper.studentId.userId.firstName.toString().toLocaleLowerCase().indexOf(this.studentId.toLocaleLowerCase()) !== -1 );
      //   console.log(this.papers);
        // }
        // this.handleErrorResponse(this.papers[0].adminStaff==null);
      },
      error => {
        //this.errorMessage=response;
        this.handleErrorResponse(error);
      }
    )
  }
  handleErrorResponse(error) {
    this.errorMessage = error;
    let httpError = new HttpError();
    httpError.ErrorResponse(error);
  }
  closeError() {
    this.errorMessage = "";
  }

}
