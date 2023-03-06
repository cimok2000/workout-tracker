import { Button, Loading } from "@nextui-org/react";
import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import { useState } from "react";
import Header from "../../components/Header";
import { api } from "../../utils/api";
import type { IReturnedWorkout, Workout, Exercise } from "../../types";
import { toast } from "react-toastify";
import WorkoutDisplay from "../../components/Dashboard/Workout/WorkoutDisplay";
import ExercisesDisplay from "../../components/Dashboard/Workout/ExercisesDisplay";
import WorkoutForm from "../../components/Dashboard/Workout/WorkoutForm";
import ExerciseForm from "../../components/Dashboard/Workout/ExerciseForm";

const Home: NextPage = () => {
  const { data: sessionData } = useSession();
  const { mutate: addWorkoutTRPC, isLoading } =
    api.user.createWorkout.useMutation({
      onSuccess: () => {
        document.location.href = "/dashboard/workout";
      },
      onError: (error) => {
        toast(error.message, {
          type: "error",
          position: "top-right",
        });
      },
    });
  const { mutate: removeWorkoutTRPC } = api.user.removeWorkout.useMutation({
    onSuccess: () => {
      document.location.href = "/dashboard/workout";
    },
    onError: (error) => {
      toast(error.message, {
        type: "error",
        position: "top-right",
      });
    },
  });
  const { data: workouts } = api.user.getWorkouts.useQuery();

  // States
  const [workout, setWorkout] = useState<Workout>({
    name: "",
    description: "",
    date: new Date(),
    exercises: [],
  });

  const [exercise, setExercise] = useState<Exercise>({
    name: "",
    description: "",
    sets: 0,
    reps: 0,
    weight: 0,
  });

  // Workout Functions
  const addWorkout = () => {
    addWorkoutTRPC(workout);
  };

  const removeWorkout = (workout: IReturnedWorkout) => {
    removeWorkoutTRPC(workout.id);
    document.location.href = "/dashboard/workout";
  };

  const addExercise = () => {
    setWorkout({ ...workout, exercises: [...workout.exercises, exercise] });
  };

  // Exercise Functions

  const removeExercise = (exercise: Exercise) => {
    return;
  };

  return (
    <div className="flex h-screen w-screen flex-col">
      <Header title="Workout Tracker" sessionData={sessionData} />
      <main className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-2xl font-bold">Workouts</h1>
        {workouts && workouts.length > 0 && (
          <WorkoutDisplay
            workouts={workouts as unknown as IReturnedWorkout[]}
            removeWorkout={removeWorkout}
          />
        )}
        <h1 className="text-2xl font-bold">Add Workout</h1>
        <WorkoutForm workout={workout} setWorkout={setWorkout} />
        {workout.exercises.length > 0 && (
          <ExercisesDisplay
            exercises={workout.exercises}
            removeExercise={removeExercise}
          />
        )}
        <ExerciseForm
          exercise={exercise}
          setExercise={setExercise}
          addExercise={addExercise}
        />
        <Button onPress={addWorkout}>Add Workout</Button>
        {isLoading && <Loading />}
      </main>
    </div>
  );
};

export default Home;
