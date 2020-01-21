export type CardCandidateProps = {
    _id: number,
    checked: boolean,
    classes: object,
    firstName: string,
    src: string,
    lastName: string,
    onChangeCheckbox: Function
};

declare const CardCandidate: React.ComponentType<CardCandidateProps>;

export default CardCandidate;