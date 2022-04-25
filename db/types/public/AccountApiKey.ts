export default interface AccountApiKey {
    account_api_key_id: string;
    account_id: string;
    key_string: string;
    purpose: string | null;
    last_used_at: Date;
    created_at: Date;
}

export interface AccountApiKeyInitializer {
    account_api_key_id?: string;
    account_id: string;
    key_string?: string;
    purpose?: string | null;
    last_used_at?: Date;
    created_at?: Date;
}
