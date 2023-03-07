import type { IReturnedWorkout } from "../../../types";
import WorkoutDisplayCard from "./WorkoutDisplayCard";

const WorkoutDisplay = ({
  workouts,
  removeWorkout,
}: {
  workouts: IReturnedWorkout[];
  removeWorkout: (workout: IReturnedWorkout) => void;
}) => {
  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3">
      {workouts.map((workout) => (
        <WorkoutDisplayCard
          key={workout.id}
          workout={workout}
          removeWorkout={removeWorkout}
        />
      ))}
    </div>
  );
};

export default WorkoutDisplay;
