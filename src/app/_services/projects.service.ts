import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigurationUrls } from '../_configuration/configuration';
import { Projects, SearchCriteria, SearchCriteriaByState } from '../_models/projectsModels';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private httpHeaders: HttpHeaders;
  constructor(private http: HttpClient, private config: ConfigurationUrls) { 
    this.httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  }

  private getHttpHeaders(){
    return new HttpHeaders().set('Content-Type', 'application/json');
  }
  public getAll(search: SearchCriteria){
    return this.http.post<Projects[]>(this.config.projectsGetAllApiUrl, search);
  }

  public getScheduled(search: SearchCriteriaByState){
    return this.http.post<Projects[]>(this.config.projectsScheduledApiUrl, search);
  }

  public getStarted(search: SearchCriteriaByState){
    return this.http.post<Projects[]>(this.config.projectsStartedApiUrl, search);
  }

  public getFinished(search: SearchCriteriaByState){
    return this.http.post<Projects[]>(this.config.projectsGetFinishedApiUrl, search);
  }

  public getStopped(search: SearchCriteriaByState){
    return this.http.post<Projects[]>(this.config.projectsGetStoppedApiUrl, search);
  }

  public getCancelled(search: SearchCriteriaByState){
    return this.http.post<Projects[]>(this.config.projectsGetCancelledApiUrl, search);
  }
  public getLate(search: SearchCriteriaByState){
    return this.http.post<Projects[]>(this.config.projectsGetCancelledApiUrl, search);
  }
  
  public getDetail(id : number){
    return this.http.get<Projects>(this.config.projectGetDetaildApiUrl + +id);
  }
}
