export default interface Endpoint {
    endpoint_id: string;
    endpoint_name: string;
    endpoint_key: string;
    endpoint_options: object | null;
    endpoint_url: string | null;
    official: boolean;
    owner_account_id: string | null;
    public: boolean;
    created_at: Date;
}

export interface EndpointInitializer {
    endpoint_id?: string;
    endpoint_name: string;
    endpoint_key: string;
    endpoint_options?: object | null;
    endpoint_url?: string | null;
    official?: boolean;
    owner_account_id?: string | null;
    public?: boolean;
    created_at?: Date;
}
