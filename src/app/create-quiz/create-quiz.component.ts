import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css']
})
export class CreateQuizComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit(): void {
  }


  goToHome(){
    this.router.navigate(['homepage'])
  }
}
