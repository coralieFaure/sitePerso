import { Component, OnInit } from '@angular/core';
import {Experience} from '../../models/experience';
import {ExperiencesService} from '../../services/experiences.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {

  experiences: Experience[];

  constructor(private experiencesService: ExperiencesService) { }

  ngOnInit(): void {
    this.experiencesService.getAllExperiences().subscribe((data: Experience[]) => {
      this.experiences = data;
    });
  }

}
