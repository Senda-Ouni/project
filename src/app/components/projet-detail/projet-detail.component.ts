import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from "@angular/router";
import { ProjectsService } from 'src/app/_services/projects.service';
import { Projects} from 'src/app/_models/projectsModels';


@Component({
  selector: 'app-projet-detail',
  templateUrl: './projet-detail.component.html',
  styleUrls: ['./projet-detail.component.css']
})
export class ProjetDetailComponent implements OnInit {
  public detail:Projects;

  lat: number = 36.5;
  lng: number = 10.5;

  constructor(private projectsService: ProjectsService  , private route: ActivatedRoute) {
   }

  ngOnInit() {
    this.route.params.subscribe( params => {
      console.log(params);
      this.getDetail(+params.id);
    });
    
  }
  
  private getDetail(id: number) {
    
    this.projectsService.getDetail(id).subscribe(data=>{
      this.detail= data;
      console.log(this.detail);
    })
     }

}
