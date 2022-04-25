export default interface AccountTree {
    account_tree_id: string;
    account_id: string;
    tree_id: string;
    state: object;
    complete: boolean;
    last_modified_at: Date;
    created_at: Date;
}

export interface AccountTreeInitializer {
    account_tree_id?: string;
    account_id: string;
    tree_id: string;
    state?: object;
    complete?: boolean;
    last_modified_at?: Date;
    created_at?: Date;
}
