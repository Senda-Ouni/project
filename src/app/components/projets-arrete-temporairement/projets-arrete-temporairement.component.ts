import { Component, OnInit } from '@angular/core';

import { ProjectsService } from 'src/app/_services/projects.service';
import { Projects, SearchCriteria, SearchCriteriaByState } from 'src/app/_models/projectsModels';
import { Governorate, ProjectState,Month } from 'src/app/_models/SettingsModels'
import { SettingsService } from '../../_services/settings.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-projets-arrete-temporairement',
  templateUrl: './projets-arrete-temporairement.component.html',
  styleUrls: ['./projets-arrete-temporairement.component.css']
})
export class ProjetsArreteTemporairementComponent implements OnInit {
  public startingYear :number;
  public searchCriteria: SearchCriteria;
 
   public governorates: Governorate[];
   public projectStates : ProjectState[];
 
   public projectsMap: Projects[];
   public nbprojectsMap: number;
 
   public months : Month[];
 
   public years:Array<number>;
   constructor(private projectsService: ProjectsService, private settingsService: SettingsService,private router: Router) {
     this.searchCriteria = new SearchCriteria();
     this.getStartingYear();
     this.getGovernorates();
     this.getProjectStates();
     this.getMonths();
    }
  
   private getStartingYear(){
     this.settingsService.getStartingYear().subscribe(data => {
       this.startingYear = data;
     this.fillYears();
     })
   }
   ngOnInit() {
     this.getProjects();
   }
 
   private fillYears(){
 
     let currentYear:number;
     currentYear = (new Date()).getFullYear();
     this.years = new Array<number>();
     for (var i = currentYear; i>= this.startingYear; i--) {
       this.years.push(i);
     }
 
   }
 
 
 public selectNullValue:number;
   public getProjects() {
     this.projectsService.getStopped(this.searchCriteria).subscribe(data => {
       this.projectsMap = data;
       this.nbprojectsMap = data.length;
       console.log(this.searchCriteria);
 
     })
   }
   public getMonths(){
    this.settingsService.getMonths().subscribe(data =>{
     this.months = data ;
   })
   
   }
   
   private getGovernorates() {
     this.settingsService.getGovernorates().subscribe(data =>{
       this.governorates = data;
     })
   }
 
   private getProjectStates() {
     this.settingsService.getProjectStates().subscribe(data =>{
       this.projectStates = data;
     })
   }
   detail(id:number){
    console.log("",id)
    this.router.navigate(['ProjetDetail', id]); 
  }
}
