(this["webpackJsonpttp-assignment8"]=this["webpackJsonpttp-assignment8"]||[]).push([[0],[,,,,,,,function(t,e,o){},,function(t,e,o){t.exports=o(16)},,,,,function(t,e,o){},function(t,e,o){},function(t,e,o){"use strict";o.r(e);var n=o(0),l=o.n(n),a=o(8),r=o.n(a),s=(o(14),o(1)),i=o(2),c=o(4),u=o(3),m=o(5),p=(o(7),function(t){function e(t){var o;return Object(s.a)(this,e),(o=Object(c.a)(this,Object(u.a)(e).call(this,t))).handleColor=function(){o.setState({cellColor:o.props.myStates().color})},o.handleMouseOver=function(){o.props.myStates().isMouseDown&&o.setState({cellColor:o.props.myStates().color})},o.state={cellColor:""},o}return Object(m.a)(e,t),Object(i.a)(e,[{key:"componentDidUpdate",value:function(t,e){if(t!==this.props){var o=this.props.myStates(),n=o.fillAll,l=o.fillUncolored;(n||l&&""===this.state.cellColor)&&this.setState({cellColor:this.props.myStates().color})}}},{key:"render",value:function(){return l.a.createElement("td",{style:{backgroundColor:this.state.cellColor},onClick:this.handleColor,onMouseOver:this.handleMouseOver})}}]),e}(l.a.Component));function f(t){var e=t.cols;return l.a.createElement("tr",null,e.map((function(t){return t})))}o(15);var d=function(t){function e(t){var o;return Object(s.a)(this,e),(o=Object(c.a)(this,Object(u.a)(e).call(this,t))).addCol=function(){return o.setState({cols:o.state.cols+1})},o.addRow=function(){return o.setState({rows:o.state.rows+1})},o.removeCol=function(){return o.setState({cols:o.state.cols-1})},o.removeRow=function(){return o.setState({rows:o.state.rows-1})},o.myStates=function(){var t=o.state;return(o.state.fillAll||o.state.fillUncolored)&&o.setState({fillAll:!1,fillUncolored:!1}),t},o.displayCols=function(){for(var t=o.state.cols,e=[],n=0;n<t;n++)e.push(l.a.createElement(p,{key:n,myStates:o.myStates}));return e},o.displayRow=function(){for(var t=o.state.rows,e=[],n=0;n<t;n++)e.push(l.a.createElement(f,{key:n,cols:o.displayCols()}));return e},o.fillAllCells=function(){o.setState({fillAll:!0})},o.fillAllEmptyCells=function(){o.setState({fillUncolored:!0})},o.state={cols:1,rows:1,color:"",fillAll:!1,fillUncolored:!1,isMouseDown:!1},o}return Object(m.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t=this,e=this.displayRow();return l.a.createElement("div",{className:"App"},l.a.createElement("button",{tyep:"button",onClick:this.addCol},"Increment Col"),l.a.createElement("button",{tyep:"button",onClick:this.addRow},"Increment Row"),l.a.createElement("button",{tyep:"button",onClick:this.removeCol},"Decrement Col"),l.a.createElement("button",{tyep:"button",onClick:this.removeRow},"Decrement Row"),l.a.createElement("button",{tyep:"button",onClick:this.fillAllCells},"Fill All Cells"),l.a.createElement("button",{tyep:"button",onClick:this.fillAllEmptyCells},"Fill All Empty Cells"),l.a.createElement("select",{onChange:function(e){t.setState({color:e.target.value})}},l.a.createElement("option",{value:"white"},"White"),l.a.createElement("option",{value:"green"},"Green"),l.a.createElement("option",{value:"red"},"Red"),l.a.createElement("option",{value:"purple"},"Purple")),l.a.createElement("table",{id:"main-grid",onMouseDown:function(){return t.setState({isMouseDown:!0})},onMouseUp:function(){return t.setState({isMouseDown:!1})}},l.a.createElement("tbody",null,e.map((function(t){return t})))))}}]),e}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.779435ef.chunk.js.map