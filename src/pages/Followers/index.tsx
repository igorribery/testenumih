import { useParams } from 'react-router-dom';
import { Theme } from '../../components/Theme';
import { useEffect, useState} from 'react'
import * as C from './styles';
import api from '../../services/api';
import { FollowingItem } from '../../components/FollowingItem';
import { PageActions, userContext } from '../../contexts/userContext';
import { Pagination } from '../../components/Pagination';

export const Followers = () => {
    const { user } = useParams();
    const { followers, setFollowers, dispatch } = userContext();

    const [currentPage, setCurrentPage] = useState(1);

    const followersPerPage = 10;
    const start = (currentPage - 1) * followersPerPage;
    const end = start + followersPerPage;
    const currentfollowers = followers.slice(start, end);
    const totalFollowers = Math.ceil(followers.length / 10);
       
    useEffect(() => {
        dispatch({
            type: PageActions.setCurrentPage,
            payload: 2
        });
        
    }, [])

    useEffect(() => {
        loadfollowers()
    }, [user]);

    const loadfollowers = async () => {
        
        try {
            const res = await api.get(`/users/${user}/followers`, {
                params: {
                    per_page: 100,
                },
            });
            const data = res.data;
            setFollowers(data);

        } catch (error: unknown) {
            if(error instanceof Error) {
                console.error('Erro ao carregar seguindos:', error.message)
            }
            throw new Error('Não foi possível carregar os seguindos.')
        }
    } 

    const handleNextFollowers = () => {
        if(currentPage === totalFollowers) {
            return;
        }
         setCurrentPage((prevPage) => prevPage + 1);
    };

    const handlePreviousFollowers = () => {

        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage -1);
        }     
    }

  
    return (
        <Theme>
            {followers.length === 0 &&
                <div>Usuário não está seguindo ninguém.</div>
            }

            <C.Container>
                {currentfollowers.map((item, index) => (
                    <FollowingItem key={index} item={item} />
                ))}
            </C.Container>

            <Pagination 
                handlePrev={handlePreviousFollowers}
                handleNext={handleNextFollowers} 
                currentPage={currentPage} 
                total={totalFollowers}
            />
            
        </Theme>
    )
}
