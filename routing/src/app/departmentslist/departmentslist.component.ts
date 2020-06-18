import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-departmentslist',
  templateUrl: './departmentslist.component.html',
  styleUrls: ['./departmentslist.component.scss']
})
export class DepartmentslistComponent implements OnInit {

  public courseList = [];
  constructor(private course: CourseService) { }

  ngOnInit() {
    this.course.getCousesList()
      .subscribe(data => this.courseList = data);
  }

}
