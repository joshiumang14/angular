import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MyFeatureModule } from './features/my_feature/my_feature.module'; // Adjust path as necessary

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MyFeatureModule // Import your feature module here
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
