CREATE OR REPLACE VIEW
  public.view_effect_contract_lease_items AS
SELECT
  (
    'S-'::TEXT || contract_plan_lease_items.contract_id
  )::CHARACTER VARYING AS effect_contract_id,
  contract_plan_lease_items.id
FROM
  contract_plan_lease_items
WHERE
  contract_plan_lease_items.contract_id IS NOT NULL
UNION ALL
SELECT
  (
    (
      ('L-'::TEXT || contract_items.contract_id) || '-'::TEXT
    ) || contract_items.id
  )::CHARACTER VARYING AS effect_contract_id,
  contract_plan_lease_items.id
FROM
  contract_plan_lease_items
  JOIN contract_plans ON contract_plans.id = contract_plan_lease_items.contract_plan_id
  JOIN contract_items ON contract_items.contract_plan_id = contract_plans.id
WHERE
  contract_plan_lease_items.contract_plan_id IS NOT NULL
  AND contract_items.contract_id IS NOT NULL;