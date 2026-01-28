SELECT
  yearweek(`dstamp`.`user`.`create_time`, 0) AS `c_week`,
  count(0) AS `sum`
FROM
  `dstamp`.`user`
GROUP BY
  `c_week`
ORDER BY
  `c_week`