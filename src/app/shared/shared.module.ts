import { NgModule } from '@angular/core';
import { TabMenuModule } from 'primeng/tabmenu';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [TabMenuModule, CommonModule],
  exports: [NavbarComponent],
  declarations: [NavbarComponent],
  providers: [],
})
export class SharedModule {}
