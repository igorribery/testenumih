import * as C from './styles';
import { User } from '../../types/user';
import { MdLocationPin } from 'react-icons/md'
import { useNavigate, useParams } from 'react-router-dom';


export const Users = ( {avatar_url, login, location, followers, following}: User ) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/profile/${login}/repositories`); 
        
    }


    return (

         <C.Container>
                <img src={avatar_url} alt={login} />
                <h2>{login}</h2>
                <C.Location>
                    {location &&
                        <p>
                            <MdLocationPin />
                            <span>{location}</span>
                        </p>
                    }
                </C.Location>
                <C.InfoArea>

                    <C.Followers>
                        <h4>Seguidores</h4>
                        <p>{followers}</p>
                    </C.Followers>

                    <C.Following>
                        <h4>Seguindo</h4>
                        <p>{following}</p>
                    </C.Following>

                </C.InfoArea>

                <button onClick={handleClick}>Ver informações</button>
                
         </C.Container>
        
    )
}