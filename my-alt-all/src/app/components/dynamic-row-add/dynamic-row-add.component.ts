import {
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-row-add',
  templateUrl: './dynamic-row-add.component.html',
  styleUrls: ['./dynamic-row-add.component.css'],
})
export class DynamicRowAddComponent {
  @ViewChildren('yyy2', { read: ElementRef })
  controlInputs!: QueryList<ElementRef>;

  myForm!: FormGroup;
  checkIndex: number = 0;
  disableTextbox = true;
  i!: number;
  fieldId = 'input4';
  serializedPanes: string = '';

  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.myForm = this.fb.group({
      tableRows: this.fb.array([]),
    });
    this.addDefaultThings();
  }

  addDefaultThings() {
    for (let i = 0; i <= 5; i++) {
      this.addThings();
    }
  }

  addThings() {
    this.tableRowsFun().push(this.newThings());
  }

  tableRowsFun(): FormArray {
    return this.myForm.get('tableRows') as FormArray;
  }

  newThings(): FormGroup {
    return this.fb.group({
      things: new FormControl({ value: '', disabled: false }),
      information: new FormControl({ value: '', disabled: false }),
    });
  }


  onFocus(val:any, index:any){
    this.checkIndex = index
  }

  alphaNumberOnly(e:any){
    var regex =new RegExp("/[^0-9]+/");
    var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (regex.test (str)){
      return true;    
    }
    e.preventDefault()
    return false;
  }

  defaultText(index:number){
    let controlArray = this.tableRowsFun();
    controlArray.controls[index].patchValue({"things":"test"+(index+1)});
    this.checkIndex = index;
  }

  removeThing(index:any){
    let controlArray = this.tableRowsFun();
    let arraylength = controlArray.length;
    for(let i = 0; i <index ; i++){
      let checkThings = controlArray.controls[i].get('things')?.value;
      let checkInformation = controlArray.controls[i].get('information')?.value;
      if(checkThings === '' || checkInformation === ''){
        this.controlInputs.toArray()[i].nativeElement.focus();
        this.checkIndex = i;
        break;
      }
    }

    if( index < arraylength -1){
      if(arraylength > 6){
        let subIndex = arraylength -1 ;
        let checkThings = controlArray.controls[subIndex].get('things')?.value;
        let checkInformation = controlArray.controls[subIndex].get('information')?.value;
        if(checkThings === '' && checkInformation === ''){
          return this.tableRowsFun().removeAt(subIndex);
        }
      }
    }
  }

  onKeydownMain(event:any, index:any){
    let inputText = event.target.value;
    let controlArray = this.tableRowsFun();
    let checkThings =controlArray.controls[index].get('things')?.value;
    let sixPosition = controlArray.controls[5].get('things')?.value;
    this.checkIndex = index;
    if(this.checkIndex > 4 && controlArray.length == index+1 && checkThings !== ''){
      if(!event.shiftKey && (event.key === 'Enter' || event.key === 'Tab') ){
        event.preventDefault();
        this.addThings();
      }
    }
  }

  onEnter(){

  }
}
