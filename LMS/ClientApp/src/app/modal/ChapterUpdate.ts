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
}

export class StudentData {
  "StudentBatchId": number
  "BatchCode": string
  "StudentCode": string
  "FullName": string
}



