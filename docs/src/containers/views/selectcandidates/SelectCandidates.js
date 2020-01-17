import React, { useState } from 'react'
import {
    SelectCandidates,
    CardCandidate,
    Search
} from '@krowdy-ui/views'
import SearchIcon from '@material-ui/icons/Search'

const candidatesSelectIds = [5]
const dataSource = [
    {
        firstName: 'Nombres',
        id: 1,
        lastName: 'Apellidos',
        photo: 'foto1'
    },
    {
        firstName: 'Nombres',
        id: 2,
        lastName: 'Apellidos',
        photo: 'foto2'
    },
    {
        firstName: 'Nombres',
        id: 3,
        lastName: 'Apellidos',
        photo: 'foto2'
    },
    {
        firstName: 'Nombres',
        id: 4,
        lastName: 'Apellidos',
        photo: 'foto2'
    },
    {
        firstName: 'Nombres',
        id: 5,
        lastName: 'Apellidos',
        photo: 'foto2'
    }
]
const placeholderSearch = 'Buscar candidatos'
const searchIcon = <SearchIcon />
const labelsCheckbox = ['Candidatos actuales', 'Candidatos nuevos']
const optionsSelect = ['option1', 'option2', 'option3']

export default function () {
    // const [checkedCheckbox, setCheckedCheckbox] = useState('')
    const [itemSelect, setItemSelect] = useState('')
    const _handleChangeItemSelect = event => {
        setItemSelect(event.target.value)
    }
    // const _handleChangeCurrentCandidates = event => {
    //     setCheckedCheckbox(event.target.value)
    // }


    return (
        <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
            <SelectCandidates
                // onChangeIndeterminateCandidates={onChangeIndeterminateCandidates}
                // checkedCurrentCandidates={checkedCurrentCandidates}
                // onChangeCurrentCandidates={_handleChangeCurrentCandidates}
                // checkedcandidatesToCome={checkedcandidatesToCome}
                // onChangecandidatesToCome={onChangecandidatesToCome}
                // onChangeCheckboxItem={_handleClickCheckboxItem}
                // numberSelecteds={numberSelecteds}
                // checkboxIndeterminate={checkboxIndeterminate}
                // onChangeSearchText={onChangeSearchText}
                // onNextCandidates={onNextCandidates}
                // hasMore={hasMore}
                candidatesSelectIds={candidatesSelectIds}
                dataSource={dataSource}
                itemSelect={itemSelect}
                labelsCheckbox={labelsCheckbox}
                onChangeSelectOptions={_handleChangeItemSelect}
                optionsSelect={optionsSelect}
                placeholderSearch={placeholderSearch}
                searchIcon={searchIcon}
                Search={Search}
                CardCandidate={CardCandidate}
            />
        </div>
    )
}
