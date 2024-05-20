export interface EventCreate {
  id?: string;
  title?: string;
  date: Date;
  description?: string;
  photoPath?: string;
}

export interface Date {
  id: string;
  day: number;
  month: number;
  year: number;
}
