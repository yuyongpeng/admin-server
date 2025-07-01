SELECT
  date_format(
    `carole-admin`.`collection`.`trade_time`,
    '%Y-%m-%d'
  ) AS `t_day`,
  count(0) AS `sum`
FROM
  `carole-admin`.`collection`
WHERE
  (
    `carole-admin`.`collection`.`trade_time` IS NOT NULL
  )
GROUP BY
  `t_day`,
  `carole-admin`.`collection`.`ticket_id`
ORDER BY
  `carole-admin`.`collection`.`trade_time`