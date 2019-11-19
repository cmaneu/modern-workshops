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