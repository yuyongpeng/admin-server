SELECT
  date_format(`carole-admin`.`user`.`create_time`, '%Y-%m-%d') AS `c_day`,
  count(0) AS `sum`
FROM
  `carole-admin`.`user`
GROUP BY
  `c_day`
ORDER BY
  `c_day`