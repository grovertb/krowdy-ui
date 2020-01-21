import React from 'react'
import {
    SelectCandidates,
    CardCandidate,
    Search
} from '@krowdy-ui/views'
import SearchIcon from '@material-ui/icons/Search'
import CloseIcon from '@material-ui/icons/Close'

const candidatesSelectIds = [5]
const dataSource = [
    {
        _id: 1,
        firstName: 'Nombres',
        lastName: 'Apellidos',
        photo: 'foto1'
    },
    {
        _id: 2,
        firstName: 'Nombres',
        lastName: 'Apellidos',
        photo: 'foto2'
    },
    {
        _id: 3,
        firstName: 'Nombres',
        lastName: 'Apellidos',
        photo: 'foto2'
    },
    {
        _id: 4,
        firstName: 'Nombres',
        lastName: 'Apellidos',
        photo: 'foto2'
    },
    {
        _id: 5,
        firstName: 'Nombres',
        lastName: 'Apellidos',
        photo: 'foto2'
    }
]
const placeholderSearch = 'Buscar candidatos'
const searchIcon = <SearchIcon />
const closeIcon = <CloseIcon style={{ height: 18, width: 18 }} />
const labelsCheckbox = ['Candidatos actuales', 'Candidatos nuevos']
const optionsSelect = ['option1', 'option2', 'option3']

export default function () {
    // const [checkedCheckbox, setCheckedCheckbox] = useState('')
    const [itemSelect, setItemSelect] = React.useState('')
    const _handleChangeItemSelect = event => {
        setItemSelect(event.target.value)
    }
    const numberSelecteds = 5
    // const _handleChangeCurrentCandidates = event => {
    //     setCheckedCheckbox(event.target.value)
    // }

    return (
        <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
            <SelectCandidates
                closeIcon={closeIcon}
                // onChangeIndeterminateCandidates={onChangeIndeterminateCandidates}
                // checkedCurrentCandidates={checkedCurrentCandidates}
                // onChangeCurrentCandidates={_handleChangeCurrentCandidates}
                // checkedcandidatesToCome={checkedcandidatesToCome}
                // onChangecandidatesToCome={onChangecandidatesToCome}
                // onChangeCheckboxItem={() => {}}
                numberSelecteds={numberSelecteds}
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
