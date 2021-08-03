import { Injectable } from "@angular/core";

@Injectable()
export class ConfigurationUrls {
   
    //private serverApiUrl = 'http://196.203.192.101/HospeaNetApi/api/';
    
    private serverApiUrl = 'http://localhost:2163/api/';
    //Settings
    public governorateGetAllApiUrl = this.serverApiUrl + '/Governorate/GetAll';
    public projectStateGetAllApiUrl = this.serverApiUrl + '/ProjectState/GetAll';
    public monthGetAllApiUrl = this.serverApiUrl + '/StaticData/GetMonths';
    public getStartingYearApiUrl = this.serverApiUrl + '/StaticData/GetStartingYear';



    //Projects
    public projectsGetAllApiUrl = this.serverApiUrl + '/Visitor/GetAll';
    public projectsScheduledApiUrl = this.serverApiUrl + '/Visitor/GetScheduled';
    public projectsStartedApiUrl = this.serverApiUrl + '/Visitor/GetStarted';
    public projectsGetFinishedApiUrl = this.serverApiUrl + '/Visitor/GetFinished';
    public projectsGetStoppedApiUrl = this.serverApiUrl + '/Visitor/GetSuspended';
    public projectsGetCancelledApiUrl = this.serverApiUrl + '/Visitor/GetCancelled';
    public projectGetDetaildApiUrl = this.serverApiUrl + '/visitor//GetProjectDetail?id=';

    public visitorRegisterdApiUrl = this.serverApiUrl + '/account/RegisterVisitor';
    public projectManagerRegisterApiUrl = this.serverApiUrl + '/account/RegisterProjectManager';





}