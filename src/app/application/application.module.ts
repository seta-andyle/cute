import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, LoadingIndicatorComponent],
  exports: [
    HeaderComponent,
    FooterComponent,
    LoadingIndicatorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ApplicationModule { }
