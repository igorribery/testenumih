export interface User {
    avatar_url: string,
    login: string,
    name: string,
    bio: string | null,
    location: string | null,
    followers: number,
    following: number,
    email: string | null,
    repos: number,
    public_repos: number
}