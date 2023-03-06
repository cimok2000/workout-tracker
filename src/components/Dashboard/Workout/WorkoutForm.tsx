import { Input } from "@nextui-org/react";
import type { Dispatch, SetStateAction } from "react";
import type { Workout } from "../../../types";

const WorkoutForm = ({
  workout,
  setWorkout,
}: {
  workout: Workout;
  setWorkout: Dispatch<SetStateAction<Workout>>;
}) => {
  return (
    <div className="grid items-center justify-center gap-2 md:flex">
      <div className="flex gap-2">
        <Input
          label="Name"
          type="text"
          placeholder="Early Morning"
          onChange={(e) => setWorkout({ ...workout, name: e.target.value })}
        />
        <Input
          label="Date"
          type="date"
          onChange={(e) =>
            setWorkout({ ...workout, date: new Date(e.target.value) })
          }
        />
      </div>
      <Input
        label="Description"
        type="text"
        placeholder="Early Morning Workout"
        onChange={(e) =>
          setWorkout({ ...workout, description: e.target.value })
        }
      />
    </div>
  );
};

export default WorkoutForm;
