/**
 * Created by sagar on 9/1/18.
 */

import {Component} from '@angular/core'
import {Http} from "@angular/http";

@Component({
  selector: 'button-demo', template: `
    <amexio-card header="true">
      <amexio-header>
        <h2>Button Component</h2>
      </amexio-header>
      <amexio-body>
        <p>A button component with various modes and configurations.</p>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
            <amexio-row>
            <amexio-column [size]="12">
              <amexio-card [header]="true">
                <amexio-header>
                  <h2>Button Types </h2>
                </amexio-header>
                <amexio-body>
                  <amexio-row>
                    <amexio-column size="3">
                      <amexio-button [label]="'Secondary'" [type]="'secondary'" [tooltip]="'Secondary Button'"></amexio-button>
                    </amexio-column>
                    <amexio-column size="3">
                      <amexio-button [label]="'Primary'" [type]="'primary'" [tooltip]="'Primary Button'"></amexio-button>
                    </amexio-column>
                    <amexio-column size="3">
                      <amexio-button [label]="'Success'" [type]="'success'" [tooltip]="'Success Button'"></amexio-button>
                    </amexio-column>
                    <amexio-column size="3">
                      <amexio-button [label]="'Danger'" [type]="'danger'" [tooltip]="'danger Button'"></amexio-button>
                    </amexio-column>
                    <amexio-column size="2">
                      <amexio-button [label]="'Warning'" [type]="'warning'" [tooltip]="'Warning Button'"></amexio-button>
                    </amexio-column>
                  </amexio-row>
                </amexio-body>
              </amexio-card>

            </amexio-column>
            </amexio-row>
            <amexio-row>
              <amexio-column [size]="12">
                <amexio-card [header]="true">
                  <amexio-header>
                    <h2> Button States</h2>
                  </amexio-header>
                  <amexio-body>
                    <amexio-row>
                      <amexio-column [size]="4">
                        <amexio-button [label]="'Disabled'" [type]="'success'" [tooltip]="'Disabled'" [disabled]="'true'" ></amexio-button>
                      </amexio-column>
                      <amexio-column [size]="4">
                        <amexio-button [label]="'Enabled'" [type]="'success'" [tooltip]="'Enable'" ></amexio-button>
                      </amexio-column>
                      <amexio-column [size]="4">
                        <!--<amexio-button [label]="'Async Task'" [type]="'primary'" [tooltip]="'Async Task'" (onClick)="switchasyncFlag()" [isLoading]="asyncFlag"></amexio-button>-->
                      </amexio-column>
                    </amexio-row>
                  </amexio-body>
                </amexio-card>
              </amexio-column>
            </amexio-row>
            <amexio-row>
              <amexio-column [size]="12">
                <amexio-card [header]="true">
                  <amexio-header>
                    <h2> Button with Icons</h2>
                  </amexio-header>
                  <amexio-body>
                    <amexio-row>
                      <amexio-column [size]="4">
                        <amexio-button [label]="'Next'" [type]="'primary'" [tooltip]="'Next'" [icon]="'fa fa-chevron-right'"></amexio-button>
                      </amexio-column>
                      <amexio-column [size]="4">
                        <amexio-button [label]="'Download'" [type]="'success'" [tooltip]="'Save'" [icon]="'fa fa-save'"></amexio-button>
                      </amexio-column>
                      <amexio-column [size]="4">
                        <amexio-button [label]="'Delete'" [type]="'danger'" [tooltip]="'delete'" [icon]="'fa fa-trash'"></amexio-button>
                      </amexio-column>
                    </amexio-row>
                  </amexio-body>
                </amexio-card>
              </amexio-column>
            </amexio-row>
            <amexio-row>
              <amexio-column [size]="12">
                <amexio-card [header]="true">
                  <amexio-header>
                    <h2> Button Sizes</h2>
                  </amexio-header>
                  <amexio-body>
                    <amexio-row>
                      <amexio-column [size]="4">
                        <amexio-button [label]="'Large Button'" [type]="'primary'" [tooltip]="'large'" [size]="'large'"></amexio-button>
                      </amexio-column>
                      <amexio-column [size]="4">
                        <amexio-button [label]="'Default Button'" [type]="'primary'" [tooltip]="'default'"></amexio-button>
                      </amexio-column>
                      <amexio-column [size]="4">
                        <amexio-button [label]="'Small Button'" [type]="'primary'" [tooltip]="'small'" [size]="'small'"></amexio-button>
                      </amexio-column>
                    </amexio-row>
                  </amexio-body>
                </amexio-card>
              </amexio-column>
            </amexio-row>
            <!--<amexio-row>-->
              <!--<amexio-column [size]="12">-->
                <!--<amexio-card [header]="true">-->
                  <!--<amexio-header>-->
                    <!--<h2>  Block Button</h2>-->
                  <!--</amexio-header>-->
                  <!--<amexio-body>-->
                    <!--<amexio-row>-->
                      <!--<amexio-column [size]="6">-->
                        <!--<amexio-button [label]="'Block Button(primary)'" [type]="'primary'" [tooltip]="'large'" [size]="'large'" [block]="'true'"></amexio-button>-->
                      <!--</amexio-column>-->
                      <!--<amexio-column [size]="6">-->
                        <!--<amexio-button [label]="'Block Button(success)'" [type]="'success'" [tooltip]="'success'" [size]="'large'" [block]="'true'"></amexio-button>-->
                      <!--</amexio-column>-->
                    <!--</amexio-row>-->
                  <!--</amexio-body>-->
                <!--</amexio-card>-->
              <!--</amexio-column>-->
            <!--</amexio-row>-->
          </amexio-tab>
          <amexio-tab title="API Reference">
            <amexio-datagrid title="Properties" [enablecolumnfiter]="false"
                             [httpmethod]="'get'"
                             [httpurl]="'assets/apireference/forms/button.json'"
                             [datareader]="'properties'"
                             [enabledatafilter]="false">
              <amexio-data-table-column [width]="15" [dataindex]="'name'" [datatype]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [width]="10" [dataindex]="'type'" [datatype]="'string'" [hidden]="false"
                                        [text]="'Type'"></amexio-data-table-column>
              <amexio-data-table-column [width]="10" [dataindex]="'default'" [datatype]="'string'" [hidden]="false"
                                        [text]="'Default'"></amexio-data-table-column>
              <amexio-data-table-column [width]="65" [dataindex]="'description'" [datatype]="'string'" [hidden]="false"
                                        [text]="'Description'"></amexio-data-table-column>
            </amexio-datagrid>
            <br>
            <amexio-datagrid title="Events" [httpmethod]="'get'"
                             [httpurl]="'assets/apireference/forms/button.json'" [datareader]="'events'"
                             [enabledatafilter]="false">
              <amexio-data-table-column [width]="20"[dataindex]="'name'" [datatype]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [width]="80" [dataindex]="'description'" [datatype]="'string'" [hidden]="false"
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
export class ButtonDemo {
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];
  asyncFlag : boolean;
    constructor(private http: Http) {
      this.getHtmlAndTypeScriptCode();
  }
  getDta() {
    this.asyncFlag = true;
    setTimeout(() => {
      this.asyncFlag = false;
    }, 3000);
  }
  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;

    //HTML FILE
    this.http.get('assets/data/code/forms/button/form.html').subscribe(data => {
      responseHtml = data.text();
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/forms/button/form.text').subscribe(data => {
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


