const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.base.json'),
  []);

module.exports = {
  output: {
    uniqueName: "micro1"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      
        // For remotes (please adjust)
        name: "micro1",
        filename: "remoteEntry.js",
        exposes: {
            './Pokemon': './apps/micro1/src/app/widgets/pokemon/pokemon.component.ts',
            './Weather': './apps/micro1/src/app/widgets/weather/weather.component.ts',
        },        
        
        // For hosts (please adjust)
        // remotes: {
        //     "poc-shell": "poc-shell@http://localhost:4000/remoteEntry.js",

        // },

        shared: {
          "@angular/core": { singleton: true, strictVersion: true }, 
          "@angular/common": { singleton: true, strictVersion: true }, 
          "@angular/common/http": { singleton: true, strictVersion: true },
          "@angular/router": { singleton: true, strictVersion: true },

          ...sharedMappings.getDescriptors()
        }
        
    }),
    sharedMappings.getPlugin(),
  ],
};
