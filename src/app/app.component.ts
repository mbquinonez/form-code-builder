import { registerLocaleData } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  read: boolean;
  write: boolean;
  readwrite: string = '';
  prefix: string = '';
  columnCode: string = '';
  elementCode: string = '';
  useDateTime: boolean = false;
  displayFormat:string = 'MMM dd, yyyy';

  getOutputString() {
    return `|* USEL:${this.getReadWrite()};ColumnCodes:${this.columnCode};Code:${this.prefix}${this.elementCode}${this.getSuffix()}`;
  }

  getSuffix() {
    return this.useDateTime ? `;DataType:DateTime;DisplayFormat:${this.displayFormat}` : '';
  }
  getReadWrite() {
    let retval = '';
    if(this.read) retval += 'Read';
    if(this.write) retval += 'Write';
    return retval;
  }
  copyMessage(){
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = this.getOutputString();
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }
}
