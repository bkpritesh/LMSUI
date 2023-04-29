export class ChapterUpdate {
  "id": number
  "courseCode": string //
  "batchCode": string
  "chapterCode": string
  "chapterName": string //
  "chapterDescription": string //
  "expectedDate": string
  "completionDate": string
  "isCompleted": boolean
  "presentStudent": string
  "absentStudent": string
  "meetingLink": string
  "recordingLink": string
  "resource": string
  "createdDate": string //
  "createdBy": string   //Pass instructorID
  "modifiedBy": string
}

export class StudentData {
  "StudentBatchId": number
  "BatchCode": string
  "StudentCode": string
  "FullName": string
}

export class SaveChapterUpdate {
  "batchCode": string
  "chapterCode": string
  "expectedDate": string
  "completionDate": string
  "isCompleted": boolean
  "presentStudent": string
  "absentStudent": string
  "meetingLink": string
  "recordingLink": string
  "resource": string
  "createdBy": string   //Pass instructorID
  "modifiedBy": string
}



    
       
        

