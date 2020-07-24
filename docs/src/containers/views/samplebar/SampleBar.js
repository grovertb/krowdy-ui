import React from 'react'
import { SampleBar } from '@krowdy-ui/views'

const data = [
  {
    _id      : 1,
    firstName: 'Luis Alfredo',
    lastName : 'Sullca Huaracca',
    photo    :
      'https://krowdy.s3.amazonaws.com/assets/profile/5e375a0b71db5e002dc01323/avatar/2020-02-03T12-22-52-143Z.png',
    value: 2.3
  },
  {
    _id      : 2,
    firstName: 'Luis Alfredo',
    lastName : 'Sullca Huaracca',
    photo    :
      'https://krowdy.s3.amazonaws.com/assets/profile/5e375a0b71db5e002dc01323/avatar/2020-02-03T12-22-52-143Z.png',
    value: 4.5
  },
  {
    _id      : 3,
    firstName: 'Luis Alfredo',
    lastName : 'Sullca Huaracca',
    photo    :
      'https://krowdy.s3.amazonaws.com/assets/profile/5e375a0b71db5e002dc01323/avatar/2020-02-03T12-22-52-143Z.png',
    value: 1
  },
  {
    _id      : 4,
    firstName: 'Luis Alfredo',
    lastName : 'Sullca Huaracca',
    photo    :
      'https://krowdy.s3.amazonaws.com/assets/profile/5e375a0b71db5e002dc01323/avatar/2020-02-03T12-22-52-143Z.png',
    value: 4
  },
  {
    _id      : 5,
    firstName: 'Luis Alfredo',
    lastName : 'Sullca Huaracca',
    photo    :
      'https://krowdy.s3.amazonaws.com/assets/profile/5e375a0b71db5e002dc01323/avatar/2020-02-03T12-22-52-143Z.png',
    value: 3
  },
  {
    _id      : 6,
    firstName: 'Luis Alfredo',
    lastName : 'Sullca Huaracca',
    photo    :
      'https://krowdy.s3.amazonaws.com/assets/profile/5e375a0b71db5e002dc01323/avatar/2020-02-03T12-22-52-143Z.png',
    value: 5
  },
  {
    _id      : 7,
    firstName: 'Luis Alfredo',
    lastName : 'Sullca Huaracca',
    photo    :
      'https://krowdy.s3.amazonaws.com/assets/profile/5e375a0b71db5e002dc01323/avatar/2020-02-03T12-22-52-143Z.png',
    value: 0.5
  }
]

export default () => (
  <div>
    <SampleBar values={data} />
  </div>
)

