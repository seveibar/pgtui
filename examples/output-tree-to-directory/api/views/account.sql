-- Generated by pgtui

SELECT
    account.account_id,
    account.account_num,
    account.account_name,
    account.email,
    account.auth0_id,
    account.last_active_at,
    account.created_at
FROM
    public.account;


ALTER TABLE api.account OWNER TO api_user;


