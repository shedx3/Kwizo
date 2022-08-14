import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css'],
})
export class CreateQuizComponent implements OnInit {
  constructor(private router: Router, private fb: FormBuilder) {}

  questionForm = this.fb.group({
    question: new FormControl('', Validators.required),
    optionA: new FormControl('', Validators.required),
    optionB: new FormControl('', Validators.required),
    optionC: new FormControl('', Validators.required),
    optionD: new FormControl('', Validators.required),
    correct: new FormControl('', Validators.required),
  });

  saveQuestion: any[] = [];

  ngOnInit(): void {}

  goToHome() {
    this.router.navigate(['homepage']);
  }

  onSubmit() {
    if (this.questionForm.invalid) {
      console.log('error');
      Swal.fire({
        title: 'Please fill in the required fields',
        timer: 2000,
        width: 400,
        icon: 'error',
        showClass: { popup: 'animate__animated animate__fadeInDown' },
        hideClass: { popup: 'animate__animated animate__fadeOutUp' },
      });
    } else {
      const questionDetails = {
        question: this.questionForm.value.question,
        optionA: this.questionForm.value.optionA,
        optionB: this.questionForm.value.optionB,
        optionC: this.questionForm.value.optionC,
        optionD: this.questionForm.value.optionD,
        correct: this.questionForm.value.correct,
      };
      this.saveQuestion.push(questionDetails);

      console.log(this.saveQuestion);

      Swal.fire({
        title: 'Your Question has been created successfully!',
        timer: 2000,
        width: 400,
        icon: 'success',
        showClass: { popup: 'animate__animated animate__fadeInDown' },
        hideClass: { popup: 'animate__animated animate__fadeOutUp' },
      });
      this.questionForm.reset();
    }
  }
  canExit() {
    if (this.questionForm.dirty) {
      return confirm(
        'You have unsaved changes. Do you really want to discard these changes'
      );
    } else {
      return true;
    }
  }
}
