-- Generated by pgtui

CREATE TRIGGER meter_limit_checker_trigger
    BEFORE INSERT ON public.meter
    FOR EACH ROW
    EXECUTE PROCEDURE public. meter_limit_checker ();

