import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  // Verificamos si el usuario tiene un token almacenado en localStorage
  const token = localStorage.getItem('token');

  if (token == undefined) {
    router.navigate(['/login'])
  }
  return true
};
