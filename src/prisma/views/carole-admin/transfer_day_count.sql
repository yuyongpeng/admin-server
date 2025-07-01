SELECT
  date_format(`a`.`create_time`, '%Y-%m-%d') AS `t_day`,
  count(0) AS `count(*)`
FROM
  (
    `carole-admin`.`tr_transfer` `a`
    LEFT JOIN `carole-admin`.`collection` `b` ON((`a`.`collection_id` = `b`.`id`))
  )
GROUP BY
  `t_day`