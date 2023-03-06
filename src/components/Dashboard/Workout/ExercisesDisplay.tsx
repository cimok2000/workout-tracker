import { Button, Table } from "@nextui-org/react";
import type { Exercise } from "../../../types";

const ExercisesDisplay = ({
  exercises,
  removeExercise,
}: {
  exercises: Exercise[];
  removeExercise: (exercise: Exercise) => void;
}) => {
  return (
    <Table shadow={false} bordered striped compact>
      <Table.Header>
        <Table.Column>Name</Table.Column>
        <Table.Column>Description</Table.Column>
        <Table.Column>Sets</Table.Column>
        <Table.Column>Reps</Table.Column>
        <Table.Column>Weight</Table.Column>
        <Table.Column>Remove</Table.Column>
      </Table.Header>
      <Table.Body items={exercises}>
        {(exercise) => (
          <Table.Row key={exercise.name}>
            <Table.Cell>{exercise.name}</Table.Cell>
            <Table.Cell>{exercise.description}</Table.Cell>
            <Table.Cell>{exercise.sets}</Table.Cell>
            <Table.Cell>{exercise.reps}</Table.Cell>
            <Table.Cell>{exercise.weight}</Table.Cell>
            <Table.Cell>
              <Button
                auto
                color="error"
                disabled
                onPress={() => removeExercise(exercise)}
              >
                Remove
              </Button>
            </Table.Cell>
          </Table.Row>
        )}
      </Table.Body>
    </Table>
  );
};

export default ExercisesDisplay;
