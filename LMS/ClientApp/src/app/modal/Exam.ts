export class Exam {
  "QuestionId": string
  "Question": string
  "Option1": string
  "Option2": string
  "Option3": string
  "Option4": string
}

export class answer {  
  "question": string
  "answer": string
}

export class assesstANDStudCode{
  "assessmentCode": string
  "studentCode": string
}

export class QuizData {
  "quizQuestions": answer
  "assesstANDStudCode": assesstANDStudCode
}
