# How to simply instanciate a specific VM in Azure

<a href="https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2Fcmaneu%2Fmodern-workshops%2Fmaster%2Fsamples%2Fsimple-vm-lb-setup-azure%2Fazuredeploy.json" target="_blank">
    <img src="https://raw.githubusercontent.com/Azure/azure-quickstart-templates/master/1-CONTRIBUTION-GUIDE/images/deploytoazure.png"/>
</a>


```bash
az group create --name DEMO-chris-1 --location "West Europe"
az group deployment create \
  --name SimpleLBVMDeployment1 \
  --resource-group DEMO-chris-1 \
  --template-file azuredeploy.json \
  --parameters storageAccountName=chmavmlogs dnsNameforLBIP=chma-dev01
```