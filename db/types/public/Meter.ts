export default interface Meter {
    meter_id: string;
    account_id: string;
    endpoint_id: string | null;
    endpoint_name: string | null;
    meter_name: string;
    meter_key: string;
    description: string;
    output_type: string;
    output: object | null;
    last_modified_at: Date;
    created_at: Date;
}

export interface MeterInitializer {
    meter_id?: string;
    account_id: string;
    endpoint_id?: string | null;
    endpoint_name?: string | null;
    meter_name: string;
    meter_key: string;
    description: string;
    output_type: string;
    output?: object | null;
    last_modified_at?: Date;
    created_at?: Date;
}
