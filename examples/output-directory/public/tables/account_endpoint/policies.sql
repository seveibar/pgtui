CREATE POLICY account_endpoint_access ON public.account_endpoint FOR ALL TO api_user USING (account_id = public.auth_account_id ());
