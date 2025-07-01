SELECT
  concat(
    `a`.`ticket_id`,
    date_format(`a`.`trade_time`, '%Y-%m-%d')
  ) AS `id`,
  `b`.`ticket_name` AS `ticket_name`,
  `a`.`ticket_id` AS `ticket_id`,
  date_format(`a`.`trade_time`, '%Y-%m-%d') AS `t_day`,
  count(0) AS `sum`
FROM
  (
    `carole-admin`.`collection` `a`
    LEFT JOIN `carole-admin`.`ticket` `b` ON((`a`.`ticket_id` = `b`.`id`))
  )
WHERE
  (`a`.`trade_time` IS NOT NULL)
GROUP BY
  `t_day`,
  `a`.`ticket_id`
ORDER BY
  `a`.`trade_time`