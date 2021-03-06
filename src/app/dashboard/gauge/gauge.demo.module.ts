import {RouterModule} from "@angular/router";
import {AmexioDashBoardModule, AmexioWidgetModule} from "amexio-ng-extensions";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {GaugeDemoComponent} from "./gauge.demo.component";
import {SharedModule} from "../../shared.module";
@NgModule({
  declarations: [GaugeDemoComponent],
  imports: [CommonModule, FormsModule, HttpModule, AmexioWidgetModule,SharedModule,AmexioDashBoardModule, RouterModule.forChild([{
    path: '', component:GaugeDemoComponent , pathMatch: 'full'
  }])],
  providers: []
})
export class GaugeDemoModule {
}
