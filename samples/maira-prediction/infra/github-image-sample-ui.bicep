
// param location string
// param appSKU string
// param servicePlan string
// param appName string

// resource imageToFindingsSampleAppServicePlan 'Microsoft.Web/serverfarms@2022-09-01' = {
//   name: servicePlan
//   location: location
//   sku: {
//     name: appSKU
//     tier: appSKU
//   }
//   properties: {
//     reserved: true
//   }
//   kind: 'app,linux'
// }

// resource imageToFindingsSampleAppService 'Microsoft.Web/sites@2022-09-01' = {
//   name: appName
//   location: location
//   properties: {
//     httpsOnly: true
//     serverFarmId: imageToFindingsSampleAppServicePlan.id
//     siteConfig: {
//       linuxFxVersion: 'NODE|18-lts'
//       appSettings: [
//         {
//           name: 'WEBSITE_RUN_FROM_PACKAGE'
//           value: '1'
//         }
//       ]
//     }
//   }
// }


param staticSites_SampleDemo_name string = 'maira-demo-sample' // provide static site name
param location string
param appSKU string

resource staticSites_SampleDemo_name_resource 'Microsoft.Web/staticSites@2023-01-01' = {
  name: staticSites_SampleDemo_name
  location: location // change the deployment location based as needed
  sku: {
    name: appSKU
    tier: appSKU
  }
  properties: {
    repositoryToken:'' // provide PAT here
    repositoryUrl: 'https://github.com/justin73/azure-health-data-and-ai-samples.git' //TODO : change it before merging the fork
    branch: 'main'
    stagingEnvironmentPolicy: 'Enabled'
    allowConfigFileUpdates: true
    provider: 'GitHub'
    enterpriseGradeCdnStatus: 'Disabled'
    buildProperties: {
      apiLocation: '' // Location of your API's source code, set to '' if not applicable
      appArtifactLocation: '' // The folder that your build outputs to, adjust if needed
      appLocation: '/samples/maira-prediction/image-to-findings-app/build' // The folder that your build outputs to, adjust if needed
    }
  }
}

resource staticSites_SampleDemo_name_default 'Microsoft.Web/staticSites/basicAuth@2023-01-01' = {
  parent: staticSites_SampleDemo_name_resource
  name: 'default'
  properties: {
    applicableEnvironmentsMode: 'SpecifiedEnvironments'
  }
}
