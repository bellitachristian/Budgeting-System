import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import DisplayBalance from './DisplayBalance'

function DisplayBalances() {
  return (
    <Segment textAlign="center">
    <Grid columns={2} divided>
      <Grid.Row>
        <Grid.Column>
          <DisplayBalance
            color="green"
            size="tiny"
            title="Income"
            value="1,054.50"
          />
        </Grid.Column>
        <Grid.Column>
          <DisplayBalance
            color="red"
            size="tiny"
            title="Expenses"
            value="623.50"
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
  )
}

export default DisplayBalances
