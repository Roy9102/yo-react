import '../assets/index.less';

import React from "react";
import ReactDOM from 'react-dom';
import <%=appName.firstUpperCase()%> from '../';


ReactDOM.render(<<%=appName.firstUpperCase()%> />, document.querySelector('#<%=appName%>'));
