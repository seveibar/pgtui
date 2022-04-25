export default interface Account {
    account_id: string;
    account_num: number;
    account_name: string;
    email: string | null;
    auth0_id: string | null;
    last_active_at: Date;
    created_at: Date;
}

export interface AccountInitializer {
    account_id?: string;
    account_num: number;
    account_name: string;
    email?: string | null;
    auth0_id?: string | null;
    last_active_at?: Date;
    created_at?: Date;
}
