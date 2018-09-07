import { Component, OnInit } from '@angular/core';
import { data } from './data';
declare const $;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() {}
  data:any=[];
  ngOnInit() {
    this.data=data;
    $(function () {
      $('#example').DataTable( {
        dom: 'Bfrtip',
        searching: false,
        buttons: [
          {
              extend:    'copyHtml5',
              text:      '<img src="../assets/icons/copy.png"/>',
              titleAttr: 'Copy',
              className: 'exportButton'
          },
          {
              extend:    'excelHtml5',
              text:      '<img src="../assets/icons/excel.png"/>',
              titleAttr: 'Excel',
              className: 'exportButton'
          },
          {
              extend:    'csvHtml5',
              text:      '<img src="../assets/icons/csv.png"/>',
              titleAttr: 'CSV',
              className: 'exportButton'
          },
          {
              extend:    'pdfHtml5',
              text:      '<img src="../assets/icons/pdf.png"/>',
              titleAttr: 'PDF',
              className: 'exportButton'
          }
      ]
    } );
    });
  }
}
