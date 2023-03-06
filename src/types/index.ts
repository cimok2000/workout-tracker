export type Workout = {
  name: string;
  description: string;
  date: Date;
  exercises: Exercise[];
};

export interface IReturnedWorkout extends Workout {
  id: string;
}

export type Exercise = {
  name: string;
  description: string;
  sets: number;
  reps: number;
  weight: number;
};