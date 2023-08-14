import { Component } from '@angular/core';
import * as bootstrap from 'bootstrap';
import { AuthService } from 'src/app/auth/auth.service';
import { UserCredential } from 'firebase/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  currentUser: string| null=null;
  constructor(protected authService: AuthService, private router: Router){}
  logout(){
    this.authService.logout().subscribe(()=>{
      this.router.navigate(['/auth']);
    })
  }
  // ngOnInit() {
  //   this.authService.getCurrentUser().then((user) => {
  //     if (user){
  //     this.currentUser =user.email ;
  //     }else{
  //       this.currentUser= null;
  //     }
  //   });

  // }

  private dropdownList: bootstrap.Dropdown[] = [];



  OnInit() {
    const dropdownToggleElements = Array.from(document.querySelectorAll('.dropdown-toggle')) as HTMLElement[];
    this.dropdownList = dropdownToggleElements.map((dropdownToggleEl) => {
      return new bootstrap.Dropdown(dropdownToggleEl);
    });
  }

  ngOnDestroy() {
    this.dropdownList.forEach((dropdown) => {
      dropdown.dispose();
    });
  }

}
