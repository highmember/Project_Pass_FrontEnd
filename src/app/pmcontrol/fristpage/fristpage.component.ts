import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../shared/service/project.service';

@Component({
  selector: 'app-fristpage',
  templateUrl: './fristpage.component.html',
  styleUrls: ['./fristpage.component.css']
})
export class FristpageComponent implements OnInit {
  public rows: any[];
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.getAllProject().subscribe((results) => {
      this.rows = results;
    });
  }
}
