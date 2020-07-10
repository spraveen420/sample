import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { MatDialog } from '@angular/material/dialog';
import { TrialComponent } from './trial/trial.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(private appService: AppService, public dialog: MatDialog) {}


  detectFiles = ['http://localhost:8080/src/outputtestimage/CarRent.jpg', // ];
   'http://localhost:8080/src/outputtestimage/CarRental.jpg',
   'http://localhost:8080/src/outputtestimage/CarRentals.jpg',
   'http://localhost:8080/src/outputtestimage/CarRents.jpg',
   'http://localhost:8080/src/outputtestimage/s1.jpg',
   'http://localhost:8080/src/outputtestimage/s2.jpg',
   'http://localhost:8080/src/outputtestimage/s3.jpg'];

   disp = Array.from({length: this.detectFiles.length}, () => false );

   math = Math;

  iclass = [[1, 2, 3, 4, 5, 6, 7, 8], // ];
  [1, 2, 3, 4, 5, 6, 7, 8],
  [1, 2, 3, 4, 5, 6, 7, 8],
  [1, 2, 3, 4, 5, 6, 7, 8],
  [1, 2, 3, 4, 5, 6, 7, 8],
  [1, 2, 3, 4, 5, 6, 7, 8],
  [1, 2, 3, 4, 5, 6, 7, 8]];
  percent = [[0.69999999, 0.995, 0.995, 0.995, 0.995, 0.995, 0.995, 0.995], // ];
  [0.995, 0.995, 0.995, 0.995, 0.995, 0.995, 0.995, 0.995],
  [0.995, 0.995, 0.995, 0.995, 0.995, 0.995, 0.995, 0.995],
  [0.995, 0.995, 0.995, 0.995, 0.995, 0.995, 0.995, 0.995],
  [0.995, 0.995, 0.995, 0.995, 0.995, 0.995, 0.995, 0.995],
  [0.995, 0.995, 0.995, 0.995, 0.995, 0.995, 0.995, 0.995],
  [0.995, 0.995, 0.995, 0.995, 0.995, 0.995, 0.995, 0.995]];
  itext = ['', 'Textbox', 'Label', 'Button', 'Dropdown', 'Radio', 'Link', 'Image', 'Checkbox'];

  ngOnInit(): void {

  }

  // openDialog() {
  //   this.dialog.open(TrialComponent);

  // }

}
