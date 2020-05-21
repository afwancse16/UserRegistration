import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { IUserData } from './user-registration.interface';
import { ConfigService } from './config.service';

@Injectable()
export class UserRegistrationService {
  public user: BehaviorSubject<IUserData> = new BehaviorSubject(null);
  public user$: Observable<IUserData> = this.user.asObservable();

  constructor(
    private http: HttpClient,
    private config: ConfigService
  ) {}

  public regiterUser(newUser): Observable<IUserData> {
    return this.http.post(`${this.config.apiUrl}users`, newUser.email).pipe(
      map((data: any) => ({
        ...newUser,
        id: data.id
      })),
      tap(data => this.user.next(data))
    );
  }

  public login(user): Observable<any> {
    return this.http.post(`${this.config.apiUrl}login`, {
      email: 'eve.holt@reqres.in',
      password: user.password
    });
  }
}
