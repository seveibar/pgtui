-- Generated by pgtui

SELECT
    meter.meter_id,
    meter.account_id,
    meter.endpoint_id,
    meter.endpoint_name,
    meter.meter_name,
    meter.meter_key,
    meter.description,
    meter.output_type,
    meter.output,
    meter.last_modified_at,
    meter.created_at
FROM
    public.meter;


ALTER TABLE api.meter OWNER TO api_user;


