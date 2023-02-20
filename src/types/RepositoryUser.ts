export interface RepositoryUser {
    login: string,
    name: string,
    description: string | null,
    language: string,
    forks: number,
    stargazers_count: number   
}