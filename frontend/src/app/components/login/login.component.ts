import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [RouterModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  constructor(private toastr: ToastrService, 
    private _userService: UserService,
    private router: Router
  ) {}
  ngOnInit(): void {
      
  }

  username: string = '';
  password: string = '';

  login() {
    //Validar que el usuario ingrese datos
    if(this.username == '' || this.password == '') {
      this.toastr.error('Todos los campos son obligatorios.', 'Error')
      return
    }
    //creamos el body
    const user: User = {
      username: this.username,
      password: this.password
    }
    this._userService.login(user).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.token)
        this.router.navigate(['/dashboard'])
      },
      error: (e: HttpErrorResponse) => {
        this.msgError(e);
      }
    })
  }
  msgError(e: HttpErrorResponse) {
    if (e.error.msg) {
      this.toastr.error(e.error.msg, 'Error');
    } else {
      this.toastr.error('Error ocurrido, verifique los datos ingresados.', 'Error');
    }
  }
}
