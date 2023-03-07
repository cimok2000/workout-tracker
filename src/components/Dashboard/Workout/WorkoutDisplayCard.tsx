import { Button, Card, Grid, Text } from "@nextui-org/react";
import { useState } from "react";
import type { IReturnedWorkout } from "../../../types";

type WorkoutDisplayCardProps = {
  workout: IReturnedWorkout;
  removeWorkout: (workout: IReturnedWorkout) => void;
};

const WorkoutDisplayCard = (props: WorkoutDisplayCardProps) => {
  const [clicked, setClicked] = useState(false);

  return (
    <Card
      key={props.workout.id}
      css={{ maxW: "380px", minWidth: "380px" }}
      isPressable
      isHoverable
      onPress={() => setClicked(!clicked)}
    >
      <Card.Header>
        <Grid.Container>
          <Grid xs={12}>
            <Text h3 css={{ lineHeight: "$xs" }}>
              {props.workout.name}
            </Text>
          </Grid>
          <Grid xs={12}>
            <Text
              h5
              css={{ color: "$accents8", lineHeight: "$xs" }}
            >{`${props.workout.date.getUTCDate()}:${props.workout.date.getUTCMonth()}:${props.workout.date.getUTCFullYear()}`}</Text>
          </Grid>
        </Grid.Container>
      </Card.Header>
      <Card.Divider />
      <Card.Body>
        {!clicked && (
          <Grid.Container>
            <Grid xs={12}>
              <Text h5 css={{ lineHeight: "$xs" }}>
                {props.workout.description}
              </Text>
            </Grid>
          </Grid.Container>
        )}
        {clicked && (
          <Grid.Container>
            <Grid>
              <Button
                auto
                color="error"
                onPress={() => props.removeWorkout(props.workout)}
              >
                Remove
              </Button>
            </Grid>
          </Grid.Container>
        )}
      </Card.Body>
    </Card>
  );
};

export default WorkoutDisplayCard;
