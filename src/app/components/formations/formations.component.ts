import { Component, OnInit } from '@angular/core';
import {Formation} from '../../models/formation';
import {FormationsService} from '../../services/formations.service';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.css']
})
export class FormationsComponent implements OnInit {

  formations: Formation[];

  constructor(private formationsService: FormationsService) { }

  ngOnInit(): void {
    this.formationsService.getAllFormations().subscribe((data: Formation[]) => {
      this.formations = data;
    });
  }
}
