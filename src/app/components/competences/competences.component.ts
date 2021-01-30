import { Component, OnInit } from '@angular/core';
import {Competences} from '../../models/competences';
import {CompetencesService} from '../../services/competences.service';

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.css']
})
export class CompetencesComponent implements OnInit {
  competences: Competences[];

  constructor(private competencesService: CompetencesService) { }

  ngOnInit(): void {
    this.competencesService.getAllCompetences().subscribe((data: Competences[]) => {
      this.competences = data;
    });
  }
}
