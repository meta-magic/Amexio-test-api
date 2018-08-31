import {RouterModule} from "@angular/router";
import {AmexioChartsModule, AmexioWidgetModule} from "amexio-ng-extensions";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {CandlestickChart} from "./candlestickchart.demo.component";
import {SharedModule} from "../../../shared.module";
import {HttpClientModule} from "@angular/common/http";
@NgModule({
  declarations: [CandlestickChart],
  imports: [CommonModule, FormsModule, HttpClientModule, AmexioWidgetModule, SharedModule,AmexioChartsModule,RouterModule.forChild([{
    path: '', component: CandlestickChart, pathMatch: 'full'
  }])],
  providers: []
})
export class CandlestickChartDemoModule {
}