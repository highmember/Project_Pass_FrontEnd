import { Component } from '@angular/core';
import { TestService } from './shared/service/test.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from './shared/service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public username: string;
  public password: string;
  public check = false;
  public checkType: String;
  public value = {};
  constructor(
    private router: Router,
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute = activatedRoute;
    this.router = router;
  }

  login(): void {
    const val = {
      username: this.username,
      password: this.password
    };
    this.userService.checkUser(val).subscribe((results) => {
      this.checkType = results.type;
      this.value = results;
      console.log(this.checkType)
      console.log(this.value)
      if (this.checkType !== undefined) {
        this.check = true;
      } else {
        alert('ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง!');
      }
    });
  }

  logout() {
    this.router.navigate(['app-home']);
    this.checkType = '';
    this.check = false;
    alert('ออกจากระบบสำเร็จ');
  }
}
