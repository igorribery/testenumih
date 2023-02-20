import { createContext, ReactNode, useContext, useReducer } from "react";
import api from "../services/api"
import { User } from "../types/user";
import React from "react";
import { RepositoryUser } from "../types/RepositoryUser";
import { FollowersType } from "../types/followers";

// Fetch a API

export const fetchUserData = async (userName: string) => {
    try {
        const res = await api.get(`users/${userName}`);
        return res.data;
        
    } catch(e) {
        if(e instanceof Response) {
            throw new Error
        } else {
            throw e;
        }
    }
}

// Context

interface userDataProps  {
    userData: User | null, setUserData: (data: User | null) => void,
    repos: RepositoryUser[], setRepos: (data: RepositoryUser[]) => void,
    followers: FollowersType[], setFollowers: (data: FollowersType[]) => void;
    following: FollowersType[], setFollowing: (data: FollowersType[]) => void,
    isLoading: boolean, setIsLoading: (isLoading: boolean) => void,
    error: boolean, setError: (error: boolean) => void,
    state: ActualPage, dispatch: (action: Action) => void
}

const UserDataContext = createContext<userDataProps>({
    userData: null, setUserData: () => {},
    repos: [], setRepos: () => {},
    followers: [], setFollowers: () => {},
    following: [], setFollowing: () => {},
    isLoading: false, setIsLoading: () => {},
    error: false, setError : () => {},
    state: {currentPage: 0}, dispatch: () => {}  
});

// reducer

interface ActualPage {
    currentPage: number
}

const initialState: ActualPage = {
    currentPage: 0
}

type Action = {
    type: PageActions,
    payload: number
}

export enum PageActions {
    setCurrentPage,
}

const pageReducer = (state: ActualPage, action: Action) => {
    switch(action.type) {
        case PageActions.setCurrentPage:
            return {...state, currentPage: action.payload};

        default:
            return state;
    }
}

// Provider

type ChildrenProps = {
    children: ReactNode
}

export const UserDataProvider = ( { children }: ChildrenProps ) => {
    
    const [userData, setUserData] = React.useState<User | null>(null);
    const [repos, setRepos] = React.useState<RepositoryUser[]>([]);
    const [followers, setFollowers] = React.useState<FollowersType[]>([]);
    const [following, setFollowing] = React.useState<FollowersType[]>([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [state, dispatch] = useReducer(pageReducer, initialState);
    
    const value = {
        userData, setUserData, 
        repos, setRepos, 
        followers, setFollowers,
        following, setFollowing,
        isLoading, setIsLoading, 
        error, setError, 
        state, dispatch
    };

    return (
        <UserDataContext.Provider value={value}>
            {children}
        </UserDataContext.Provider>
    )
}

// Hook 

export const userContext = () => {
    const context = useContext(UserDataContext);

    if(context === undefined) {
        throw new Error('userContext precisa ser usado dentro do UserDataProvider')
    } 
    return context;
}


