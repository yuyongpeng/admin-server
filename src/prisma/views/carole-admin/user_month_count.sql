SELECT
  concat(
    year(`carole-admin`.`user`.`create_time`),
    MONTH(`carole-admin`.`user`.`create_time`)
  ) AS `id`,
  year(`carole-admin`.`user`.`create_time`) AS `c_year`,
  MONTH(`carole-admin`.`user`.`create_time`) AS `c_month`,
  count(0) AS `sum`
FROM
  `carole-admin`.`user`
GROUP BY
  `c_year`,
  `c_month`
ORDER BY
  `c_year`,
  `c_month`