# Simple Databases on Azure

## Create a MySQL Server quickly with Azure

```
az extension add --name db-up
az mysql up
az mysql show-connection-string
az mysql down --delete-group
```

## Create a PostgresSQL Server quickly with Azure

```
az extension add --name db-up
az postgres up
az postgres show-connection-string
az postgres down --delete-group
```

## Use Azure Data Studio

[Azure Data Studio](https://docs.microsoft.com/en-us/sql/azure-data-studio/download?view=sql-server-ver15&wt.mc_id=modernwsedu-github-chmaneu) as a free, multiplatform, opensource tool to connect, develop and use databases. It works with SQL Server, SQL Azure, and with extensions works with [PostgreSQL](https://docs.microsoft.com/en-us/sql/azure-data-studio/postgres-extension?view=sql-server-ver15&wt.mc_id=modernwsedu-github-chmaneu).

> MySQL or MariaDB is not supported at this time.