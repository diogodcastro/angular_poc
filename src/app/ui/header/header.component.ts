import {Component, Input, OnInit} from '@angular/core';
import {ClientsFormComponent} from '../../clients/clients-form/clients-form.component';
import {Client} from '../../shared/models/client.model';
import {DialogService} from 'primeng/api';
import {LoginComponent} from '../../login/login.component';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';
import {User} from '../../shared/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public navbarOpen = false;

  constructor(private dialogService: DialogService,
              private cookieService: CookieService,
              private router: Router) {}

  ngOnInit() {}

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  loginModal() {
    const ref = this.dialogService.open(LoginComponent, {
      header: 'Login',
      width: '70%',
      contentStyle: {'max-height': '350px', 'overflow': 'auto'}
    });
    ref.onClose.subscribe((user: User) => {
    });
  }

  logout() {
    this.router.navigate(['dashboard']).finally( () => {
      this.cookieService.delete('loginOK'); });
  }
}
