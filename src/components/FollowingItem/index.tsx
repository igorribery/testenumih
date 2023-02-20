import { FollowersType } from '../../types/followers';
import * as C from './styles';

type Props = {
    item: FollowersType
}

export const FollowingItem = ( { item }: Props ) => {
    return (
        <C.Container>
            <C.AvatarContainer>
                <img src={item.avatar_url} alt={item.login} />
            </C.AvatarContainer>

            <C.InfoContainer>
                <h1>{item.login}</h1>
            </C.InfoContainer>        
        </C.Container>
    )
}