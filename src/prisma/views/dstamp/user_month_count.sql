SELECT
  concat(
    year(`dstamp`.`user`.`create_time`),
    MONTH(`dstamp`.`user`.`create_time`)
  ) AS `id`,
  year(`dstamp`.`user`.`create_time`) AS `c_year`,
  MONTH(`dstamp`.`user`.`create_time`) AS `c_month`,
  count(0) AS `sum`
FROM
  `dstamp`.`user`
GROUP BY
  `c_year`,
  `c_month`
ORDER BY
  `c_year`,
  `c_month`