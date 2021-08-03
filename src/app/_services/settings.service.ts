import { Injectable } from '@angular/core';

import { ConfigurationUrls } from '../_configuration/configuration';
import{ Governorate, ProjectState, Month } from '../_models/SettingsModels';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(private http: HttpClient, private config: ConfigurationUrls) { }

  public getGovernorates(){
    return this.http.get<Governorate[]>(this.config.governorateGetAllApiUrl);
  }

  public getProjectStates(){
    return this.http.get<ProjectState[]>(this.config.projectStateGetAllApiUrl);
  }
  public getMonths(){
    return this.http.get<Month[]>(this.config.monthGetAllApiUrl);
  }
  public getStartingYear(){
    return this.http.get<number>(this.config.getStartingYearApiUrl);
  }
}
