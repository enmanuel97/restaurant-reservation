import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NopagefoundComponent} from './nopagefound/nopagefound.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [NopagefoundComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NopagefoundComponent, HeaderComponent, FooterComponent
  ]
})
export class SharedModule { }
