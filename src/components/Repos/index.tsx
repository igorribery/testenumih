import { RepositoryUser } from '../../types/RepositoryUser'
import { Pagination } from '../Pagination';
import * as C from './styles';

type Props = {
    item: RepositoryUser,
}

export const Repos = ( { item }: Props ) => {
    return (
        <C.Container>
            <C.InfoLeft>
                <h1>{item.name}</h1>
                <span>{item.description}</span>                     
                <p>{item.language}</p>
            </C.InfoLeft>
                 
            <C.InfoRight>
                    <p>Stars: {item.stargazers_count}</p>
                    <p>Forks: {item.forks}</p> 
            </C.InfoRight>
        </C.Container>
    )
}