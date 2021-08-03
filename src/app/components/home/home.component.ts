import { Component, OnInit } from '@angular/core';

import { ProjectsService } from 'src/app/_services/projects.service';
import { Projects, SearchCriteria, SearchCriteriaByState  } from 'src/app/_models/projectsModels';
import { Governorate, ProjectState } from 'src/app/_models/SettingsModels';
import { SettingsService } from '../../_services/settings.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ProjectsService]


})
export class HomeComponent implements OnInit {

  lat = 37;
  lng = 9.7;

  desc: string;

  public searchCriteria: SearchCriteria;
  public searchCriteriaByState: SearchCriteriaByState;
   public governorates: Governorate[];
   public projectStates: ProjectState[];
   public projectsMap: Projects[];
   public nbprojectsMap: number;
   public nbStarted: number;
   public Started: Projects[];
   public nbStopped: number;
   public Stopped: Projects[];
   public nbLate = 0;
   public Late: Projects[];
   public nbCancelled: number;
   public Cancelled: Projects[];
   public nbFinished: number;
   public Finished: Projects[];
   public nbScheduled: number;
   public Scheduled: Projects[];

   openedWindow = 0;


 designation = '';


   constructor(private projectsService: ProjectsService, private settingsService: SettingsService, private router: Router) {
     this.searchCriteria = new SearchCriteria();
     this.searchCriteriaByState = new SearchCriteriaByState();


    this.getGovernorates();
    this.getProjectStates();
    }


   ngOnInit() {
     this.getAllProjects();
     this.getScheduled();
     this.getStarted();
     this.getFinished();
     this.getStopped();
     this.getCancelled();
     this.getLate();


   }


   private getAllProjects() {
     this.projectsService.getAll(this.searchCriteria).subscribe(data => {
       this.projectsMap = data;
       this.nbprojectsMap = data.length;

     });
   }

   private getStarted() {
     this.projectsService.getStarted(this.searchCriteriaByState).subscribe(data => {
       this.nbStarted = data.length;
       this.Started = data;

 });
   }

   private getStopped() {
     this.projectsService.getStopped(this.searchCriteriaByState).subscribe(data => {
       this.nbStopped = data.length;
       this.Stopped = data;
     });
   }
   private getCancelled() {
     this.projectsService.getCancelled(this.searchCriteriaByState).subscribe(data => {
       this.nbCancelled = data.length;
       this.Cancelled = data;
     });
   }

   private getFinished() {
     this.projectsService.getFinished(this.searchCriteriaByState).subscribe(data => {
       this.nbFinished = data.length;
       this.Finished = data;
     });
   }

   private getScheduled() {
     this.projectsService.getScheduled(this.searchCriteriaByState).subscribe(data => {
       this.nbScheduled = data.length;
       this.Scheduled = data;
     });
   }

   private getLate() {
     this.projectsService.getLate(this.searchCriteriaByState).subscribe(data => {
       this.nbLate = data.length;
       this.Late = data;
     });
   }

   private getGovernorates() {
    this.settingsService.getGovernorates().subscribe(data => {
      this.governorates = data;
    });
  }

  private getProjectStates() {
    this.settingsService.getProjectStates().subscribe(data => {
      this.projectStates = data;
    });
  }
// alternative: array of numbers

   openWindow(id) {

       this.openedWindow = id; // alternative: push to array of numbers
   }

   isInfoWindowOpen(id: number) {

   }

   public onClickInfoView(id: number) {
   console.log('', id);

   }

   detail(id: number) {
  console.log('', id);
  this.router.navigate(['ProjetDetail', id]);

}

}
