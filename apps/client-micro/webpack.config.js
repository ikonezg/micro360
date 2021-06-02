const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.base.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "client-micro"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      
        // For remotes (please adjust)
        name: "client-micro",
        filename: "remoteEntry.js",
        exposes: {
            './Component': './apps/client-micro/src/app/app.component.ts',
        },        
        
        // For hosts (please adjust)
        // remotes: {
        //     "poc-shell": "poc-shell@http://localhost:4000/remoteEntry.js",
        //     "micro1": "micro1@http://localhost:5000/remoteEntry.js",

        // },

        shared: {
          "@angular/core": { singleton: true, strictVersion: true }, 
          "@angular/common": { singleton: true, strictVersion: true }, 
          "@angular/router": { singleton: true, strictVersion: true },
          "@angular/common/http": { singleton: true, strictVersion: true },
          ...sharedMappings.getDescriptors()
        }
        
    }),
    sharedMappings.getPlugin(),
  ],
};
