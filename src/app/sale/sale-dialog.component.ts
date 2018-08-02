import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SaleService } from '../shared/service/sale.service';
import { CustomerService } from '../shared/service/customer.service';
import { PmService } from '../shared/service/pm.service';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { ProjectService } from '../shared/service/project.service';
@Component({
  selector: 'app-sale-dialog',
  templateUrl: './sale-dialog.component.html',
  styleUrls: ['./sale-dialog.component.css']
})

/**
 * manage about sale dialog insert, edit, delete data
 */
export class SaleDialogComponent implements OnInit {
  /**
   *  variable 'form' use FormGroup for manage form
  */
  public form: FormGroup;
  public formSelectCus: FormGroup;
  public formProject: FormGroup;
  public formScope: FormGroup;
  public formPM: FormGroup;
  public firstFormGroup: FormGroup;
  public secondFormGroup: FormGroup;
  public thirdFormGroup: FormGroup;
  public fourthFormGroup: FormGroup;
  public fifthFormGroup: FormGroup;
  public customer: Object;
  public pmIdSend: Object;
  public project: any;
  public type: String;
  public customerName = '';
  public pmName: String;
  public code: String;
  public scopeStart: Date;
  public scopeEnd: Date;
  public product = [];
  public output = [];
  public typeProject = ['Project Jon', 'Mass', 'Auto Mobile'];
  public oldCustomer = [];
  public customerId = {
    _id: Object,
    customerName: ''
  };
  public pmId = {
    _id: Object,
    pmName: ''
  };
  public oldProject = [];
  public tmpProject: any;
  public pm = [];
  public checkProject = 0;
  public projectCodeUpdate: String;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<SaleDialogComponent>,
    private _formBuilder: FormBuilder,
    private saleService: SaleService,
    private customerService: CustomerService,
    private pmService: PmService,
    private projectService: ProjectService
  ) { }
  /**
   * create from group and set data of sale
  */
  ngOnInit() {
    this.form = this.formBuilder.group({});
    this.formSelectCus = this.formBuilder.group({});
    this.formProject = this.formBuilder.group({});
    this.formPM = this.formBuilder.group({});
    this.formScope = this.formBuilder.group({});
    this.getCustomer();
    this.getPm();
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: [this.type, Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: [this.customerName, Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      firstCtrl: [this.code, Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      secondCtrl: [this.scopeEnd, Validators.required]
    });
    this.fifthFormGroup = this._formBuilder.group({
      secondCtrl: [this.pmName, Validators.required]
    });
  }
  getCustomer() {
    this.customerService.getAllCustomer().subscribe((results) => {
      results.forEach(element => {
        this.oldCustomer.push({
          _id: element._id,
          customerName: element.customerName
        });
      });
    });
  }
  getPm() {
    this.pmService.getAllPm().subscribe((results) => {
      results.forEach(element => {
        this.pm.push({
          _id: element._id,
          pmName: element.pmName
        });
      });
    });
  }

  next() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: [this.type, Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: [this.customerName, Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      firstCtrl: [this.code, Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      secondCtrl: [this.scopeEnd, Validators.required]
    });
    this.fifthFormGroup = this._formBuilder.group({
      secondCtrl: [this.pmName, Validators.required]
    });
  }

  selectProjectType() {
    this.next();
  }

  insertCustomer() {
    this.customerName = this.form.value.customerName;
    this.customer = this.form.value;
    this.next();
  }

  selectCustomer() {
    this.customerName = this.customerId.customerName;
    this.customer = this.customerId._id;
    this.getProjectFromCus();
    this.next();
  }

  selectCustomerJohn() {
    this.customerName = this.customerId.customerName;
    this.customer = this.customerId._id;
    this.next();
  }

  getProjectFromCus() {
    const tmp = this.customer + '';
    if (this.checkProject === 0) {
      this.projectService.getIdProjectFromCus(tmp).subscribe((results) => {
        results.forEach(element => {
          this.oldProject.push(element);
        });
      });
      this.checkProject++;
    }
  }

  selectProjectFromCus() {
    this.code = this.tmpProject.projectCode;
    this.project = this.tmpProject;
    this.next();
  }

  insertProject() {
    this.code = this.formProject.value.code;
    this.project = this.formProject.value;
    this.next();
  }

  addProduct() {
    this.product.push({
      codeProject: this.formProject.value.code,
      codeProduct: this.formProject.value.codeProduct,
      file: this.data.file
    });
    this.show();
  }

  deleteMsg(msg: String) {
    const index: number = this.product.indexOf(msg);
    this.product.splice(index, 1);
  }

  show() {
    this.output = this.product;
  }

  selectPM() {
    this.pmName = this.pmId.pmName;
    this.pmIdSend = this.pmId._id;
    this.next();
  }

  insertScope() {
    this.next();
  }
  /**
   * set value in close() for return
   */
  onClose() {
    this.dialogRef.close(/*sent value to tab-supervision*/);
  }
  /**
   * save value in variable and return
   */
  onSave() {
    if (this.checkProject === 1) {
      const value = {
        oldProjectCode: this.project.projectCode,
        projectCode: this.projectCodeUpdate,
        projectFile: this.project.projectFile,
        projectType: this.type,
        scopeStart: this.scopeStart,
        scopeEnd: this.scopeEnd,
        customer: this.customer,
        pm: this.pmIdSend,
        sale: this.data.sale
      };
      this.dialogRef.close(value);
    } else {
      const value = {
        projectCode: this.code,
        projectFile: this.product,
        projectType: this.type,
        scopeStart: this.scopeStart,
        scopeEnd: this.scopeEnd,
        customer: this.customer,
        pm: this.pmIdSend,
        sale: this.data.sale
      };
      this.dialogRef.close(value);
    }
  }
}
