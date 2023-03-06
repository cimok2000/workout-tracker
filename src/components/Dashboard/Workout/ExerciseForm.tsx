import { Button, Input } from "@nextui-org/react";
import type { Dispatch, SetStateAction } from "react";
import type { Exercise } from "../../../types";

const ExerciseForm = ({
  setExercise,
  addExercise,
  exercise,
}: {
  setExercise: Dispatch<SetStateAction<Exercise>>;
  addExercise: () => void;
  exercise: Exercise;
}) => {
  return (
    <div className="grid grid-cols-2 items-end gap-2 md:grid-cols-3 xl:flex">
      <Input
        label="Name"
        type="text"
        placeholder="Bench Press"
        onChange={(e) => setExercise({ ...exercise, name: e.target.value })}
      />
      <Input
        label="Description"
        type="text"
        placeholder="Bench Press"
        onChange={(e) =>
          setExercise({ ...exercise, description: e.target.value })
        }
      />
      <Input
        label="Sets"
        type="number"
        placeholder="3"
        onChange={(e) =>
          setExercise({ ...exercise, sets: parseInt(e.target.value) })
        }
      />
      <Input
        label="Reps"
        type="number"
        placeholder="10"
        onChange={(e) =>
          setExercise({ ...exercise, reps: parseInt(e.target.value) })
        }
      />
      <Input
        label="Weight (lbs)"
        type="number"
        placeholder="100"
        onChange={(e) =>
          setExercise({ ...exercise, weight: parseInt(e.target.value) })
        }
      />
      <Button onPress={addExercise} auto>
        +
      </Button>
    </div>
  );
};

export default ExerciseForm;
