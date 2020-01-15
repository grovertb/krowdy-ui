import React from 'react'
import {
    SelectCandidates,
    CardCandidate,
    Search
} from '@krowdy-ui/views'
import SearchIcon from '@material-ui/icons/Search'

const dataSource = [
    {
        firstName: 'Nombres',
        id: '1',
        lastName: 'Apellidos',
        photo: 'foto1'
    },
    {
        firstName: 'Nombres',
        id: '2',
        lastName: 'Apellidos',
        photo: 'foto2'
    },
    {
        firstName: 'Nombres',
        id: '3',
        lastName: 'Apellidos',
        photo: 'foto2'
    },
    {
        firstName: 'Nombres',
        id: '4',
        lastName: 'Apellidos',
        photo: 'foto2'
    },
    {
        firstName: 'Nombres',
        id: '5',
        lastName: 'Apellidos',
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
                dataSource={dataSource}
            />
        </div>
    )
}