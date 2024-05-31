export interface EventDate {
  id: string;
  day: number;
  month: number;
  year: number;
}

export interface Event {
  id: string;
  title: string;
  date: EventDate;
  description: string;
  photoPath: string;
}

export interface GetAllEvents {
  $id: string;
  $values: Event[];
}
