import * as C from './styles';
import { useNavigate, useParams} from 'react-router-dom';
import { useEffect, ReactNode } from 'react';
import { userContext } from '../../contexts/userContext';
import { Header } from '../Header';
import { MdLocationPin } from 'react-icons/md';

type Props = {
    children: ReactNode
}

export const Theme = ({ children }: Props) => {

    const navigate = useNavigate();
    const { user } = useParams();
    const { userData } = userContext();



    useEffect(() => {
        if(userData === null) {
            navigate('/')
        }
    }, [userData])

    const handleFollowers = () => {
        navigate(`/profile/${user}/followers`)
    }
    const handleFollowing = () => {
        navigate(`/profile/${user}/following`)
    }
    
    return (
        <C.Container>
            <C.Area>
                <Header />

                <C.InfoArea>
                    <C.SideBar>
                        <img src={userData?.avatar_url} alt={userData?.login} />
                        <h2>{userData?.name}</h2>
                        <p>{userData?.login}</p>

                        
                        <span>{userData?.bio}</span> 
                        

                        <C.FollowArea>
                            <C.Followers>
                                <p onClick={handleFollowers}>Seguidores</p>
                                <span>{userData?.followers}</span>
                            </C.Followers>

                            <C.Following>
                                <p onClick={handleFollowing}>Seguindo</p>
                                <span>{userData?.following}</span>
                            </C.Following>
                        </C.FollowArea>

                        <C.OtherInfos>
                            
                         {userData?.location &&
                            <C.Location>
                                <p>
                                    <MdLocationPin />
                                <span>{userData?.location}</span>
                                </p>
                            </C.Location>
                         }  
                        </C.OtherInfos>

                        
                    </C.SideBar>

                    <C.Page>
                        {children}
                    </C.Page>
                </C.InfoArea>
            </C.Area>
        </C.Container>
    )
}