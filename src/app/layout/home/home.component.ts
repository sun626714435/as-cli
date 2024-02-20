import { Component, OnInit } from '@angular/core';
import { BusinessService } from 'src/app/core/business.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent implements OnInit {
  menus: any;
  constructor(
    private businessService: BusinessService,
    private router: Router
  ) {}

  ngOnInit() {
    // this.menus = [
    //   {
    //     label: '菜单三',
    //     icon: 'setting',
    //     address: '/list',
    //   },
    // ];
    // this.businessService.getMenu().subscribe((res: any) => {
    //   this.menus = res.data;
    //   this.router.navigate([`/home/table`]);
    // });
  }
  out(): void {
    this.router.navigate(['/login']);
  }
  goto(data: any): void {
    this.router.navigate([`/home${data.address}`], {
      queryParams: { id: data.id },
    });
  }
}
