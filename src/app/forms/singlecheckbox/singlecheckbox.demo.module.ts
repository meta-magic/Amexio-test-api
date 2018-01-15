import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AmexioWidgetModule} from "amexio-ng-extensions";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared.module";
import {SinglecheckboxDemo} from "./singlecheckbox.demo";
/**
 * Created by sagar on 11/1/18.
 */
@NgModule({
  declarations: [SinglecheckboxDemo],
  imports: [CommonModule, FormsModule, HttpModule,SharedModule, AmexioWidgetModule, RouterModule.forChild([{
    path: '', component: SinglecheckboxDemo, pathMatch: 'full'
  }])],
  providers: []
})
export class SinglecheckboxDemoModule {

}
