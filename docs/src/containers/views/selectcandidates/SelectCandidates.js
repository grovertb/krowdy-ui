import React from 'react'
import { SelectCandidates } from '@krowdy-ui/views'
import { CardCandidate } from '@krowdy-ui/views'

const labels = [
    {
        id: '1',
        name: 'nombre apellido',
        src: 'foto1'
    },
    {
        id: '2',
        name: 'nombre2 apellido ',
        src: 'foto2'
    },
    {
        id: '3',
        name: 'nombre3 apellido ',
        src: 'foto2'
    },
    {
        id: '4',
        name: 'nombre4 apellido ',
        src: 'foto2'
    },
    {
        id: '5',
        name: 'nombre5 apellido ',
        src: 'foto2'
    }
]
const labelCheckbox = ['Candidatos actuales', 'Candidatos nuevos']
const optionSelect = ['option1', 'option2', 'option3']
export default function () {
    return (
        <div>
            <SelectCandidates
                optionSelect={optionSelect}
                labelCheckbox={labelCheckbox}
                CardCandidate={CardCandidate}
                label={labels}
            />
        </div>
    )
}