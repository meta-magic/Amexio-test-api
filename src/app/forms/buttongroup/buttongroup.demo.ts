/**
 * Created by sagar on 9/1/18.
 */

import {Component} from '@angular/core'
import {Http} from "@angular/http";

@Component({
  selector: 'buttongroup-demo', template: `
    <amexio-card enableHeader="true">
      <amexio-header>
        <h2>Button Group Component</h2>
      </amexio-header>
      <amexio-body>
        <p>Button groups are containers for related action amexio-btn-dropdown-items. 
          They're great when you need to display a group of actions in a bar.
        </p>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
            <amexio-row>
              <amexio-column [size]="12">
                <amexio-card [enableHeader]="true">
                  <amexio-header>
                    <h2>Button Group Types</h2>
                  </amexio-header>
                  <amexio-body>
                    <amexio-row>
                   <amexio-column [size]="12">
                     <amexio-btn-group>
                       <amexio-button [label]="'Secondary'"></amexio-button>
                       <amexio-button [label]="'primary'"  [type]="'primary'"  ></amexio-button>
                       <amexio-button [label]="'Success'" [type]="'success'" ></amexio-button>
                       <amexio-button [label]="'Danger'" [type]="'danger'" ></amexio-button>
                       <amexio-button [label]="'Warning'" [type]="'warning'" ></amexio-button>
                     </amexio-btn-group>
                   </amexio-column>
                    </amexio-row>
                  </amexio-body>
                </amexio-card>

              </amexio-column>
            </amexio-row>
            <amexio-row>
              <amexio-column [size]="12">
                <amexio-card [enableHeader]="true">
                  <amexio-header>
                    <h2>Button Group States</h2>
                  </amexio-header>
                  <amexio-body>
                    <amexio-row>
                      <amexio-column [size]="12">
                        <amexio-btn-group>
                          <amexio-button [label]="'Disabled'"  [type]="'primary'"  [tooltipMessage]="'Disabled'" [disabled]="'true'"></amexio-button>
                          <amexio-button [label]="'Enabled'" [type]="'primary'" [tooltipMessage]="'Enabled'"></amexio-button>
                        </amexio-btn-group>
                      </amexio-column>
                    </amexio-row>
                  </amexio-body>
                </amexio-card>

              </amexio-column>
            </amexio-row>
            <amexio-row>
              <amexio-column [size]="12">
                <amexio-card [enableHeader]="true">
                  <amexio-header>
                    <h2> Button Group with Icons</h2>
                  </amexio-header>
                  <amexio-body>
                    <amexio-row>
                      <amexio-column [size]="12">
                        <amexio-btn-group>
                          <amexio-button [label]="'Next'" [type]="'primary'" [tooltipMessage]="'Next'" [icon]="'fa fa-chevron-right'"  ></amexio-button>
                          <amexio-button [label]="'Download'" [type]="'success'" [tooltipMessage]="'Save'" [icon]="'fa fa-save'" ></amexio-button>
                          <amexio-button [label]="'Delete'" [type]="'danger'" [tooltipMessage]="'delete'" [icon]="'fa fa-trash'" ></amexio-button>
                        </amexio-btn-group>
                      </amexio-column>
                    </amexio-row>
                  </amexio-body>
                </amexio-card>

              </amexio-column>
            </amexio-row>
            <amexio-row>
              <amexio-column [size]="12">
                <amexio-card [enableHeader]="true">
                  <amexio-header>
                    <h2> Button Group Sizes</h2>
                  </amexio-header>
                  <amexio-body>
                    <amexio-row>
                      <amexio-column [size]="12">
                        <amexio-btn-group>
                          <amexio-button [label]="'Next'" [type]="'primary'" [tooltipMessage]="'Next'" [icon]="'fa fa-chevron-right'"  ></amexio-button>
                          <amexio-button [label]="'Download'" [type]="'success'" [tooltipMessage]="'Save'" [icon]="'fa fa-save'" ></amexio-button>
                          <amexio-button [label]="'Delete'" [type]="'danger'" [tooltipMessage]="'delete'" [icon]="'fa fa-trash'" ></amexio-button>
                        </amexio-btn-group>
                      </amexio-column>
                    </amexio-row>
                  </amexio-body>
                </amexio-card>

              </amexio-column>
            </amexio-row>
          </amexio-tab>
          <amexio-tab title="API Reference">
            <amexio-datagrid title="Properties" [columnToggle]="false"
                             [httpMethod]="'get'"
                             [httpUrl]="'assets/apireference/forms/buttongroup.json'"
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
                             [httpUrl]="'assets/apireference/forms/buttongroup.json'" [dataReader]="'events'"
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
export class ButtonGroupDemo {
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];
  sss(ss){
    debugger;
  }

  constructor(private http: Http) {
    this.getHtmlAndTypeScriptCode();
  }

  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;

    //HTML FILE
    this.http.get('assets/data/code/forms/buttongroup/form.html').subscribe(data => {
      responseHtml = data.text();
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/forms/buttongroup/form.text').subscribe(data => {
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


