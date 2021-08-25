CREATE TABLE public.account_endpoint (
    account_endpoint_id uuid DEFAULT (gen_random_uuid ()) NOT NULL,
    account_id uuid NOT NULL,
    endpoint_id uuid NOT NULL,
    params jsonb DEFAULT ('{}'::jsonb) NOT NULL,
    run_frequency_secs int DEFAULT (300) NOT NULL,
    error text,
    last_run_at pg_catalog.timestamptz DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
    created_at pg_catalog.timestamptz DEFAULT (CURRENT_TIMESTAMP) NOT NULL
);


ALTER TABLE public.account_endpoint OWNER TO postgres;

ALTER TABLE ONLY public.account_endpoint
    ADD CONSTRAINT account_endpoint_pkey PRIMARY KEY (account_endpoint_id);

ALTER TABLE ONLY public.account_endpoint
    ADD CONSTRAINT account_endpoint_account_id_fkey FOREIGN KEY (account_id) REFERENCES public.account (account_id);

ALTER TABLE ONLY public.account_endpoint
    ADD CONSTRAINT account_endpoint_endpoint_id_fkey FOREIGN KEY (endpoint_id) REFERENCES public.endpoint (endpoint_id);

ALTER TABLE public.account_endpoint ENABLE ROW LEVEL SECURITY;
