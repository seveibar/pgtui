export default interface AccountEndpoint {
    account_endpoint_id: string;
    account_id: string;
    endpoint_id: string;
    params: object;
    run_frequency_secs: number;
    error: string | null;
    last_run_at: Date;
    created_at: Date;
}

export interface AccountEndpointInitializer {
    account_endpoint_id?: string;
    account_id: string;
    endpoint_id: string;
    params?: object;
    run_frequency_secs?: number;
    error?: string | null;
    last_run_at?: Date;
    created_at?: Date;
}
