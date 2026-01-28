SELECT
  date_format(`a`.`create_time`, '%Y-%m-%d') AS `t_day`,
  count(0) AS `sum`
FROM
  (
    `dstamp`.`tr_transfer` `a`
    LEFT JOIN `dstamp`.`collection` `b` ON((`a`.`collection_id` = `b`.`id`))
  )
WHERE
  (`a`.`transfer_type` = 2)
GROUP BY
  `t_day`