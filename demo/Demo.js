import React from 'react';
import TabPane from '../src/TabPane';
import Tab from '../src/Tab';


var Demo = React.createClass({

    render: function() {
        return (
            <TabPane orientation="horizontal" className="my-tabs">
                <Tab id="A" name="A">some stuff</Tab>
                <Tab id="B" name="B" active="true">whatevs</Tab>
                <Tab id="C" name="C">innit</Tab>
            </TabPane>
        );
    }

});

React.render(<Demo />, document.body);