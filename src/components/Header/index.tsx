import * as C from './styles';
import { userContext } from '../../contexts/userContext';
import { useNavigate, useParams } from 'react-router-dom';
import { BsGithub } from 'react-icons/bs';
import { fetchUserData } from '../../contexts/userContext';
import { useState } from 'react';
import { User } from '../../types/user';


export const Header = () => {

    const navigate = useNavigate();
    const { user } = useParams();
    const { state, userData, setUserData } = userContext();
    const [newUser, setNewUser] = useState('')

    const handleRepo = () => {
        navigate(`/profile/${user}/repositories`)
    }
    const handleFollowers = () => {
        navigate(`/profile/${user}/followers`)
    }
    const handleFollowing = () => {
        navigate(`/profile/${user}/following`)
    }
    const handleClick = () => {
        navigate('/');
        setUserData(null);     
    }

    const loadNewUser = async (newUser: string) => {
        try {
            const res = await fetchUserData(newUser);
            setUserData(res as User);
            setNewUser('')

        } catch (e) {
            alert('Usuário não encontrado.')
            navigate(`/profile/${userData?.login}`)
            setNewUser('')
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.code === 'Enter') {
            loadNewUser(newUser);
            navigate(`/profile/${newUser}/repositories`)
        }
    }

    return (
        <C.Container>
            <C.Header>
                <BsGithub onClick={handleClick} />
                <C.Input type='text' placeholder='Search...'
                    value={newUser}
                    onChange={e => setNewUser(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                    
                
                <C.Infos>
                    <C.Repo 
                        onClick={handleRepo} $page={state.currentPage === 1 }>
                        Repositories
                        <span>{userData?.public_repos}</span>
                    </C.Repo>
                    <C.Followers 
                        onClick={handleFollowers} $page={state.currentPage === 2 }>
                        Followers 
                        <span>{userData?.followers}</span>
                    </C.Followers>
                    <C.Following 
                        onClick={handleFollowing} $page={state.currentPage === 3}>
                        Following
                        <span>{userData?.following}</span>
                    </C.Following>
                </C.Infos>
            </C.Header>

        </C.Container>
    )
}
