import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Input from '@material-ui/core/Input'

const useStyles = makeStyles({
  input: {
    width: 200
  },
  input1: {
    border   : '10px solid black',
    boxSizing: 'border-box',
    fontSize : 13
  },
  input2: {
    boxSizing: 'content-box',
    fontSize : 13,
    padding  : 10
  }
})

function Textarea() {
  const [ value, setValue ] = React.useState(
    'Hey, sorry for being late to respond. Here is a codesandbox. It actually happens when I reduce the font-size of the input. Try adding some text or paste a long paragraph and you will the bottom margin being increased. It works fine with the default font-size.',
  )
  const classes = useStyles()

  const handleChange = event => {
    setValue(event.target.value)
  }

  return (
    <div>
      <Input
        classes={{
          input: classes.input1
        }}
        className={classes.input}
        multiline
        onChange={handleChange}
        value={value} />
      <Input
        classes={{
          input: classes.input2
        }}
        className={classes.input}
        multiline
        onChange={handleChange}
        value={value} />
      <Input
        className={classes.input} multiline placeholder='rows'
        rows='3' />
      <Input
        className={classes.input}
        multiline
        onChange={handleChange}
        rowsMax='4'
        value={value} />
      <Input className={classes.input} multiline placeholder='long placeholder long placeholder' />
      <Input
        className={classes.input}
        defaultValue='long default value long default value'
        multiline />
    </div>
  )
}

export default Textarea
