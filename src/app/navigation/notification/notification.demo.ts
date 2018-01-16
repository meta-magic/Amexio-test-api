/**
 * Created by sagar on 9/1/18.
 */

import {Component} from '@angular/core'
import {Http} from "@angular/http";

@Component({
  selector: 'notification-demo', template: `
    <amexio-card enableHeader="true">
      <amexio-header>
        <h2>App Notification's</h2>
      </amexio-header>
      <amexio-body>
        <p>Notification provides a way to let user know through pop-up messages.</p>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
            <amexio-row>
              <amexio-column size="6">
                <amexio-card [enableHeader]="true">
                  <amexio-header><h2>Top Notification</h2></amexio-header>
                  <amexio-body>
                    <amexio-notification [messageData]="topMessageArray"
                                         [verticalposition]="'top'"
                                         [horizontalposition]="'right'" [autodismissmsg]="true"
                                         [autodismissmsginterval]="2000">
                    </amexio-notification>
                    <amexio-button (onClick)="topNotification()"
                                   [label]="'Info Popup'" [type]="'primary'"
                                   [tooltipMessage]="'Primary Button'">
                    </amexio-button>
                  </amexio-body>
                </amexio-card>
              
              </amexio-column>
              <amexio-column size="6">
                <amexio-card [enableHeader]="true">
                  <amexio-header><h2>Bottom Notification</h2></amexio-header>
                  <amexio-body>
                    <amexio-notification [messageData]="bottomMessageArray"
                                         [verticalposition]="'bottom'"
                                         [horizontalposition]="'right'" [autodismissmsg]="true"
                                         [autodismissmsginterval]="2000">
                    </amexio-notification>
                    <amexio-button (onClick)="bottomNotification()"
                                   [label]="'Info On Bottom'" [type]="'primary'"
                                   [tooltipMessage]="'Primary Button'">
                    </amexio-button>
                  </amexio-body>
                </amexio-card>
             
              </amexio-column>
            </amexio-row>
           
          </amexio-tab>
          <amexio-tab title="API Reference">
            <amexio-datagrid title="API Reference : amexio-dockbar" [columnToggle]="false"
                             [httpMethod]="'get'"
                             [httpUrl]="'assets/apireference/navigation/notification.json'"
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
export class NotificationDemo {
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];
  topMessageArray:any=[];
  bottomMessageArray:any=[];
  topNotification(){
    this.topMessageArray.push('Top Notification!!!')
  }
  bottomNotification(){
    this.bottomMessageArray.push('Bootom Notification!!!')
  }
  constructor(private http: Http) {
    this.getHtmlAndTypeScriptCode();
  }

  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;

    //HTML FILE
    this.http.get('assets/data/code/navigation/notification/navigation.html').subscribe(data => {
      responseHtml = data.text();
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/navigation/notification/navigation.text').subscribe(data => {
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

