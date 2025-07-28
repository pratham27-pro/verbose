export interface AuthServiceProps {
    login: (username: string, password: string) => Promise<any>;
    isLoggedIn: boolean;
    logout: () => void;
    refreshAccessToken: () => Promise<void>;
    register: (username: string, password: string) => Promise<any>;
}
