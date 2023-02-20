import * as C from './styles';
import { BsSearch } from 'react-icons/bs';
import { useState } from 'react';
import { User } from '../../types/user';
import { Users } from '../../components/Users';
import { Erro } from '../../components/Erro'; 
import { fetchUserData, userContext } from '../../contexts/userContext';

export const Home = () => {
    const {userData, setUserData, isLoading, setIsLoading, error, setError} = userContext();
    const [userName, setUserName] = useState('');

    const clearStats = () => {
        setUserName('');
        setUserData(null);
        setIsLoading(true);
        setError(false);
    }

    const loadUser = async (userName: string) => {
        clearStats();
        
         try {
            const res = await fetchUserData(userName);
            setUserData(res as User);
            setIsLoading(false);

        } catch (error) {
            setError(true);
            setIsLoading(false);
        } 
    }

     const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Enter") {
            loadUser(userName);
        }
    }


    return (

        <C.Container>

            <h1>GitHub</h1>

            <C.SearchArea>
                <h2>Busque por um usuário:</h2>
                
                <p>Conheça os repositórios</p>
                
               
                
                <C.Input>
                    <input type='text' 
                        placeholder='Digite o nome do usuário'
                        value={userName} 
                        onChange={(e) => setUserName(e.target.value)}
                        onKeyDown={handleKeyDown}
                        />
                    
                    <button onClick={() => loadUser(userName)}>
                        <BsSearch />
                    </button>
                </C.Input>

            </C.SearchArea>

            {userData && <Users {...userData} />}
            {error && <Erro />}
            {isLoading &&
                <div>Carregando...</div>
            }

        </C.Container>
    )
}