/**
 * Created by sagar on 9/1/18.
 */

import {Component} from '@angular/core'
import {Http} from "@angular/http";

@Component({
  selector: 'image-demo', template: `
    <amexio-card enableHeader="true">
      <amexio-header>
        <h2>Image Component</h2>
      </amexio-header>
      <amexio-body>
        <p>An image is an artifact that depicts visual perception.amexio support icons (material / font-awesome)/image</p>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
            <amexio-row>
              <amexio-column size="12">
                <amexio-card [enableHeader]="true">
                  <amexio-header>
                    <h2>Image</h2>
                  </amexio-header>
                  <amexio-body>
                    <amexio-row>
                      <!--<amexio-column size="6">-->
                        <!--<amexio-row>-->
                          <!--<amexio-column size="12">-->
                            <!--Material Icon-->
                            <!--<amexio-image [imageClass]="'material-icons'" [mdbClass]="'cloud'" [tooltipMessage]="'Material cloud icon'"></amexio-image>-->
                          <!--</amexio-column>-->
                        <!--</amexio-row>-->
                       <!--</amexio-column>-->

                      <amexio-column size="12">
                        <amexio-row>
                          <amexio-column size="12">
                            Font Awesome Icon
                            <amexio-image [imageClass]="'fa fa-address-book fa-lg'" [tooltipMessage]="'Fontawesome address book'"></amexio-image>
                          </amexio-column>
                        </amexio-row>
                      </amexio-column>                    
                    </amexio-row>
                    <br>
                    <amexio-row>
                      <amexio-column size="12">
                        <amexio-card  enableHeader="true">
                          <amexio-header><h2>Simple Image</h2></amexio-header>
                          <amexio-body>
                            <amexio-row>
                              <amexio-column size="12">
                                <amexio-image [imagePath]="'./../../../assets/images/soap-bubble.jpg'"  [cClass]="'img-style'" [tooltipMessage]="'Image'"></amexio-image>
                              </amexio-column>
                            </amexio-row>
                          </amexio-body>
                        </amexio-card>
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
                             [httpUrl]="'assets/apireference/media/image.json'"
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
            <amexio-datagrid title="Event" [columnToggle]="false"
                             [httpMethod]="'get'"
                             [httpUrl]="'assets/apireference/media/image.json'"
                             [dataReader]="'events'"
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
export class ImageDemo {
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];

  constructor(private http: Http) {
    this.getHtmlAndTypeScriptCode();
  }

  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;

    //HTML FILE
    this.http.get('assets/data/code/media/image/media.html').subscribe(data => {
      responseHtml = data.text();
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/media/image/media.text').subscribe(data => {
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

