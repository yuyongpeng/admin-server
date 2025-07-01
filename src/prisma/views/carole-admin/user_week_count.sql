SELECT
  yearweek(`carole-admin`.`user`.`create_time`, 0) AS `c_week`,
  count(0) AS `sum`
FROM
  `carole-admin`.`user`
GROUP BY
  `c_week`
ORDER BY
  `c_week`