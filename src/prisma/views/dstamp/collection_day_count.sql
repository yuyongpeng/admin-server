SELECT
  date_format(`dstamp`.`collection`.`trade_time`, '%Y-%m-%d') AS `t_day`,
  count(0) AS `sum`
FROM
  `dstamp`.`collection`
WHERE
  (`dstamp`.`collection`.`trade_time` IS NOT NULL)
GROUP BY
  `t_day`,
  `dstamp`.`collection`.`ticket_id`
ORDER BY
  `dstamp`.`collection`.`trade_time`