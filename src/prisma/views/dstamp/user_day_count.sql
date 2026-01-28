SELECT
  date_format(`dstamp`.`user`.`create_time`, '%Y-%m-%d') AS `c_day`,
  count(0) AS `sum`
FROM
  `dstamp`.`user`
GROUP BY
  `c_day`
ORDER BY
  `c_day`