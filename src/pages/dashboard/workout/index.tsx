import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import Header from "../../../components/Header";
import { api } from "../../../utils/api";
import type { IReturnedWorkout } from "../../../types";
import { toast } from "react-toastify";
import WorkoutDisplay from "../../../components/Dashboard/Workout/WorkoutDisplay";
import ButtonWithTooltip from "../../../components/ButtonWithTooltip";
import { useRouter } from "next/router";

const Workout: NextPage = (props) => {
  const router = useRouter();
  const { data: sessionData } = useSession();
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

  const removeWorkout = (workout: IReturnedWorkout) => {
    removeWorkoutTRPC(workout.id);
    document.location.href = "/dashboard/workout";
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
        <ButtonWithTooltip
          content="Add a Custom Workout"
          onClick={() => void router.push("/dashboard/workout/custom")}
        >
          Add Custom Workout
        </ButtonWithTooltip>
      </main>
    </div>
  );
};

export default Workout;
