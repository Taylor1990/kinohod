import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { browserHistory, Router, Route, IndexRoute } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import Store from './store'
import App from './components/App.jsx'

const store = new Store(browserHistory)
const history = syncHistoryWithStore(browserHistory, store.getStore())

ReactDOM.render(
    <Provider store={store.getStore()}>
        <Router history={history}>
            <Route path="/" component={App}>

            </Route>
        </Router>
    </Provider>,
    document.getElementById('content')
);
