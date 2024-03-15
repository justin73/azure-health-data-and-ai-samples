param staticSites_SampleDemo_name string = 'maira-demo-sample' // provide static site name

resource staticSites_SampleDemo_name_resource 'Microsoft.Web/staticSites@2023-01-01' = {
  name: staticSites_SampleDemo_name
  location: 'Central US' // change the deployment location based as needed
  sku: {
    name: 'Free'
    tier: 'Free'
  }
  properties: {
    repositoryToken:'' // provide PAT here
    repositoryUrl: 'https://github.com/abhirohatgi/azure-health-data-and-ai-samples.git' //TODO : change it before merging the fork
    branch: 'feat/001/setup-remix-framework'
    stagingEnvironmentPolicy: 'Enabled'
    allowConfigFileUpdates: true
    provider: 'GitHub'
    enterpriseGradeCdnStatus: 'Disabled'
    buildProperties: {
      apiLocation: '' // Location of your API's source code, set to '' if not applicable
      appArtifactLocation: '' // The folder that your build outputs to, adjust if needed
      appLocation: '/samples/maira-prediction/image-to-findings-app' // The folder that your build outputs to, adjust if needed
      outputLocation: '/samples/maira-prediction/image-to-findings-app/build/server' // Location of your app's source code relative to your repo's root
    }
  }
}

resource staticSites_SampleDemo_name_default 'Microsoft.Web/staticSites/basicAuth@2023-01-01' = {
  parent: staticSites_SampleDemo_name_resource
  name: 'default'
  location: 'Central US' // change the deployment location based as needed
  properties: {
    applicableEnvironmentsMode: 'SpecifiedEnvironments'
  }
}
