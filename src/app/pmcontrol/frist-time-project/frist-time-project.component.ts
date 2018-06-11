import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frist-time-project',
  templateUrl: './frist-time-project.component.html',
  styleUrls: ['./frist-time-project.component.css']
})
export class FristTimeProjectComponent implements OnInit {
  public rows: any[];
  public products: any[];
  public product01: any[];
  public product02: any[];
  public product03: any[];
  public projectCode: String;
  public saleName: String;
  parts = [
    'Draft',
    'P1',
    'P2',
    'P3',
    'P4'
  ];
  constructor() { }

  ngOnInit() {
    console.log(this.product01);
    this.projectCode = '0306001';
    this.saleName = 'Mr...... ......';
    this.product01 = [
      {
        file: '01001'
      },
      {
        file: '01002'
      },
      {
        file: '01003'
      },
      {
        file: '01004'
      }
    ];

    this.product02 = [
      {
        file: '02001'
      },
      {
        file: '02002'
      },
      {
        file: '02003'
      },
      {
        file: '02004'
      }
    ];

    this.product03 = [
      {
        file: '03001'
      },
      {
        file: '03002'
      },
      {
        file: '03003'
      },
      {
        file: '03004'
      }
    ];

    this.products = [
      {
        name: 'wheels',
        files: this.product01
      },
      {
        name: 'door_left',
        files: this.product02
      },
      {
        name: 'door_right',
        files: this.product03
      }
    ];
    console.log(this.product01);

    this.rows = [{
      projectCode: 32321312312,
      projectType: 'Mass',
      projectProgress: 0,
      projectFile: 'dsadassd',
      deadLine: '22/12/61',
      sale: 'Mr..... ......'
    }];


  }

}
