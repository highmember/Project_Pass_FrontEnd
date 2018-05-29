import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { P1UpdateDialogComponent, } from './p1-update.dialog.component';
@Component({
    selector: 'app-p1-dialog',
    templateUrl: './p1-dialog.component.html',
    styleUrls: ['./p1-dialog.component.css']
  })
  export class P1DialogComponent implements OnInit {
    public assign: any[];
    /**
     *  variable 'form' use FormGroup for manage form
    */
    public formUpdate: FormGroup;
    public customer: any[];
    public project: any[];
    public type: String;
    public customerName: String;
    public pmName: String;
    public code: String;
    // public doSuccess: Number;
    public file = '-';
    public typeProject = ['Project Jon', 'Mass', 'Auto Mobile'];
    public oldCustomer = ['สุทธิ ใจเย็น', 'สุขุม ว่องไว', 'มานะ ใจสั่น', 'นรากร สงคราม', 'วรชิตร สมควร'];
    public pm = ['นารีรัตน์ สุดใจ', 'วรวุฒิ สมใจ', 'สมพร เดโช', 'อรนงค์ สุดใจ', 'ประสงค์ เงินดี'];
      // deadline:10-05-2018,
    constructor(
      @Inject(MAT_DIALOG_DATA) public data: any,
      private formBuilder: FormBuilder,
      private dialogRef: MatDialogRef<P1DialogComponent>,
      private _formBuilder: FormBuilder
    ) { }
    /**
     * create from group and set data of sale
    */
    ngOnInit() {
        this.formUpdate = this.formBuilder.group({});
        this.assign = [{
            goalTarget: 20,
            doSuccess: 10,
            assignProgress: 0,
            // de line:10-05-2018,
            placeAssign: 'Part1',
            noteAssign: 'Note',
            productName: 'เหล็กกันชน',
          }];
    }
    // updateAssignProject() {
    //   this.doSuccess = this.formUpdate.value.doSuccess;
    // }
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
      const value = [{
        projectCode: this.code,
        projectFile: this.file,
        projectType: this.type,
        customer: this.customer,
        pm: this.pmName
      }];
      this.dialogRef.close(value);
    }
  }
