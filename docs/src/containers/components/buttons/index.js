import React from 'react'
import { Typography } from '@krowdy-ui/core'

import ContentItems from '../../../components/ContentItems'
import GroupedButtons from './GroupedButtons'
import ContainedButtons from './ContainedButtons'
import TextButtons from './TextButtons'
import OutlinedButtons from './OutlinedButtons'
import FloatingButtons from './FloatingButtons'
import IconButtons from './IconButtons'

export default function Buttons() {

  return (
    <ContentItems>
      <Typography variant='h3'>Buttons</Typography>
      <br />
      <Typography variant='h5'>Contained Buttons</Typography>
      <ContainedButtons />
      <br />
      <Typography variant='h5'>Text Buttons</Typography>
      <TextButtons />
      <br />
      <Typography variant='h5'>Outlined Buttons</Typography>
      <OutlinedButtons />
      <br />
      <Typography variant='h5'>Grouped Buttons</Typography>
      <GroupedButtons />
      <br />
      <Typography variant='h5'>Floating Buttons</Typography>
      <FloatingButtons />
      <br />
      <Typography variant='h5'>Icon Buttons</Typography>
      <IconButtons />
    </ContentItems>
  )
}