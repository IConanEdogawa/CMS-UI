import { CanActivateFn } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

export const authGuard: CanActivateFn = (route, state) => {
  const accesToken:any=jwtDecode(localStorage.getItem("accessToken")!)

  console.log(accesToken)

  if(accesToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"]=="director@gmail.com"){
    return true
  }

  return false;
};
