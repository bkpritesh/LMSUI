import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../../admin/Service/service.service';
import { Observable, interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { Exam, answer, assesstANDStudCode, QuizData } from '../../modal/Exam';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styles: [
    '.bg-blue{min-height:100vh}',
  ]
})
export class TestComponent implements OnInit {

  accountDeatil: any;
  accountId: string = '';
  StudentDetail: any;
  studentId: string = '';

  id: string = '';
  AssessmentStudentCode = new assesstANDStudCode();
  Answer: answer[] = [];
  //QuizData = new QuizData();
  QuizData: QuizData[] | any = new QuizData();
  selected = '';

  countdown: number = 20 * 60 * 1000;
  countdownDisplay : string = '';

  questions: Exam[] = [];
  currentQuestion = new Exam();
  currentIndex = 0;
  selectedOption: any;
  allQuestion: any = '';
  previousValue: any = '';
  show = false;
  hide = true;
  answers: any[] = [];
  questionId: string='';
  
  
  test = "honey";

  constructor(private activeroute: ActivatedRoute, private apibase: ServiceService, private router: Router) { }
   
  ngOnInit(): void {

    const account = localStorage.getItem('account');

    if (account !== null) {
      debugger
      this.accountDeatil = JSON.parse(account);
      this.accountId = this.accountDeatil.accountId;
    }

    this.apibase.AccountDetailByID(this.accountId).subscribe((res: any) => {
      debugger
      this.StudentDetail = res;
      this.studentId = this.StudentDetail.studentCode;
    });  

    this.id = this.activeroute.snapshot.paramMap.get('id') as string;
    this.apibase.getAssessmentExam(this.id).subscribe((data: any) => {
    debugger
      this.questions = data;
      console.log(this.questions);
      this.currentQuestion = this.questions[this.currentIndex];
    });
    this.startCountdown();
  }

  startCountdown() {
    const interval = setInterval(() => {
      this.countdown -= 1000;
      const remainingMinutes = Math.floor(this.countdown / 60000); // convert remaining milliseconds to minutes
      const remainingSeconds = Math.floor((this.countdown % 60000) / 1000); // convert remaining milliseconds to seconds
      const displayMinutes = remainingMinutes < 10 ? `0${remainingMinutes}` : remainingMinutes;
      const displaySeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
      this.countdownDisplay = `${displayMinutes}:${displaySeconds}`; // update the countdown display
      if (this.countdown === 0) {
        clearInterval(interval);
        this.onSubmit();
      }
    }, 1000);
  }

  onSelect(option: any, id:string) {
    debugger
    this.selectedOption = option;
    this.questionId = id;
  }

  
  onNext() {
    this.selected = '';

    this.answers.push({ question: this.questionId, answer: this.selectedOption });

    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
      this.currentQuestion = this.questions[this.currentIndex];
    } else if (this.currentIndex === this.questions.length -1) {
      this.hide = false;
      this.show = true;
      console.log(this.answers);
    } else {
      alert("Server is giving error so Please Try Again!")
     // console.warn('onNext() called more times than expected');
    }
  }




  prevQuestion() {
    this.currentIndex--;
    this.currentQuestion = this.questions[this.currentIndex];
    this.hide = true;
    this.show = false;
  }

  onSubmit() {
    debugger

    this.AssessmentStudentCode.assessmentCode = this.id;
    this.AssessmentStudentCode.studentCode = this.studentId;
    //console.log(this.AssessmentCode );
    this.Answer = this.answers;

    this.QuizData.assesstANDStudCode = this.AssessmentStudentCode;
    this.QuizData.quizQuestions = this.Answer;

    this.apibase.getAssessmentResult(this.QuizData).subscribe(response => {
      const queryParams = { response: JSON.stringify(response) };
      this.router.navigate(['/Result'], { queryParams });
    });
  }

}
