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
  labelClasses = { post: 'badge badge-primary', get: 'badge badge-success',
  put: 'badge badge-warning', delete: 'badge badge-danger'};
  existingApiList = [{ action: '/api/store', method: 'post'}, { action: '/api/gather', method: 'get'},
  { action: '/api/alter', method: 'put'}, { action: '/api/remove', method: 'delete'}];
  newApiList = [new SampleApi()];
  ngOnInit() {
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
    // button activate
  }

  done(){
    // stepperchange
    // routechange
  }

}
