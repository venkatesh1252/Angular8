import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departmentslist',
  templateUrl: './departmentslist.component.html',
  styleUrls: ['./departmentslist.component.scss']
})
export class DepartmentslistComponent implements OnInit {

  public courseList = [];
  public departments: any;
  constructor(private course: CourseService, private router: Router) { }

  ngOnInit() {
    this.course.getCousesList()
      .subscribe(data => this.courseList = data);
  }

  onSelect(departments) {
    this.router.navigate(['/departments', departments.id]);
  }
}
