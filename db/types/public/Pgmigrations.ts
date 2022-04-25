export default interface Pgmigrations {
    id: number;
    name: string;
    run_on: Date;
}

export interface PgmigrationsInitializer {
    id: number;
    name: string;
    run_on: Date;
}
