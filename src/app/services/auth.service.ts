import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  login(username: string, password: string) {
    return of(true).pipe(
      delay(1000),
      tap((response) => {
        if (username != 'test@test.com' && password != 'asdf1234'){
          throw Error();
        }
      })
    )
  }

  logout(){
    this.router.navigate(['/auth/login']);
  }

}


