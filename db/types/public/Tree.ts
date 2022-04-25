export default interface Tree {
    tree_id: string;
    tree_num: number;
    tree_name: string | null;
    tree_key: string | null;
    owner_id: string;
    tree_def: object;
    public: boolean;
    last_modified_at: Date;
    created_at: Date;
}

export interface TreeInitializer {
    tree_id?: string;
    tree_num: number;
    tree_name?: string | null;
    tree_key?: string | null;
    owner_id: string;
    tree_def: object;
    public?: boolean;
    last_modified_at?: Date;
    created_at?: Date;
}
