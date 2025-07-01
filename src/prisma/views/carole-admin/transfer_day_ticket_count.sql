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
      `carole-admin`.`tr_transfer` `a`
      LEFT JOIN `carole-admin`.`collection` `b` ON((`a`.`collection_id` = `b`.`id`))
    )
    LEFT JOIN `carole-admin`.`ticket` `c` ON((`b`.`ticket_id` = `c`.`id`))
  )
WHERE
  (`a`.`transfer_type` = 2)
GROUP BY
  `t_day`,
  `b`.`ticket_id`