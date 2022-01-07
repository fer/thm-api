export interface Question {
    questionNo: number;
    question: string;
    hint: string;
}

export interface Task {
    taskTitle: string;
    taskDesc: string;
    taskType: string;
    taskNo: number;
    taskCreated: Date;
    taskDeadline?: any;
    tasksInfo: any[];
    uploadId: string;
    questions: Question[];
}