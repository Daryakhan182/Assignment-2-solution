import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServingListService } from './../serving-list.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.page.html',
  styleUrls: ['./portfolio.page.scss'],
})
export class PortfolioPage implements OnInit {

  constructor(private Servlist: ServingListService) {
    
  }


  students = [];
 
  ngOnInit() {
      // this.students = this.Servlist.getStudents;
       this.students = this.Servlist.getAllStudents();
  }

}
