import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, makeStyles } from '@krowdy-ui/core/styles'
import SearchIcon from '@krowdy-ui/icons/Search';
import {
    Card,
    CardContent,
    Checkbox,
    Typography,
    Paper,
    Select,
    List,
    ListItemText,
    ListItemAvatar,
    Divider,

    FormGroup,
    FormControlLabel,
    InputBase,
    CardHeader
} from '@krowdy-ui/core'

const useStyles = makeStyles(theme => ({

}))

export const styles = () => ({
    headerLeft: {
        flex: '1'
    }
})

const items = [
    {
        id: '1',
        person: 'nombre apellido',
        src: 'foto1'
    },
    {
        id: '2',
        person: 'hola hola ',
        src: 'foto2'
    },
    {
        id: '3',
        person: 'hola hola ',
        src: 'foto2'
    },
    {
        id: '4',
        person: 'hola hola ',
        src: 'foto2'
    },
    {
        id: '5',
        person: 'hola hola ',
        src: 'foto2'
    }
]

const options = ['option1', 'option2', 'option3']
const descriptions = ['Candidatos actuales', 'Candidatos nuevos']
const SelectCandidates = props => {
    const classes = useStyles();
    const {
        title,
    } = props

    return (
        <div style={{ margin: 10 }}>
            <Card style={{ width: 420, height: 'auto', borderRadius: 8 }}>
                <CardHeader
                    style={{ margin: '16px 38px 16px 20px', padding: 0 }}
                    title='Seleccion de candidatos'
                />
                <Divider />
                <CardContent style={{ margin: '20px 38px 35px 42px', padding: 0 }}>
                    <Typography>
                        Para que etapa es la tarea?
                    </Typography>
                    <Select
                        native
                        style={{ width: 340 }}
                    >
                        {
                            options.map((item) => (
                                <option value={item}>
                                    {item}
                                </option>
                            ))
                        }

                    </Select>
                    <Typography>
                        Para que candidato es la tarea
                    </Typography>
                    <FormGroup style={{ display: ' flex', flexDirection: 'row' }}>
                        {descriptions.map((txt) => (
                            <FormControlLabel
                                value={txt}
                                control={
                                    <Checkbox color='primary' />
                                }
                                label={txt}
                            />
                        ))}
                    </FormGroup>
                    <div style={{ display: 'flex', alignItems: 'center' }} >
                        <div >
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <List >
                        {items.map(({ id, person, src }) => (
                            <Paper key={id} style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }} >
                                <ListItemAvatar aria-label="recipe">
                                    <Checkbox color='primary' />
                                </ListItemAvatar>
                                <ListItemText primary={person} />
                            </Paper>
                        ))}

                    </List>
                </CardContent>

            </Card>
        </div >
    )
}

SelectCandidates.propTypes = {
    title: PropTypes.string,
}

SelectCandidates.muiName = 'SelectCandidates';

export default withStyles(styles, { name: 'KrowdySelectCandidates' })(SelectCandidates)