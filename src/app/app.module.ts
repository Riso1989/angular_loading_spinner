import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { LoadComponent } from "./load/load.component";
import { ContentComponent } from "./content/content.component";

@NgModule({
  declarations: [
    AppComponent, 
    LoadComponent,
    ContentComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
