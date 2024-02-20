import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { HomeRoutingModule } from './home-routing.module';
import { IconsProviderModule } from 'src/app/icons-provider.module';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { TableComponent } from 'src/app/layout/home/business/table/table.component';
import { SearchComponent } from 'src/app/layout/home/components/search/search.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { DialogFormComponent } from './components/dialogForm/dialogForm.component';
import { NzListModule } from 'ng-zorro-antd/list';
import { ViewComponent } from './business/view/view.component';
import { ListComponent } from './business/list/list.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { LittleTableComponent } from './business/littleTable/littleTable.component';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { ImageComponent } from './components/image/image.component';
import { NzMessageService } from 'ng-zorro-antd/message';

@NgModule({
  imports: [
    CommonModule,
    NzLayoutModule,
    NzMenuModule,
    FormsModule,
    HttpClientModule,
    NzFormModule,
    HomeRoutingModule,
    IconsProviderModule,
    NzPopoverModule,
    NzButtonModule,
    ReactiveFormsModule,
    NzInputModule,
    NzGridModule,
    NzTableModule,
    NzModalModule,
    NzListModule,
    NzCardModule,
    NzDividerModule,
    NzDropDownModule,
    NzUploadModule,
  ],
  declarations: [
    HomeComponent,
    TableComponent,
    SearchComponent,
    DialogFormComponent,
    ViewComponent,
    ListComponent,
    LittleTableComponent,
    ImageComponent,
  ],
  exports: [HomeComponent],
  providers: [NzMessageService],
})
export class HomeModule {}
