import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private _apiUrl = 'https://reqres.in/api/';

  get apiUrl() {
    return this._apiUrl;
  }
}
