import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SampleApi } from './apiModel';

@Component({
  selector: 'app-trial',
  templateUrl: './trial.component.html',
  styleUrls: ['./trial.component.css']
})
export class TrialComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar) { }

  panelOpenState = '';
  existingApiList = ['/api/sample', '/api/connect', '/api/trial', '/api/service'];
  sampleApi = {action:'', method:''};
  newApiList = [new SampleApi()];
  ngOnInit() {
  }

  copyClipBoardNotification(value) {
    this._snackBar.open('"'+value+'" copied to clipboard!!!','',{
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: 'style-success',
    });
  }

  addAPI(){
    this.newApiList.push(new SampleApi());
  }

  deleteAPI(index) {
    if(this.newApiList.length > 1) {
      this.newApiList.splice(index,1);
    }
  }

  trackByIdx(index: number, obj: any): any {
    return index;
  }

  nextInExistingService() {
    this._snackBar.open('http://localhost:8082/','',{
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: 'style-success',
    });
    // stepperchange
    // routerchange
  }

  nextInNewService() {
    console.log(this.newApiList);
    // backend hit to generate service
    this._snackBar.open('http://localhost:8081/','',{
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: 'style-success',
    });
    // stepperchange
    // routechange
  }

}
