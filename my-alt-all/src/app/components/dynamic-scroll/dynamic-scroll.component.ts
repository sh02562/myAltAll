import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dynamic-scroll',
  templateUrl: './dynamic-scroll.component.html',
  styleUrls: ['./dynamic-scroll.component.css'],
})
export class DynamicScrollComponent {
  tableData: any = [];
  @ViewChild('wrapper1') wrapper1!: ElementRef<any>;
  @ViewChild('wrapper2') wrapper2!: ElementRef<any>;
  ngOnInit() {
    for (let i = 0; i < 10; i++) {
      this.tableData.push({
        name: `Name ${i}`,
        id: i,
      });
    }    
  }

  getScroll1(event:any){
    console.log("top",event.srcElement.scrollLeft,event.srcElement.scrollTop)
    this.wrapper2.nativeElement.scrollTo(event.srcElement.scrollLeft,event.srcElement.scrollTop);
  }
  getScroll2(event:any){
    console.log("bottom",event.srcElement.scrollLeft,event.srcElement.scrollTop)

    this.wrapper1.nativeElement.scrollTo(event.srcElement.scrollLeft,event.srcElement.scrollTop);
  }
}
