import * as C from './styles'

type Props = {
    handlePrev: () => void,
    handleNext: () => void,
    currentPage: number,
    total: number
}

export const Pagination = ({ handlePrev, handleNext, currentPage, total }: Props) => {
    return (
        <C.Container>
            <C.PageAction>
                <C.ButtonPrev onClick={handlePrev} prev={currentPage === 1}> Previous </C.ButtonPrev>
                
                    <p>{currentPage}</p>
                <C.ButtonNext onClick={handleNext} next={currentPage === total}> Next </C.ButtonNext>         
            </C.PageAction>
        </C.Container>
    )
}