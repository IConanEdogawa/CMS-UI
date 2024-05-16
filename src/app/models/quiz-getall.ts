export interface QuizGetall {
    id: string
    question: string
    optionsA: string
    optionsB: string
    optionsC: string
    optionsD: string
    correctAnswer: string
    descriptionPhotoPath: string
    lessonId: string
    subjectId: string
    lesson: Lesson
    subject: Subject2
  }
  
  export interface Lesson {
    id: string
    theme: string
    day: number
    fromTime: FromTime
    toTime: ToTime
    classId: string
    subjectId: string
    attendanceId: string
    teacherId: string
    class: Class
    subject: Subject
    attendance: Attendance3
    teacher: Teacher3
    quizzes: string[]
  }
  
  export interface FromTime {
    hour: number
    minute: number
    second: number
    millisecond: number
    microsecond: number
    nanosecond: number
    ticks: number
  }
  
  export interface ToTime {
    hour: number
    minute: number
    second: number
    millisecond: number
    microsecond: number
    nanosecond: number
    ticks: number
  }
  
  export interface Class {
    id: string
    name: string
    grade: number
    teacherId: string
    students: Student[]
    subjects: string[]
    attendances: Attendance[]
    teacher: Teacher
  }
  
  export interface Student {
    id: string
    userName: string
    normalizedUserName: string
    email: string
    normalizedEmail: string
    emailConfirmed: boolean
    passwordHash: string
    securityStamp: string
    concurrencyStamp: string
    phoneNumber: string
    phoneNumberConfirmed: boolean
    twoFactorEnabled: boolean
    lockoutEnd: string
    lockoutEnabled: boolean
    accessFailedCount: number
    firstName: string
    lastName: string
    role: string
    gender: number
    dateOfBirth: string
    coin: number
    parentsPhoneNumber: string
    classId: string
    photoPath: string
    pdfPath: string
    class: string
    location: Location
  }
  
  export interface Location {
    country: string
    region: string
    district: string
    homeNumber: string
  }
  
  export interface Attendance {
    id: string
    lessonId: string
    classId: string
    date: Date
    lesson: string
    class: string
  }
  
  export interface Date {
    id: string
    day: number
    month: number
    year: number
  }
  
  export interface Teacher {
    id: string
    userName: string
    normalizedUserName: string
    email: string
    normalizedEmail: string
    emailConfirmed: boolean
    passwordHash: string
    securityStamp: string
    concurrencyStamp: string
    phoneNumber: string
    phoneNumberConfirmed: boolean
    twoFactorEnabled: boolean
    lockoutEnd: string
    lockoutEnabled: boolean
    accessFailedCount: number
    firstName: string
    lastName: string
    role: string
    gender: number
    photoPath: string
    pdfPath: string
    subjectId: string
    subject: string
    location: Location2
  }
  
  export interface Location2 {
    country: string
    region: string
    district: string
    homeNumber: string
  }
  
  export interface Subject {
    id: string
    name: string
    classId: string
    class: Class2
  }
  
  export interface Class2 {
    id: string
    name: string
    grade: number
    teacherId: string
    students: Student2[]
    subjects: string[]
    attendances: Attendance2[]
    teacher: Teacher2
  }
  
  export interface Student2 {
    id: string
    userName: string
    normalizedUserName: string
    email: string
    normalizedEmail: string
    emailConfirmed: boolean
    passwordHash: string
    securityStamp: string
    concurrencyStamp: string
    phoneNumber: string
    phoneNumberConfirmed: boolean
    twoFactorEnabled: boolean
    lockoutEnd: string
    lockoutEnabled: boolean
    accessFailedCount: number
    firstName: string
    lastName: string
    role: string
    gender: number
    dateOfBirth: string
    coin: number
    parentsPhoneNumber: string
    classId: string
    photoPath: string
    pdfPath: string
    class: string
    location: Location3
  }
  
  export interface Location3 {
    country: string
    region: string
    district: string
    homeNumber: string
  }
  
  export interface Attendance2 {
    id: string
    lessonId: string
    classId: string
    date: Date2
    lesson: string
    class: string
  }
  
  export interface Date2 {
    id: string
    day: number
    month: number
    year: number
  }
  
  export interface Teacher2 {
    id: string
    userName: string
    normalizedUserName: string
    email: string
    normalizedEmail: string
    emailConfirmed: boolean
    passwordHash: string
    securityStamp: string
    concurrencyStamp: string
    phoneNumber: string
    phoneNumberConfirmed: boolean
    twoFactorEnabled: boolean
    lockoutEnd: string
    lockoutEnabled: boolean
    accessFailedCount: number
    firstName: string
    lastName: string
    role: string
    gender: number
    photoPath: string
    pdfPath: string
    subjectId: string
    subject: string
    location: Location4
  }
  
  export interface Location4 {
    country: string
    region: string
    district: string
    homeNumber: string
  }
  
  export interface Attendance3 {
    id: string
    lessonId: string
    classId: string
    date: Date3
    lesson: string
    class: string
  }
  
  export interface Date3 {
    id: string
    day: number
    month: number
    year: number
  }
  
  export interface Teacher3 {
    id: string
    userName: string
    normalizedUserName: string
    email: string
    normalizedEmail: string
    emailConfirmed: boolean
    passwordHash: string
    securityStamp: string
    concurrencyStamp: string
    phoneNumber: string
    phoneNumberConfirmed: boolean
    twoFactorEnabled: boolean
    lockoutEnd: string
    lockoutEnabled: boolean
    accessFailedCount: number
    firstName: string
    lastName: string
    role: string
    gender: number
    photoPath: string
    pdfPath: string
    subjectId: string
    subject: string
    location: Location5
  }
  
  export interface Location5 {
    country: string
    region: string
    district: string
    homeNumber: string
  }
  
  export interface Subject2 {
    id: string
    name: string
    classId: string
    class: Class3
  }
  
  export interface Class3 {
    id: string
    name: string
    grade: number
    teacherId: string
    students: Student3[]
    subjects: string[]
    attendances: Attendance4[]
    teacher: Teacher4
  }
  
  export interface Student3 {
    id: string
    userName: string
    normalizedUserName: string
    email: string
    normalizedEmail: string
    emailConfirmed: boolean
    passwordHash: string
    securityStamp: string
    concurrencyStamp: string
    phoneNumber: string
    phoneNumberConfirmed: boolean
    twoFactorEnabled: boolean
    lockoutEnd: string
    lockoutEnabled: boolean
    accessFailedCount: number
    firstName: string
    lastName: string
    role: string
    gender: number
    dateOfBirth: string
    coin: number
    parentsPhoneNumber: string
    classId: string
    photoPath: string
    pdfPath: string
    class: string
    location: Location6
  }
  
  export interface Location6 {
    country: string
    region: string
    district: string
    homeNumber: string
  }
  
  export interface Attendance4 {
    id: string
    lessonId: string
    classId: string
    date: Date4
    lesson: string
    class: string
  }
  
  export interface Date4 {
    id: string
    day: number
    month: number
    year: number
  }
  
  export interface Teacher4 {
    id: string
    userName: string
    normalizedUserName: string
    email: string
    normalizedEmail: string
    emailConfirmed: boolean
    passwordHash: string
    securityStamp: string
    concurrencyStamp: string
    phoneNumber: string
    phoneNumberConfirmed: boolean
    twoFactorEnabled: boolean
    lockoutEnd: string
    lockoutEnabled: boolean
    accessFailedCount: number
    firstName: string
    lastName: string
    role: string
    gender: number
    photoPath: string
    pdfPath: string
    subjectId: string
    subject: string
    location: Location7
  }
  
  export interface Location7 {
    country: string
    region: string
    district: string
    homeNumber: string
  }
  
