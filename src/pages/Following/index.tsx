import { useParams } from 'react-router-dom';
import { Theme } from '../../components/Theme';
import { useEffect, useState} from 'react'
import * as C from './styles';
import api from '../../services/api';
import { FollowingItem } from '../../components/FollowingItem';
import { PageActions, userContext } from '../../contexts/userContext';
import { Pagination } from '../../components/Pagination';

export const Following = () => {
    const { user } = useParams();
    const { following, setFollowing, dispatch } = userContext();

    const [currentPage, setCurrentPage] = useState(1);

    const followingPerPage = 10;
    const start = (currentPage - 1) * followingPerPage;
    const end = start + followingPerPage;
    const currentFollowing = following.slice(start, end);
    const totalFollowing = Math.ceil(following.length / 10);

    useEffect(() => {
        dispatch({
            type: PageActions.setCurrentPage,
            payload: 3
        });
        
    }, [])

    useEffect(() => {
        loadFollowing()
    }, [user]);

    const loadFollowing = async () => {
        
        try {
            const res = await api.get(`/users/${user}/following`, {
                params: {
                    per_page: 100,
                },
            });
            const data = res.data;
            setFollowing(data);

        } catch (error: unknown) {
            if(error instanceof Error) {
                console.error('Erro ao carregar seguindos:', error.message)
            }
            throw new Error('Não foi possível carregar os seguindos.')
        }
    } 

    const handleNextFollowing = () => {
        if(currentPage === totalFollowing) {
            return;
        }
         setCurrentPage((prevPage) => prevPage + 1);
    };

    const handlePreviousFollowing = () => {

        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage -1);
        }     
    }
  
    return (
        <Theme>
            {following.length === 0 &&
                <div>Usuário não está seguindo ninguém.</div>
            }

            <C.Container>
                {currentFollowing.map((item) => (
                    <FollowingItem key={item.id} item={item} />
                ))}
            </C.Container>

            {following.length > 0 &&
                <Pagination 
                    handlePrev={handlePreviousFollowing} 
                    handleNext={handleNextFollowing} 
                    currentPage={currentPage}
                    total={totalFollowing}
                />
            }
        </Theme>
    )
}