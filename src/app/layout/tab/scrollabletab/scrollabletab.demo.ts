/**
 * Created by sagar on 9/1/18.
 */

import {Component} from '@angular/core'
import {Http} from "@angular/http";

@Component({
  selector: 'scrollable-tab-demo', template: `
    <amexio-card header="true">
      <amexio-header>
         Scrollable Tab 
      </amexio-header>
      <amexio-body>
        <p>Scrollable Tab component for Angular Apps with multiple configurations such as Tab, Icon support, Scrollable tabs, Closable tab, Vertical Tabs</p>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
            <amexio-tab-view  [closable]="true">
            <amexio-tab [title]="'Tab 1'" [active]="true">
              <amexio-label [size]="'medium'">Tab 1</amexio-label>
            </amexio-tab>
              <amexio-tab [title]="'Tab 2'">
                <amexio-label [size]="'medium'">Tab 2</amexio-label>
              </amexio-tab>
              <amexio-tab [title]="'Tab 3'">
                <amexio-label [size]="'medium'">Tab 3</amexio-label>
              </amexio-tab>
              <amexio-tab [title]="'Tab 4'">
                <amexio-label [size]="'medium'">Tab 4</amexio-label>
              </amexio-tab>
              <amexio-tab [title]="'Tab 5'">
                <amexio-label [size]="'medium'">Tab 5</amexio-label>
              </amexio-tab> 
              <amexio-tab [title]="'Tab 6'">
                <amexio-label [size]="'medium'">Tab 6</amexio-label>
            </amexio-tab> <amexio-tab [title]="'Tab 7'">
              <amexio-label [size]="'medium'">Tab 7</amexio-label>
            </amexio-tab> <amexio-tab [title]="'Tab 8'">

              <amexio-label [size]="'medium'">Tab 8</amexio-label>
            </amexio-tab>
              <amexio-tab [title]="'Tab 9'">
               <amexio-label [size]="'medium'">Tab 9</amexio-label>
              </amexio-tab>
              <amexio-tab [title]="'Tab 10'">
                <amexio-label [size]="'medium'">Tab 10</amexio-label>
          
              </amexio-tab>
              <amexio-tab [title]="'Tab 11'">
                <amexio-label [size]="'medium'">Tab 11</amexio-label>
              </amexio-tab>
              <amexio-tab [title]="'Tab 12'">
                <amexio-label [size]="'medium'">Tab 12</amexio-label>
              </amexio-tab>
              <amexio-tab [title]="'Tab 13'">
                <amexio-label [size]="'medium'">Tab 13</amexio-label>
              </amexio-tab>  
              <amexio-tab [title]="'Tab 14'">
                <amexio-label [size]="'medium'">Tab 14</amexio-label>
            </amexio-tab>  
              <amexio-tab [title]="'Tab 15'">
                <amexio-label [size]="'medium'">Tab 15</amexio-label>
            </amexio-tab>  
              <amexio-tab [title]="'Tab 16'">
                <amexio-label [size]="'medium'">Tab 16</amexio-label>
            </amexio-tab>  
              <amexio-tab [title]="'Tab 17'">
                <amexio-label [size]="'medium'">Tab 17</amexio-label>
            </amexio-tab> 
              <amexio-tab [title]="'Tab 18'">
                <amexio-label [size]="'medium'">Tab 18</amexio-label>
            </amexio-tab>  
            </amexio-tab-view>
          </amexio-tab>
          <amexio-tab title="API Reference">
            <amexio-datagrid title="Tab View Properties" [enable-column-fiter]="false"
                             [http-method]="'get'"
                             [http-url]="'assets/apireference/layout/tab/basic-tab/basictab.json'"
                             [data-reader]="'properties'"
                             [enable-data-filter]="false" >
              <amexio-data-table-column [width]="15" [data-index]="'name'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [width]="15" [data-index]="'type'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Type'"></amexio-data-table-column>
              <amexio-data-table-column [width]="10" [data-index]="'default'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Default'"></amexio-data-table-column>
              <amexio-data-table-column [width]="60" [data-index]="'description'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Description'"></amexio-data-table-column>
            </amexio-datagrid>
            <br>
            <amexio-datagrid title="Tab Properties" [enable-column-fiter]="false"
                             [http-method]="'get'"
                             [http-url]="'assets/apireference/layout/tab/basic-tab/basictab.json'"
                             [data-reader]="'tabproperties'"
                             [enable-data-filter]="false" >
              <amexio-data-table-column [width]="15" [data-index]="'name'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [width]="15" [data-index]="'type'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Type'"></amexio-data-table-column>
              <amexio-data-table-column [width]="10" [data-index]="'default'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Default'"></amexio-data-table-column>
              <amexio-data-table-column [width]="60" [data-index]="'description'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Description'"></amexio-data-table-column>
            </amexio-datagrid>
            <br>
            <amexio-datagrid title="Tab Events" [enable-column-fiter]="false"
                             [http-method]="'get'"
                             [http-url]="'assets/apireference/layout/tab/basic-tab/basictab.json'"
                             [data-reader]="'events'"
                             [enable-data-filter]="false" >
              <amexio-data-table-column [width]="20"[data-index]="'name'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [width]="80" [data-index]="'description'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Description'"></amexio-data-table-column>
            </amexio-datagrid>

          </amexio-tab>
          <amexio-tab title="Source">
            <div style="overflow-y: scroll">
            <amexio-vertical-tab-view>
              <amexio-tab title="HTML" [active]="true">
                <ng-container *ngIf="htmlCode">
                  <!--<clip-copy [htmlCode]="htmlCode" (onClick)="onCopyClick()"></clip-copy>-->
                  <prism-block [code]="htmlCode" [language]="'html'"></prism-block>
                </ng-container>
              </amexio-tab>
              <amexio-tab title="Type Script">
                <ng-container *ngIf="typeScriptCode">
                  <prism-block [code]="typeScriptCode" [language]="'typescript'"></prism-block>
                </ng-container>
              </amexio-tab>
            </amexio-vertical-tab-view>
            </div>
          </amexio-tab>
          <amexio-tab title="Live">
          <p align="center">Amexio Sandbox</p>
          <iframe style="width: 100%; height: 600px" src="https://stackblitz.com/edit/amexio-v4-horizontal-scrollable-tab?embed=1&file=app/tabs/scrollabletab/scrollabletab.demo.html" frameborder="0" allowfullscren="allowfullscren"></iframe>
          </amexio-tab>
        </amexio-tab-view>
      </amexio-body>
    </amexio-card>
    <!--<amexio-notification [data]="copyMsgArray"></amexio-notification>-->

  `
})
export class ScrollableTabDemo {
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];
  constructor(private http: Http) {
    this.getHtmlAndTypeScriptCode();
  }

  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs:any;

    //HTML FILE
    this.http.get('assets/data/code/layout/tab/scrollabletab/tab.html').subscribe(data => {
      responseHtml = data.text();
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/layout/tab/scrollabletab/tab.text').subscribe(data => {
      responseTs = data.text();
    }, error => {
    }, () => {
      this.typeScriptCode = responseTs;
    });

  }

  //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
  onCopyClick() {
    if (this.copyMsgArray.length >= 1) {
      this.copyMsgArray = [];
      this.copyMsgArray.push({'msg': 'Code Copied', 'type': 'info'});
    } else {
      this.copyMsgArray.push({'msg': 'Code Copied', 'type': 'info'});
    }
  }
}


