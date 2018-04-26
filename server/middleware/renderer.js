import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Loadable from 'react-loadable';
import { Provider as ReduxProvider } from 'react-redux'
import { StaticRouter } from 'react-router';
import { renderRoutes } from 'react-router-config';
// import our main App component
import  {routes} from '../../src/router';

// import the manifest generated with the create-react-app build
import manifest from '../../build/asset-manifest.json';
// function to extract js assets from the manifest
const extractAssets = (assets, chunks) => Object.keys(assets)
    .filter(asset => chunks.indexOf(asset.replace('.js', '')) > -1)
    .map(k => assets[k]);


const path = require("path");
const fs = require("fs");


export default (store) => (req, res, next) => {
    console.log('req:',req.url);
    // get the html file created with the create-react-app build
    const filePath = path.resolve(__dirname, '..', '..', 'build', 'index.html');
    fs.readFile(filePath, 'utf8', (err, htmlData) => {
        console.log();
        if (err) {
            console.error('err', err);
            return res.status(404).end()
        }

        const modules = [];
        const context = {};
        // render the app as a string
        const html = ReactDOMServer.renderToString(
            <Loadable.Capture report={m => modules.push(m)}>
                <ReduxProvider store={store}>
                    <StaticRouter location={req.url} context={context}>
                        {renderRoutes(routes)}
                    </StaticRouter>
                </ReduxProvider>
            </Loadable.Capture>
        );

        // get the stringified state
        const reduxState = JSON.stringify(store.getState());
        console.log('reduxState',reduxState);
        // map required assets to script tags
        const extraChunks = extractAssets(manifest, modules)
            .map(c => `<script type="text/javascript" src="/${c}"></script>`);

        // now inject the rendered app into our html and send it to the client
        return res.send(
            htmlData
            // write the React app
                .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
                // write the string version of our state
                .replace('__SERVER_REDUX_STATE__', reduxState)
                // append the extra js assets
                .replace('</body>', extraChunks.join('') + '</body>')
        );
    });
}
