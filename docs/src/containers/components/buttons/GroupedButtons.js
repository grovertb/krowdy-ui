import React from 'react'
import Grid from '@krowdy-ui/core/Grid'
import Button from '@krowdy-ui/core/Button'
import ButtonGroup from '@krowdy-ui/core/ButtonGroup'

export default () =>  (
  <section>
    <Grid container spacing={3}>
      <Grid item md={6} xs={12}>
        <Grid
          alignItems='center' container direction='column'
          spacing={1}>
          <Grid item>
            <ButtonGroup aria-label='small outlined button group' size='small'>
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
          </Grid>
          <Grid item>
            <ButtonGroup aria-label='outlined primary button group' color='primary'>
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
          </Grid>
          <Grid item>
            <ButtonGroup
              aria-label='large outlined secondary button group'
              color='secondary'
              size='large'>
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
          </Grid>
          <Grid item>
            <ButtonGroup
              aria-label='outlined secondary button group'
              color='krowdy'>
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
          </Grid>
          <Grid item>
            <ButtonGroup
              aria-label='small outlined secondary button group'
              color='error'
              size='small'>
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={6} xs={12}>
        <Grid
          alignItems='center' container direction='column'
          spacing={1}>
          <Grid item>
            <ButtonGroup aria-label='small contained button group' size='small' variant='contained'>
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
          </Grid>
          <Grid item>
            <ButtonGroup
              aria-label='full-width contained primary button group'
              color='primary'
              variant='contained'>
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
          </Grid>
          <Grid item>
            <ButtonGroup
              aria-label='large contained secondary button group'
              color='secondary'
              size='large'
              variant='contained'>
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
          </Grid>
          <Grid item>
            <ButtonGroup
              aria-label='contained krowdy button group'
              color='krowdy'
              variant='contained'>
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
          </Grid>
          <Grid item>
            <ButtonGroup
              aria-label='small contained error button group'
              color='error'
              size='small'
              variant='contained'>
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={6} xs={12}>
        <Grid
          alignItems='center' container direction='column'
          spacing={1}>
          <Grid item>
            <ButtonGroup aria-label='small contained button group' size='small' variant='text'>
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
          </Grid>
          <Grid item>
            <ButtonGroup
              aria-label='full-width contained primary button group'
              color='primary'
              variant='text'>
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
          </Grid>
          <Grid item>
            <ButtonGroup
              aria-label='large contained secondary button group'
              color='secondary'
              size='large'
              variant='text'>
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
          </Grid>
          <Grid item>
            <ButtonGroup
              aria-label='contained krowdy button group'
              color='krowdy'
              variant='text'>
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
          </Grid>
          <Grid item>
            <ButtonGroup
              aria-label='small contained error button group'
              color='error'
              size='small'
              variant='text'>
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={6} xs={12}>
        <ButtonGroup aria-label='full width outlined button group' fullWidth>
          <Button>Full</Button>
          <Button>width</Button>
          <Button>Group</Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  </section>
)
