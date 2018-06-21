import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AmexioWidgetModule, IconLoaderService} from "amexio-ng-extensions";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared.module";
import {WithinTreeDemo} from "./withintree.demo.component";
import {HttpClientModule} from "@angular/common/http";

/**
 * Created by sagar on 11/1/18.
 */
@NgModule({
  declarations: [WithinTreeDemo],
  imports: [CommonModule, FormsModule, HttpClientModule,SharedModule, AmexioWidgetModule, RouterModule.forChild([{
    path: '', component: WithinTreeDemo, pathMatch: 'full'
  }])],
  providers: [IconLoaderService]
})
export class WithinTreeDemoModule {

}