import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AmexioWidgetModule} from "amexio-ng-extensions";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared.module";
import {NotificationDemo} from "./notification.demo";
/**
 * Created by sagar on 11/1/18.
 */
@NgModule({
  declarations: [NotificationDemo],
  imports: [CommonModule, FormsModule, HttpModule,SharedModule, AmexioWidgetModule, RouterModule.forChild([{
    path: '', component: NotificationDemo, pathMatch: 'full'
  }])],
  providers: []
})
export class NotificationDemoModule {

}
