import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AmexioWidgetModule, IconLoaderService} from "amexio-ng-extensions";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared.module";
import {TreeDataGridDemo} from "./treedatagrid.demo";
/**
 * Created by sagar on 11/1/18.
 */
@NgModule({
  declarations: [TreeDataGridDemo],
  imports: [CommonModule, FormsModule, HttpModule,SharedModule, AmexioWidgetModule, RouterModule.forChild([{
    path: '', component: TreeDataGridDemo, pathMatch: 'full'
  }])],
  providers: [IconLoaderService]
})
export class TreeDataGridDemoModule {

}
