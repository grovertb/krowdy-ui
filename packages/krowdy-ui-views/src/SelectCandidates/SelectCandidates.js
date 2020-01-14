import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withStyles, makeStyles } from '@krowdy-ui/core/styles'
import SearchIcon from '@krowdy-ui/icons/Search';
import {
    Card,
    CardContent,
    Checkbox,
    Typography,
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
    titleCardheader: {
        fontSize: '18px',
        color: '#595959',
        fontWeight: 'bold',
        lineHeight: '24px',
    },
    text: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '14px',
        lineHeight: '20px',
        color: '#262626',
        margin: '20px 0px 16px 0px'
    },
    search: {
        display: 'flex',
        alignItems: 'center',
        border: '1px solid #E8E8E8',
        boxSizing: 'border-box',
        borderRadius: '4px',
        margin: '14px 0px 12px 0px',
        width: '340px',
        height: '40px',
        justifyContent: 'space-between'
    },
    searchCandidate: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '14px',
        color: '#8C8C8C',
    },
    icon: {
        color: '#8C8C8C',
        fontSize: '18px'
    },
    card: {
        width: 420,
        height: 'auto',
        borderRadius: 8
    },
    cardHeader: {
        margin: '16px 38px 16px 20px',
        padding: 0
    },
    cardContent: {
        margin: '20px 38px 35px 42px',
        padding: 0
    },
    selectStage: {
        width: 340,
        fontSize: '14px',
        color: '#595959',
        lineHeight: '16px',
        fontWeight: 'normal'
    },
    optionStages: {
        fontSize: '14px',
        color: '#595959',
        lineHeight: '16px',
        fontWeight: 'normal'
    },
    formGroup: {
        display: ' flex',
        flexDirection: 'row'
    },
    labelCheckbox: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '14px',
        lineHeight: '16px',
        color: '#595959'
    }
}))

export const styles = () => ({
    headerLeft: {
        flex: '1'
    }
})


const SelectCandidates = props => {
    const [changeCheckbox, setChangeCheckbox] = useState(false)
    const classes = useStyles();
    const {
        optionSelect,
        labelCheckbox,
        CardCandidate,
        label
    } = props

    return (
        <div style={{ margin: 10 }}>
            <Card className={classes.card}>
                <CardHeader
                    className={classes.cardHeader}
                    title='Seleccion de candidatos'
                    classes={{ title: classes.titleCardheader }}
                />
                <Divider />
                <CardContent className={classes.cardContent} >
                    <Typography className={classes.text}>
                        ¿Para qué etapa es la tarea?
                    </Typography>
                    <Select
                        className={classes.selectStage}
                        native
                    >
                        {
                            optionSelect.map((item, index) => (
                                <option
                                    value={item}
                                    className={classes.optionStages}
                                >
                                    {`Etapa ${index + 1}`}
                                </option>
                            ))
                        }

                    </Select>
                    <Typography className={classes.text}>
                        ¿Para que candidato es la tarea?
                    </Typography>
                    <FormGroup className={classes.formGroup}>
                        {labelCheckbox.map((txt) => (
                            <FormControlLabel
                                value={txt}
                                control={
                                    <Checkbox color='primary' />
                                }
                                label={txt}
                                className={classes.labelCheckbox}

                            />
                        ))}
                    </FormGroup>
                    <div className={classes.search} >
                        <InputBase
                            placeholder="Buscar candidato"
                            inputProps={{
                                'aria-label': 'search'
                            }}
                            style={{
                                marginLeft: '11px',
                            }}
                            className={classes.searchCandidate}
                        />
                        <div style={{ marginRight: '9PX' }} >
                            <SearchIcon fontSize='small' className={classes.icon} />
                        </div>
                    </div>
                    {/* <List > */}
                    {label.map(({ id, name, src }) => (
                        // <Card key={id} style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }} >
                        //     <ListItemAvatar aria-label="recipe">
                        //         <Checkbox color='primary' />
                        //     </ListItemAvatar>
                        //     <ListItemText primary={name} />
                        // </Card>
                        <CardCandidate
                            style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}
                            label={name}
                            src={src}
                            id={id}
                        />
                    ))}

                    {/* </List> */}
                </CardContent>

            </Card>
        </div >
    )
}

SelectCandidates.propTypes = {
    CardCandidate: PropTypes.any,
    label: PropTypes.array,
    labelCheckbox: PropTypes.array,
    optionSelect: PropTypes.array
}

SelectCandidates.muiName = 'SelectCandidates';

export default withStyles(styles, { name: 'KrowdySelectCandidates' })(SelectCandidates)