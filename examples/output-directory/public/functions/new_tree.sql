CREATE FUNCTION public.new_tree ()
    RETURNS trigger
    LANGUAGE plpgsql
    AS $EOFCODE$
BEGIN
    IF NEW.tree_name IS NULL THEN
        NEW.tree_name := 'Tree ' || NEW.tree_num;
    END IF;
    IF NEW.tree_key IS NULL THEN
        NEW.tree_key := 'tree_' || NEW.tree_num;
    END IF;
    IF NEW.tree_def IS NULL THEN
        NEW.tree_def := '{"New Tree":{"name":"New Tree","description": "What is the first thing you will unlock?"}}';
    END IF;
    RETURN NEW;
END
$EOFCODE$;
