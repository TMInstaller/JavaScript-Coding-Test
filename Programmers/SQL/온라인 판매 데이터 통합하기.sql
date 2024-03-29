SELECT *
FROM (
    SELECT SUBSTR(SALES_DATE,1,10) AS SALES_DATE, PRODUCT_ID, USER_ID, SALES_AMOUNT
    FROM ONLINE_SALE
    UNION ALL
    SELECT SUBSTR(SALES_DATE,1,10) AS SALES_DATE, PRODUCT_ID, NULL AS USER_ID, SALES_AMOUNT
    FROM OFFLINE_SALE
) AS ON_OFF_SALE
WHERE SALES_DATE REGEXP '^2022-03'
ORDER BY SALES_DATE, PRODUCT_ID, USER_ID;