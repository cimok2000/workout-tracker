import { Button, Table } from "@nextui-org/react";
import type { IReturnedWorkout } from "../../../types";

const WorkoutDisplay = ({
  workouts,
  removeWorkout,
}: {
  workouts: IReturnedWorkout[];
  removeWorkout: (workout: IReturnedWorkout) => void;
}) => {
  return (
    <Table shadow={false} bordered striped compact>
      <Table.Header>
        <Table.Column>Name</Table.Column>
        <Table.Column>Description</Table.Column>
        <Table.Column>Date</Table.Column>
        <Table.Column>Remove</Table.Column>
      </Table.Header>
      <Table.Body items={workouts}>
        {(workout) => (
          <Table.Row key={workout.id}>
            <Table.Cell>{workout.name}</Table.Cell>
            <Table.Cell>{workout.description}</Table.Cell>
            <Table.Cell>{workout.date.getUTCDate()}</Table.Cell>
            <Table.Cell>
              <Button auto onPress={() => removeWorkout(workout)}>
                Remove
              </Button>
            </Table.Cell>
          </Table.Row>
        )}
      </Table.Body>
    </Table>
  );
};

export default WorkoutDisplay;
