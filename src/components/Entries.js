import React from "react";
import { Grid, Icon, Segment } from "semantic-ui-react";

function Entries({ description, value, isExpenses = false }) {
  return (
    <Segment color={isExpenses ? "red" : "green"}>
      <Grid columns={3} textAlign="right">
        <Grid.Row>
          <Grid.Column width={10} textAlign="left">
            {description}
          </Grid.Column>
          <Grid.Column width={3}>P {value}</Grid.Column>
          <Grid.Column width={3}>
            <Icon name="edit" bordered />
            <Icon name="trash" bordered />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default Entries;
