SELECT
  concat(
    `b`.`ticket_id`,
    date_format(`a`.`create_time`, '%Y-%m-%d')
  ) AS `id`,
  `c`.`ticket_name` AS `ticket_name`,
  `b`.`ticket_id` AS `ticket_id`,
  date_format(`a`.`create_time`, '%Y-%m-%d') AS `t_day`,
  count(0) AS `sum`
FROM
  (
    (
      `dstamp`.`tr_transfer` `a`
      LEFT JOIN `dstamp`.`collection` `b` ON((`a`.`collection_id` = `b`.`id`))
    )
    LEFT JOIN `dstamp`.`ticket` `c` ON((`b`.`ticket_id` = `c`.`id`))
  )
WHERE
  (`a`.`transfer_type` = 2)
GROUP BY
  `t_day`,
  `b`.`ticket_id`