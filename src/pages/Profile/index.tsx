import * as C from './styles';
import api from '../../services/api';
import { Theme } from '../../components/Theme';
import { useState, useEffect, ChangeEvent } from 'react'
import { useParams } from 'react-router-dom';
import { Repos } from '../../components/Repos';
import { PageActions, userContext } from '../../contexts/userContext';
import { RepositoryUser } from '../../types/RepositoryUser'
import { Pagination } from '../../components/Pagination';

export const Profile = () => {
    const { user } = useParams();
    const { repos, setRepos, dispatch } = userContext();

    const [searchRepos, setSearchRepos] = useState<RepositoryUser[]>([]);
    const [searchText, setSearchText] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

   
    // useEffects

    useEffect(() => {
        dispatch({ type: PageActions.setCurrentPage, payload: 1})
    }, []);

    useEffect(() => {
        loadSearch()
    }, [searchText]); 


     useEffect(() => { 
        loadRepos();  
    }, [user]); 

    // reqs e filter API

    const loadRepos = async () => {
            
        try {
            const res = await api.get(`/users/${user}/repos`, {
                params: {
                    per_page: 100
                }
            });
            const data = res.data;
             setRepos(data);
         } catch (e) {
            return `Nós temos um erro: ${e}`;
        }        
    } 

    // Select Sort

    useEffect(() => {
        if(selectedOption === 'name') {
            sortByName();  
        } 
        if(selectedOption === 'stars') {
            sortStars();
        }
    }, [selectedOption]);

    const loadSearch = () => {
        const reposFiltered = [...repos].filter(item => item.name.includes(searchText) || item.description?.includes(searchText));
        setSearchRepos(reposFiltered);
        
    } 
    
    const handleOptionChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = e.target.value;
        setSelectedOption(selectedValue);
    }

     const sortByName = () => {
        const sortRepos = [...repos].sort((a, b) => a.name.localeCompare(b.name));
        setRepos(sortRepos);
    } 
    
    const sortStars = () => {
        const sortStarRepos = [...repos].sort((a, b) => b.stargazers_count - a.stargazers_count);
        setRepos(sortStarRepos);   
    }

    // Pagination

    const repoPerPage = 10;
    const start = (currentPage - 1) * repoPerPage;
    const end = start + repoPerPage;
    const currentRepo = repos.slice(start, end);
    const currentSearchRepo = searchRepos.slice(start, end);

    const totalRepo = Math.ceil(repos.length / 10);

    const handleNextRepos = () => {
        if(currentPage === totalRepo) {
            return;
        }
        setCurrentPage((prevPage) => prevPage + 1);
    }

    const handlePrevRepos = () => {
        if(currentPage === 1) {
            return;
        }
        setCurrentPage((prevPage) => prevPage - 1);
    }


    return (
        <Theme>
            <C.SearchArea>
                <C.Search>
                        <C.Input type='text' placeholder='Find a repository...'
                            value={searchText}
                            onChange={e => setSearchText(e.target.value)}
                        />   
                </C.Search>
                <C.SelectArea>
                    <label htmlFor="sort-by">Sort:</label>
                    <C.Select value={selectedOption} onChange={handleOptionChange}>
                        <option>Select order</option>
                        <option value="name">Name</option>
                        <option value="stars">Stars</option>
                    </C.Select>
                </C.SelectArea>  
            </C.SearchArea>

            {searchText === '' &&
            <C.Container> 
                {currentRepo.map((item) => (
                    <Repos key={item.name} item={item}  />
                ))}
            </C.Container>
            }

            {searchText !== '' &&
                <C.Container>
                    {currentSearchRepo.map((item) => (
                        <Repos key={item.name} item={item}  />
                    ))}
                </C.Container>
            }
            {repos.length === 0 &&
                <C.Container>
                    <div>Usuário não tem nenhum repositório.</div>
                </C.Container>
            }
            <Pagination 
                handlePrev={handlePrevRepos}
                handleNext={handleNextRepos} 
                currentPage={currentPage}
                total={totalRepo}
            />
        </Theme>
    )
}
