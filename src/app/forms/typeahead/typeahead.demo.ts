/**
 * Created by sagar on 9/1/18.
 */

import {Component} from '@angular/core'
import {Http} from "@angular/http";

@Component({
  selector: 'typeahead-demo', template: `
    <amexio-card enableHeader="true">
      <amexio-header>
        <h2>Type Ahead Component</h2>
      </amexio-header>
      <amexio-body>
        <p>Type Ahead Component provides a power type ahead on the text field where
          users entry is provided with a filtered result.</p>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
            <amexio-row>
              <amexio-column size="6">
                <amexio-card enableHeader="true" enableFooter="true">
                  <amexio-header>
                    <h4>Simple TypeAhead Field</h4>
                  </amexio-header>
                  <amexio-body>
                    <amexio-typeahead [dataReader]="'data'"
                                      [key]="'sportName'"
                                      [displayField]="'sportName'"
                                      [placeholder]="'Search'"
                                      [httpUrl]="'assets/data/componentdata/typeahead.json'"
                                      [httpMethod]="'get'"
                                      [fieldLabel]="'Sport Name'">
                    </amexio-typeahead>

                  </amexio-body>
                  <amexio-action>
                    <h4>{{name}}</h4>
                  </amexio-action>
                </amexio-card>
              </amexio-column>
            </amexio-row>

          </amexio-tab>
          <amexio-tab title="API Reference">
            <amexio-datagrid title="Properties" [columnToggle]="false"
                             [httpMethod]="'get'"
                             [httpUrl]="'assets/apireference/forms/typeahead.json'"
                             [dataReader]="'properties'"
                             [filtering]="false">
              <amexio-data-table-column [dataIndex]="'name'" [dataType]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [dataIndex]="'type'" [dataType]="'string'" [hidden]="false"
                                        [text]="'Type'"></amexio-data-table-column>
              <amexio-data-table-column [dataIndex]="'default'" [dataType]="'string'" [hidden]="false"
                                        [text]="'Default'"></amexio-data-table-column>
              <amexio-data-table-column [dataIndex]="'description'" [dataType]="'string'" [hidden]="false"
                                        [text]="'Description'"></amexio-data-table-column>
            </amexio-datagrid>
            <br>
            <amexio-datagrid title="Events" [httpMethod]="'get'"
                             [httpUrl]="'assets/apireference/forms/typeahead.json'" [dataReader]="'events'"
                             [filtering]="false">
              <amexio-data-table-column [dataIndex]="'name'" [dataType]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [dataIndex]="'description'" [dataType]="'string'" [hidden]="false"
                                        [text]="'Description'"></amexio-data-table-column>
            </amexio-datagrid>

          </amexio-tab>
          <amexio-tab title="Source">
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
              <amexio-tab title="Data Source">
                <ng-container *ngIf="dataSource">
                  <prism-block [code]="dataSource" [language]="'json'"></prism-block>
                </ng-container>
              </amexio-tab>
            </amexio-vertical-tab-view>
          </amexio-tab>
          <amexio-tab title="Live">
            Work in Progress
          </amexio-tab>
        </amexio-tab-view>
      </amexio-body>
    </amexio-card>
    <!--<amexio-notification [messageData]="copyMsgArray"></amexio-notification>-->

  `
})
export class TypeAheadDemo {
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];
  typeAHeadData: any;
  name: string;
  dataSource:string;
  constructor(private http: Http) {
    this.typeAHeadData = {
      "data": [{"sportName": "Cricket", "code": "Ck"}, {"sportName": "Swimming", "code": "Sw"}, {
        "sportName": "Golf",
        "code": "Glf"
      }, {"sportName": "Hockey", "code": "Hky"}, {"sportName": "Soccer", "code": "Scr"}, {
        "sportName": "Formula One",
        "code": "F1"
      }]
    };
    this.getHtmlAndTypeScriptCode();
  }

  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;
    let responseData:any;
    //HTML FILE
    this.http.get('assets/data/code/forms/typeahead/form.html').subscribe(data => {
      responseHtml = data.text();
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/forms/typeahead/form.text').subscribe(data => {
      responseTs = data.text();
    }, error => {
    }, () => {
      this.typeScriptCode = responseTs;
    });
    //JSON FILE
    this.http.get('assets/data/componentdata/typeahead.json').subscribe(data => {
      responseData = data.text();
    }, error => {
    }, () => {
      this.dataSource = responseData;
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


