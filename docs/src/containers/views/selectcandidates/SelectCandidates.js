import React from 'react'
import {
    SelectCandidates,
    CardCandidate,
    Search
} from '@krowdy-ui/views'
import SearchIcon from '@material-ui/icons/Search'

const labels = [
    {
        id: '1',
        name: 'nombre apellido',
        photo: 'foto1'
    },
    {
        id: '2',
        name: 'nombre2 apellido ',
        photo: 'foto2'
    },
    {
        id: '3',
        name: 'nombre3 apellido ',
        photo: 'foto2'
    },
    {
        id: '4',
        name: 'nombre4 apellido ',
        photo: 'foto2'
    },
    {
        id: '5',
        name: 'nombre5 apellido ',
        photo: 'foto2'
    }
]
const placeholderSearch = 'Buscar candidatos'
const searchIcon = <SearchIcon />
const labelsCheckbox = ['Candidatos actuales', 'Candidatos nuevos']
const optionsSelect = ['option1', 'option2', 'option3']
export default function () {
    return (
        <div>
            <SelectCandidates
                searchIcon={searchIcon}
                placeholderSearch={placeholderSearch}
                Search={Search}
                optionsSelect={optionsSelect}
                labelsCheckbox={labelsCheckbox}
                CardCandidate={CardCandidate}
                labels={labels}
            />
        </div>
    )
}