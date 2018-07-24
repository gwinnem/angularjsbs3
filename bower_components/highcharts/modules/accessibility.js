/*
 Highcharts JS v6.1.0 (2018-04-13)
 Accessibility module

 (c) 2010-2017 Highsoft AS
 Author: Oystein Moseng

 License: www.highcharts.com/license
*/
(function(r){"object"===typeof module&&module.exports?module.exports=r:r(Highcharts)})(function(r){(function(a){function r(a,f){var k=a.indexOf("#each("),h=a.indexOf("#plural("),g=a.indexOf("["),m=a.indexOf("]");if(-1<k){var g=a.slice(k).indexOf(")")+k,l=a.substring(0,k),h=a.substring(g+1),g=a.substring(k+6,g).split(","),k=Number(g[1]);a="";if(f=f[g[0]])for(k=isNaN(k)?f.length:k,k=0>k?f.length+k:Math.min(k,f.length),g=0;g<k;++g)a+=l+f[g]+h;return a.length?a:""}if(-1<h){l=a.slice(h).indexOf(")")+h;
a=a.substring(h+8,l).split(",");switch(Number(f[a[0]])){case 0:a=t(a[4],a[1]);break;case 1:a=t(a[2],a[1]);break;case 2:a=t(a[3],a[1]);break;default:a=a[1]}a?(f=a,f=f.trim&&f.trim()||f.replace(/^\s+|\s+$/g,"")):f="";return f}return-1<g?(h=a.substring(0,g),a=Number(a.substring(g+1,m)),f=f[h],!isNaN(a)&&f&&(0>a?(l=f[f.length+a],void 0===l&&(l=f[0])):(l=f[a],void 0===l&&(l=f[f.length-1]))),void 0!==l?l:""):"{"+a+"}"}var u=a.each,t=a.pick;a.i18nFormat=function(m,f,k){var h=function(d,a){d=d.slice(a||0);
var c=d.indexOf("{"),b=d.indexOf("}");if(-1<c&&b>c)return{statement:d.substring(c+1,b),begin:a+c+1,end:a+b}},g=[],q,l;l=0;do q=h(m,l),l=m.substring(l,q&&q.begin-1),l.length&&g.push({value:l,type:"constant"}),q&&g.push({value:q.statement,type:"statement"}),l=q&&q.end+1;while(q);u(g,function(d){"statement"===d.type&&(d.value=r(d.value,f))});return a.format(a.reduce(g,function(d,a){return d+a.value},""),f,k)};a.Chart.prototype.langFormat=function(m,f,k){m=m.split(".");for(var h=this.options.lang,g=0;g<
m.length;++g)h=h&&h[m[g]];return"string"===typeof h&&a.i18nFormat(h,f,k)};a.setOptions({lang:{accessibility:{screenReaderRegionLabel:"Chart screen reader information.",navigationHint:"Use regions/landmarks to skip ahead to chart {#plural(numSeries, and navigate between data series,)}",defaultChartTitle:"Chart",longDescriptionHeading:"Long description.",noDescription:"No description available.",structureHeading:"Structure.",viewAsDataTable:"View as data table.",chartHeading:"Chart graphic.",chartContainerLabel:"Interactive chart. {title}. Use up and down arrows to navigate with most screen readers.",
rangeSelectorMinInput:"Select start date.",rangeSelectorMaxInput:"Select end date.",tableSummary:"Table representation of chart.",mapZoomIn:"Zoom chart",mapZoomOut:"Zoom out chart",rangeSelectorButton:"Select range {buttonText}",legendItem:"Toggle visibility of series {itemName}",svgContainerTitle:"{chartTitle}",seriesTypeDescriptions:{boxplot:"Box plot charts are typically used to display groups of statistical data. Each data point in the chart can have up to 5 values: minimum, lower quartile, median, upper quartile, and maximum.",
arearange:"Arearange charts are line charts displaying a range between a lower and higher value for each point.",areasplinerange:"These charts are line charts displaying a range between a lower and higher value for each point.",bubble:"Bubble charts are scatter charts where each data point also has a size value.",columnrange:"Columnrange charts are column charts displaying a range between a lower and higher value for each point.",errorbar:"Errorbar series are used to display the variability of the data.",
funnel:"Funnel charts are used to display reduction of data in stages.",pyramid:"Pyramid charts consist of a single pyramid with item heights corresponding to each point value.",waterfall:"A waterfall chart is a column chart where each column contributes towards a total end value."},chartTypes:{emptyChart:"Empty chart",mapTypeDescription:"Map of {mapTitle} with {numSeries} data series.",unknownMap:"Map of unspecified region with {numSeries} data series.",combinationChart:"Combination chart with {numSeries} data series.",
defaultSingle:"Chart with {numPoints} data {#plural(numPoints, points, point)}.",defaultMultiple:"Chart with {numSeries} data series.",splineSingle:"Line chart with {numPoints} data {#plural(numPoints, points, point)}.",splineMultiple:"Line chart with {numSeries} lines.",lineSingle:"Line chart with {numPoints} data {#plural(numPoints, points, point)}.",lineMultiple:"Line chart with {numSeries} lines.",columnSingle:"Bar chart with {numPoints} {#plural(numPoints, bars, bar)}.",columnMultiple:"Bar chart with {numSeries} data series.",
barSingle:"Bar chart with {numPoints} {#plural(numPoints, bars, bar)}.",barMultiple:"Bar chart with {numSeries} data series.",pieSingle:"Pie chart with {numPoints} {#plural(numPoints, slices, slice)}.",pieMultiple:"Pie chart with {numSeries} pies.",scatterSingle:"Scatter chart with {numPoints} {#plural(numPoints, points, point)}.",scatterMultiple:"Scatter chart with {numSeries} data series.",boxplotSingle:"Boxplot with {numPoints} {#plural(numPoints, boxes, box)}.",boxplotMultiple:"Boxplot with {numSeries} data series.",
bubbleSingle:"Bubble chart with {numPoints} {#plural(numPoints, bubbles, bubble)}.",bubbleMultiple:"Bubble chart with {numSeries} data series."},axis:{xAxisDescriptionSingular:"The chart has 1 X axis displaying {names[0]}.",xAxisDescriptionPlural:"The chart has {numAxes} X axes displaying {#each(names, -1) }and {names[-1]}",yAxisDescriptionSingular:"The chart has 1 Y axis displaying {names[0]}.",yAxisDescriptionPlural:"The chart has {numAxes} Y axes displaying {#each(names, -1) }and {names[-1]}"},
exporting:{chartMenuLabel:"Chart export",menuButtonLabel:"View export menu",exportRegionLabel:"Chart export menu"},series:{summary:{default:"{name}, series {ix} of {numSeries} with {numPoints} data {#plural(numPoints, points, point)}.",defaultCombination:"{name}, series {ix} of {numSeries} with {numPoints} data {#plural(numPoints, points, point)}.",line:"{name}, line {ix} of {numSeries} with {numPoints} data {#plural(numPoints, points, point)}.",lineCombination:"{name}, series {ix} of {numSeries}. Line with {numPoints} data {#plural(numPoints, points, point)}.",
spline:"{name}, line {ix} of {numSeries} with {numPoints} data {#plural(numPoints, points, point)}.",splineCombination:"{name}, series {ix} of {numSeries}. Line with {numPoints} data {#plural(numPoints, points, point)}.",column:"{name}, bar series {ix} of {numSeries} with {numPoints} {#plural(numPoints, bars, bar)}.",columnCombination:"{name}, series {ix} of {numSeries}. Bar series with {numPoints} {#plural(numPoints, bars, bar)}.",bar:"{name}, bar series {ix} of {numSeries} with {numPoints} {#plural(numPoints, bars, bar)}.",
barCombination:"{name}, series {ix} of {numSeries}. Bar series with {numPoints} {#plural(numPoints, bars, bar)}.",pie:"{name}, pie {ix} of {numSeries} with {numPoints} {#plural(numPoints, slices, slice)}.",pieCombination:"{name}, series {ix} of {numSeries}. Pie with {numPoints} {#plural(numPoints, slices, slice)}.",scatter:"{name}, scatter plot {ix} of {numSeries} with {numPoints} {#plural(numPoints, points, point)}.",scatterCombination:"{name}, series {ix} of {numSeries}, scatter plot with {numPoints} {#plural(numPoints, points, point)}.",
boxplot:"{name}, boxplot {ix} of {numSeries} with {numPoints} {#plural(numPoints, boxes, box)}.",boxplotCombination:"{name}, series {ix} of {numSeries}. Boxplot with {numPoints} {#plural(numPoints, boxes, box)}.",bubble:"{name}, bubble series {ix} of {numSeries} with {numPoints} {#plural(numPoints, bubbles, bubble)}.",bubbleCombination:"{name}, series {ix} of {numSeries}. Bubble series with {numPoints} {#plural(numPoints, bubbles, bubble)}.",map:"{name}, map {ix} of {numSeries} with {numPoints} {#plural(numPoints, areas, area)}.",
mapCombination:"{name}, series {ix} of {numSeries}. Map with {numPoints} {#plural(numPoints, areas, area)}.",mapline:"{name}, line {ix} of {numSeries} with {numPoints} data {#plural(numPoints, points, point)}.",maplineCombination:"{name}, series {ix} of {numSeries}. Line with {numPoints} data {#plural(numPoints, points, point)}.",mapbubble:"{name}, bubble series {ix} of {numSeries} with {numPoints} {#plural(numPoints, bubbles, bubble)}.",mapbubbleCombination:"{name}, series {ix} of {numSeries}. Bubble series with {numPoints} {#plural(numPoints, bubbles, bubble)}."},
description:"{description}",xAxisDescription:"X axis, {name}",yAxisDescription:"Y axis, {name}"}}}})})(r);(function(a){function r(d){return d.replace(/&/g,"\x26amp;").replace(/</g,"\x26lt;").replace(/>/g,"\x26gt;").replace(/"/g,"\x26quot;").replace(/'/g,"\x26#x27;").replace(/\//g,"\x26#x2F;")}function u(d){return"string"===typeof d?d.replace(/<\/?[^>]+(>|$)/g,""):d}function t(d){for(var a=d.childNodes.length;a--;)d.appendChild(d.childNodes[a])}var m=a.win.document,f=a.each,k=a.map,h=a.erase,g=a.addEvent,
q=a.merge,l={position:"absolute",left:"-9999px",top:"auto",width:"1px",height:"1px",overflow:"hidden"};a.Series.prototype.commonKeys="name id category x value y".split(" ");a.Series.prototype.specialKeys="z open high q3 median q1 low close".split(" ");a.seriesTypes.pie&&(a.seriesTypes.pie.prototype.specialKeys=[]);a.setOptions({accessibility:{enabled:!0,pointDescriptionThreshold:!1,screenReaderSectionFormatter:function(d){var a=d.options,c=d.types||[],b={chart:d,numSeries:d.series&&d.series.length},
c=(1===c.length&&"pie"===c[0]||"map"===c[0])&&{}||d.getAxesDescription();return"\x3cdiv\x3e"+d.langFormat("accessibility.navigationHint",b)+"\x3c/div\x3e\x3ch3\x3e"+(a.title.text?r(a.title.text):d.langFormat("accessibility.defaultChartTitle",b))+(a.subtitle&&a.subtitle.text?". "+r(a.subtitle.text):"")+"\x3c/h3\x3e\x3ch4\x3e"+d.langFormat("accessibility.longDescriptionHeading",b)+"\x3c/h4\x3e\x3cdiv\x3e"+(a.chart.description||d.langFormat("accessibility.noDescription",b))+"\x3c/div\x3e\x3ch4\x3e"+
d.langFormat("accessibility.structureHeading",b)+"\x3c/h4\x3e\x3cdiv\x3e"+(a.chart.typeDescription||d.getTypeDescription())+"\x3c/div\x3e"+(c.xAxis?"\x3cdiv\x3e"+c.xAxis+"\x3c/div\x3e":"")+(c.yAxis?"\x3cdiv\x3e"+c.yAxis+"\x3c/div\x3e":"")}}});a.addEvent(a.Series,"afterRender",function(){this.chart.options.accessibility.enabled&&this.setA11yDescription()});a.Series.prototype.setA11yDescription=function(){var d=this.chart.options.accessibility,a=this.points&&this.points.length&&this.points[0].graphic&&
this.points[0].graphic.element,c=a&&a.parentNode||this.graph&&this.graph.element||this.group&&this.group.element;c&&(c.lastChild===a&&t(c),this.points&&(this.points.length<d.pointDescriptionThreshold||!1===d.pointDescriptionThreshold)&&f(this.points,function(b){b.graphic&&(b.graphic.element.setAttribute("role","img"),b.graphic.element.setAttribute("tabindex","-1"),b.graphic.element.setAttribute("aria-label",u(b.series.options.pointDescriptionFormatter&&b.series.options.pointDescriptionFormatter(b)||
d.pointDescriptionFormatter&&d.pointDescriptionFormatter(b)||b.buildPointInfoString())))}),1<this.chart.series.length||d.describeSingleSeries)&&(c.setAttribute("role",this.options.exposeElementToA11y?"img":"region"),c.setAttribute("tabindex","-1"),c.setAttribute("aria-label",u(d.seriesDescriptionFormatter&&d.seriesDescriptionFormatter(this)||this.buildSeriesInfoString())))};a.Series.prototype.buildSeriesInfoString=function(){var a=this.chart,e=this.description||this.options.description,e=e&&a.langFormat("accessibility.series.description",
{description:e,series:this}),c=a.langFormat("accessibility.series.xAxisDescription",{name:this.xAxis&&this.xAxis.getDescription(),series:this}),b=a.langFormat("accessibility.series.yAxisDescription",{name:this.yAxis&&this.yAxis.getDescription(),series:this}),n={name:this.name||"",ix:this.index+1,numSeries:a.series.length,numPoints:this.points.length,series:this},p=1===a.types.length?"":"Combination";return(a.langFormat("accessibility.series.summary."+this.type+p,n)||a.langFormat("accessibility.series.summary.default"+
p,n))+(e?" "+e:"")+(1<a.yAxis.length&&this.yAxis?" "+b:"")+(1<a.xAxis.length&&this.xAxis?" "+c:"")};a.Point.prototype.buildPointInfoString=function(){var d=this,e=d.series,c=e.chart.options.accessibility,b="",n=e.xAxis&&e.xAxis.isDatetimeAxis,c=n&&e.chart.time.dateFormat(c.pointDateFormatter&&c.pointDateFormatter(d)||c.pointDateFormat||a.Tooltip.prototype.getXDateFormat.call({getDateFormat:a.Tooltip.prototype.getDateFormat,chart:e.chart},d,e.chart.options.tooltip,e.xAxis),d.x);a.find(e.specialKeys,
function(b){return void 0!==d[b]})?(n&&(b=c),f(e.commonKeys.concat(e.specialKeys),function(c){void 0===d[c]||n&&"x"===c||(b+=(b?". ":"")+c+", "+d[c])})):b=(this.name||c||this.category||this.id||"x, "+this.x)+", "+(void 0!==this.value?this.value:this.y);return this.index+1+". "+b+"."+(this.description?" "+this.description:"")};a.Axis.prototype.getDescription=function(){return this.userOptions&&this.userOptions.description||this.axisTitle&&this.axisTitle.textStr||this.options.id||this.categories&&"categories"||
this.isDatetimeAxis&&"Time"||"values"};g(a.Series,"afterInit",function(){var a=this.chart;a.options.accessibility.enabled&&(a.types=a.types||[],0>a.types.indexOf(this.type)&&a.types.push(this.type))});g(a.Series,"remove",function(){var a=this.chart,e=this,c=!1;f(a.series,function(b){b!==e&&0>a.types.indexOf(e.type)&&(c=!0)});c||h(a.types,e.type)});a.Chart.prototype.getTypeDescription=function(){var a=this.types&&this.types[0],e=this.series&&this.series[0]||{},c=e.mapTitle,b=this.langFormat("accessibility.seriesTypeDescriptions."+
a,{chart:this}),e={numSeries:this.series.length,numPoints:e.points&&e.points.length,chart:this,mapTitle:c},n=this.series&&1===this.series.length?"Single":"Multiple";if(a){if("map"===a)return c?this.langFormat("accessibility.chartTypes.mapTypeDescription",e):this.langFormat("accessibility.chartTypes.unknownMap",e);if(1<this.types.length)return this.langFormat("accessibility.chartTypes.combinationChart",e)}else return this.langFormat("accessibility.chartTypes.emptyChart",e);return(this.langFormat("accessibility.chartTypes."+
a+n,e)||this.langFormat("accessibility.chartTypes.default"+n,e))+(b?" "+b:"")};a.Chart.prototype.getAxesDescription=function(){var a=this.xAxis.length,e=this.yAxis.length,c={};a&&(c.xAxis=this.langFormat("accessibility.axis.xAxisDescription"+(1<a?"Plural":"Singular"),{chart:this,names:k(this.xAxis,function(b){return b.getDescription()}),numAxes:a}));e&&(c.yAxis=this.langFormat("accessibility.axis.yAxisDescription"+(1<e?"Plural":"Singular"),{chart:this,names:k(this.yAxis,function(b){return b.getDescription()}),
numAxes:e}));return c};a.Chart.prototype.addAccessibleContextMenuAttribs=function(){var a=this.exportDivElements;a&&(f(a,function(a){"DIV"!==a.tagName||a.children&&a.children.length||(a.setAttribute("role","menuitem"),a.setAttribute("tabindex",-1))}),a[0].parentNode.setAttribute("role","menu"),a[0].parentNode.setAttribute("aria-label",this.langFormat("accessibility.exporting.chartMenuLabel",{chart:this})))};a.Chart.prototype.addScreenReaderRegion=function(a,e){var c=this,b=c.screenReaderRegion=m.createElement("div"),
n=m.createElement("h4"),p=m.createElement("a"),d=m.createElement("h4");b.setAttribute("id",a);b.setAttribute("role","region");b.setAttribute("aria-label",c.langFormat("accessibility.screenReaderRegionLabel",{chart:this}));b.innerHTML=c.options.accessibility.screenReaderSectionFormatter(c);c.getCSV&&(p.innerHTML=c.langFormat("accessibility.viewAsDataTable",{chart:c}),p.href="javascript:void(0)"+e,p.setAttribute("tabindex","-1"),p.onclick=c.options.accessibility.onTableAnchorClick||function(){c.viewData();m.getElementById(e).focus()},
n.appendChild(p),b.appendChild(n));d.innerHTML=c.langFormat("accessibility.chartHeading",{chart:c});c.renderTo.insertBefore(d,c.renderTo.firstChild);c.renderTo.insertBefore(b,c.renderTo.firstChild);q(!0,d.style,l);q(!0,b.style,l)};a.Chart.prototype.callbacks.push(function(d){var e=d.options;if(e.accessibility.enabled){var c=m.createElementNS("http://www.w3.org/2000/svg","g"),b=d.container.getElementsByTagName("desc")[0],n=d.container.getElementsByTagName("text"),p="highcharts-title-"+d.index,v="highcharts-data-table-"+
d.index,w="highcharts-information-region-"+d.index,g=e.title.text||d.langFormat("accessibility.defaultChartTitle",{chart:d}),h=u(d.langFormat("accessibility.svgContainerTitle",{chartTitle:g}));h.length&&(e=m.createElementNS("http://www.w3.org/2000/svg","title"),e.textContent=h,e.id=p,b.parentNode.insertBefore(e,b));d.renderTo.setAttribute("role","region");d.renderTo.setAttribute("aria-label",d.langFormat("accessibility.chartContainerLabel",{title:u(g),chart:d}));if(d.exportSVGElements&&d.exportSVGElements[0]&&
d.exportSVGElements[0].element){var k=d.exportSVGElements[0].element.onclick,b=d.exportSVGElements[0].element.parentNode;d.exportSVGElements[0].element.onclick=function(){k.apply(this,Array.prototype.slice.call(arguments));d.addAccessibleContextMenuAttribs();d.highlightExportItem(0)};d.exportSVGElements[0].element.setAttribute("role","button");d.exportSVGElements[0].element.setAttribute("aria-label",d.langFormat("accessibility.exporting.menuButtonLabel",{chart:d}));c.appendChild(d.exportSVGElements[0].element);
c.setAttribute("role","region");c.setAttribute("aria-label",d.langFormat("accessibility.exporting.exportRegionLabel",{chart:d}));b.appendChild(c)}d.rangeSelector&&f(["minInput","maxInput"],function(b,c){d.rangeSelector[b]&&(d.rangeSelector[b].setAttribute("tabindex","-1"),d.rangeSelector[b].setAttribute("role","textbox"),d.rangeSelector[b].setAttribute("aria-label",d.langFormat("accessibility.rangeSelector"+(c?"MaxInput":"MinInput"),{chart:d})))});f(n,function(b){b.setAttribute("aria-hidden","true")});
d.addScreenReaderRegion(w,v);a.wrap(d,"getTable",function(b){return b.apply(this,Array.prototype.slice.call(arguments,1)).replace("\x3ctable\x3e",'\x3ctable id\x3d"'+v+'" summary\x3d"'+d.langFormat("accessibility.tableSummary",{chart:d})+'"\x3e')})}})})(r);(function(a){function r(c){return"string"===typeof c?c.replace(/<\/?[^>]+(>|$)/g,""):c}function u(c,b){this.chart=c;this.id=b.id;this.keyCodeMap=b.keyCodeMap;this.validate=b.validate;this.init=b.init;this.terminate=b.terminate}function t(c){var b;
c&&c.onclick&&k.createEvent&&(b=k.createEvent("Events"),b.initEvent("click",!0,!1),c.onclick(b))}function m(c){var b=c.series.chart.options.accessibility;return c.isNull&&b.keyboardNavigation.skipNullPoints||c.series.options.skipKeyboardNavigation||!c.series.visible||!1===c.visible||b.pointDescriptionThreshold&&b.pointDescriptionThreshold<=c.series.points.length}var f=a.win,k=f.document,h=a.each,g=a.addEvent,q=a.fireEvent,l=a.merge,d=a.pick,e;a.extend(a.SVGElement.prototype,{addFocusBorder:function(c,
b){this.focusBorder&&this.removeFocusBorder();var a=this.getBBox();c=d(c,3);this.focusBorder=this.renderer.rect(a.x-c,a.y-c,a.width+2*c,a.height+2*c,b&&b.borderRadius).addClass("highcharts-focus-border").attr({stroke:b&&b.stroke,"stroke-width":b&&b.strokeWidth}).attr({zIndex:99}).add(this.parentGroup)},removeFocusBorder:function(){this.focusBorder&&(this.focusBorder.destroy(),delete this.focusBorder)}});a.Series.prototype.keyboardMoveVertical=!0;h(["column","pie"],function(c){a.seriesTypes[c]&&(a.seriesTypes[c].prototype.keyboardMoveVertical=
!1)});a.setOptions({accessibility:{keyboardNavigation:{enabled:!0,focusBorder:{enabled:!0,hideBrowserFocusOutline:!0,style:{color:"#335cad",lineWidth:2,borderRadius:3},margin:2},skipNullPoints:!0}}});u.prototype={run:function(c){var b=this,a=c.which||c.keyCode,d=!1,e=!1;h(this.keyCodeMap,function(n){-1<n[0].indexOf(a)&&(d=!0,e=!1===n[1].call(b,a,c)?!1:!0)});d||9!==a||(e=this.move(c.shiftKey?-1:1));return e},move:function(c){var b=this.chart;this.terminate&&this.terminate(c);b.keyboardNavigationModuleIndex+=
c;var a=b.keyboardNavigationModules[b.keyboardNavigationModuleIndex];b.focusElement&&b.focusElement.removeFocusBorder();if(a){if(a.validate&&!a.validate())return this.move(c);if(a.init)return a.init(c),!0}b.keyboardNavigationModuleIndex=0;0<c?(this.chart.exiting=!0,this.chart.tabExitAnchor.focus()):this.chart.renderTo.focus();return!1}};a.Axis.prototype.panStep=function(c,b){var a=b||3;b=this.getExtremes();var d=(b.max-b.min)/a*c,a=b.max+d,d=b.min+d,e=a-d;0>c&&d<b.dataMin?(d=b.dataMin,a=d+e):0<c&&
a>b.dataMax&&(a=b.dataMax,d=a-e);this.setExtremes(d,a)};a.Chart.prototype.setFocusToElement=function(c,b){var a=this.options.accessibility.keyboardNavigation.focusBorder;b=b||c;b.element&&b.element.focus&&(b.element.focus(),a.hideBrowserFocusOutline&&b.css({outline:"none"}));a.enabled&&(this.focusElement&&this.focusElement.removeFocusBorder(),c.addFocusBorder(a.margin,{stroke:a.style.color,strokeWidth:a.style.lineWidth,borderRadius:a.style.borderRadius}),this.focusElement=c)};a.Point.prototype.highlight=
function(){var c=this.series.chart;if(this.isNull)c.tooltip&&c.tooltip.hide(0);else this.onMouseOver();this.graphic&&c.setFocusToElement(this.graphic);c.highlightedPoint=this;return this};a.Chart.prototype.highlightAdjacentPoint=function(c){var b=this.series,a=this.highlightedPoint,d=a&&a.index||0,e=a&&a.series.points,f=this.series&&this.series[this.series.length-1],f=f&&f.points&&f.points[f.points.length-1];if(!b[0]||!b[0].points)return!1;if(a){if(e[d]!==a)for(f=0;f<e.length;++f)if(e[f]===a){d=f;
break}b=b[a.series.index+(c?1:-1)];d=e[d+(c?1:-1)]||b&&b.points[c?0:b.points.length-1];if(!d)return!1}else d=c?b[0].points[0]:f;return m(d)?(this.highlightedPoint=d,this.highlightAdjacentPoint(c)):d.highlight()};a.Series.prototype.highlightFirstValidPoint=function(){var c=this.chart.highlightedPoint,b=(c&&c.series)===this?c.index:0;if(c=this.points){for(var a=b,d=c.length;a<d;++a)if(!m(c[a]))return c[a].highlight();for(;0<=b;--b)if(!m(c[b]))return c[b].highlight()}return!1};a.Chart.prototype.highlightAdjacentSeries=
function(c){var b,a,d=this.highlightedPoint,e=(b=this.series&&this.series[this.series.length-1])&&b.points&&b.points[b.points.length-1];if(!this.highlightedPoint)return b=c?this.series&&this.series[0]:b,(a=c?b&&b.points&&b.points[0]:e)?a.highlight():!1;b=this.series[d.series.index+(c?-1:1)];if(!b)return!1;var e=Infinity,f,g=b.points.length;if(void 0===d.plotX||void 0===d.plotY)a=void 0;else{for(;g--;)f=b.points[g],void 0!==f.plotX&&void 0!==f.plotY&&(f=(d.plotX-f.plotX)*(d.plotX-f.plotX)*4+(d.plotY-
f.plotY)*(d.plotY-f.plotY)*1,f<e&&(e=f,a=g));a=void 0!==a&&b.points[a]}if(!a)return!1;if(!b.visible)return a.highlight(),c=this.highlightAdjacentSeries(c),c?c:(d.highlight(),!1);a.highlight();return a.series.highlightFirstValidPoint()};a.Chart.prototype.highlightAdjacentPointVertical=function(c){var b=this.highlightedPoint,a=Infinity,d;if(void 0===b.plotX||void 0===b.plotY)return!1;h(this.series,function(n){h(n.points,function(e){if(void 0!==e.plotY&&void 0!==e.plotX&&e!==b){var f=e.plotY-b.plotY,
p=Math.abs(e.plotX-b.plotX),p=Math.abs(f)*Math.abs(f)+p*p*4;n.yAxis.reversed&&(f*=-1);!(0>f&&c||0<f&&!c||5>p||m(e))&&p<a&&(a=p,d=e)}})});return d?d.highlight():!1};a.Chart.prototype.showExportMenu=function(){this.exportSVGElements&&this.exportSVGElements[0]&&(this.exportSVGElements[0].element.onclick(),this.highlightExportItem(0))};a.Chart.prototype.hideExportMenu=function(){var c=this.exportDivElements;if(c){h(c,function(b){q(b,"mouseleave")});if(c[this.highlightedExportItem]&&c[this.highlightedExportItem].onmouseout)c[this.highlightedExportItem].onmouseout();
this.highlightedExportItem=0;e&&this.renderTo.focus()}};a.Chart.prototype.highlightExportItem=function(c){var b=this.exportDivElements&&this.exportDivElements[c],a=this.exportDivElements&&this.exportDivElements[this.highlightedExportItem];if(b&&"DIV"===b.tagName&&(!b.children||!b.children.length)){b.focus&&e&&b.focus();if(a&&a.onmouseout)a.onmouseout();if(b.onmouseover)b.onmouseover();this.highlightedExportItem=c;return!0}};a.Chart.prototype.highlightLastExportItem=function(){var c;if(this.exportDivElements)for(c=
this.exportDivElements.length;c--&&!this.highlightExportItem(c););};a.Chart.prototype.highlightRangeSelectorButton=function(c){var b=this.rangeSelector.buttons;b[this.highlightedRangeSelectorItemIx]&&b[this.highlightedRangeSelectorItemIx].setState(this.oldRangeSelectorItemState||0);this.highlightedRangeSelectorItemIx=c;return b[c]?(this.setFocusToElement(b[c].box,b[c]),this.oldRangeSelectorItemState=b[c].state,b[c].setState(2),!0):!1};a.Chart.prototype.highlightLegendItem=function(c){var b=this.legend.allItems,
a=this.highlightedLegendItemIx;return b[c]?(b[a]&&q(b[a].legendGroup.element,"mouseout"),void 0!==b[c].pageIx&&b[c].pageIx+1!==this.legend.currentPage&&this.legend.scroll(1+b[c].pageIx-this.legend.currentPage),this.highlightedLegendItemIx=c,this.setFocusToElement(b[c].legendItem,b[c].legendGroup),q(b[c].legendGroup.element,"mouseover"),!0):!1};a.Chart.prototype.addKeyboardNavigationModules=function(){function a(a,c,d){return new u(b,l({keyCodeMap:c},{id:a},d))}var b=this;b.keyboardNavigationModules=
[a("entry",[]),a("points",[[[37,39],function(a){a=39===a;return b.highlightAdjacentPoint(a)?!0:this.init(a?1:-1)}],[[38,40],function(a){a=38!==a;var c=b.options.accessibility.keyboardNavigation;if(c.mode&&"serialize"===c.mode)return b.highlightAdjacentPoint(a)?!0:this.init(a?1:-1);b[b.highlightedPoint&&b.highlightedPoint.series.keyboardMoveVertical?"highlightAdjacentPointVertical":"highlightAdjacentSeries"](a);return!0}],[[13,32],function(){b.highlightedPoint&&b.highlightedPoint.firePointEvent("click")}]],
{init:function(a){var c=b.series.length,d=0<a?0:c;if(0<a)for(delete b.highlightedPoint;d<c;){if(a=b.series[d].highlightFirstValidPoint())return a;++d}else for(;d--;)if(b.highlightedPoint=b.series[d].points[b.series[d].points.length-1],a=b.series[d].highlightFirstValidPoint())return a},terminate:function(){b.tooltip&&b.tooltip.hide(0);delete b.highlightedPoint}}),a("exporting",[[[37,38],function(){for(var a=b.highlightedExportItem||0,c=!0;a--;)if(b.highlightExportItem(a)){c=!1;break}if(c)return b.highlightLastExportItem(),
!0}],[[39,40],function(){for(var a=!0,c=(b.highlightedExportItem||0)+1;c<b.exportDivElements.length;++c)if(b.highlightExportItem(c)){a=!1;break}if(a)return b.highlightExportItem(0),!0}],[[13,32],function(){t(b.exportDivElements[b.highlightedExportItem])}]],{validate:function(){return b.exportChart&&!(b.options.exporting&&!1===b.options.exporting.enabled)},init:function(a){b.highlightedPoint=null;b.showExportMenu();0>a&&b.highlightLastExportItem()},terminate:function(){b.hideExportMenu()}}),a("mapZoom",
[[[38,40,37,39],function(a){b[38===a||40===a?"yAxis":"xAxis"][0].panStep(39>a?-1:1)}],[[9],function(a,c){b.mapNavButtons[b.focusedMapNavButtonIx].setState(0);if(c.shiftKey&&!b.focusedMapNavButtonIx||!c.shiftKey&&b.focusedMapNavButtonIx)return b.mapZoom(),this.move(c.shiftKey?-1:1);b.focusedMapNavButtonIx+=c.shiftKey?-1:1;a=b.mapNavButtons[b.focusedMapNavButtonIx];b.setFocusToElement(a.box,a);a.setState(2)}],[[13,32],function(){t(b.mapNavButtons[b.focusedMapNavButtonIx].element)}]],{validate:function(){return b.mapZoom&&
b.mapNavButtons&&2===b.mapNavButtons.length},init:function(a){var c=b.mapNavButtons[0],d=b.mapNavButtons[1],c=0<a?c:d;h(b.mapNavButtons,function(a,c){a.element.setAttribute("tabindex",-1);a.element.setAttribute("role","button");a.element.setAttribute("aria-label",b.langFormat("accessibility.mapZoom"+(c?"Out":"In"),{chart:b}))});b.setFocusToElement(c.box,c);c.setState(2);b.focusedMapNavButtonIx=0<a?0:1}}),a("rangeSelector",[[[37,39,38,40],function(a){a=37===a||38===a?-1:1;if(!b.highlightRangeSelectorButton(b.highlightedRangeSelectorItemIx+
a))return this.move(a)}],[[13,32],function(){3!==b.oldRangeSelectorItemState&&t(b.rangeSelector.buttons[b.highlightedRangeSelectorItemIx].element)}]],{validate:function(){return b.rangeSelector&&b.rangeSelector.buttons&&b.rangeSelector.buttons.length},init:function(a){h(b.rangeSelector.buttons,function(a){a.element.setAttribute("tabindex","-1");a.element.setAttribute("role","button");a.element.setAttribute("aria-label",b.langFormat("accessibility.rangeSelectorButton",{chart:b,buttonText:a.text&&a.text.textStr}))});
b.highlightRangeSelectorButton(0<a?0:b.rangeSelector.buttons.length-1)}}),a("rangeSelectorInput",[[[9,38,40],function(a,c){a=9===a&&c.shiftKey||38===a?-1:1;c=b.highlightedInputRangeIx+=a;if(1<c||0>c)return this.move(a);b.rangeSelector[c?"maxInput":"minInput"].focus()}]],{validate:function(){return b.rangeSelector&&b.rangeSelector.inputGroup&&"hidden"!==b.rangeSelector.inputGroup.element.getAttribute("visibility")&&!1!==b.options.rangeSelector.inputEnabled&&b.rangeSelector.minInput&&b.rangeSelector.maxInput},
init:function(a){b.highlightedInputRangeIx=0<a?0:1;b.rangeSelector[b.highlightedInputRangeIx?"maxInput":"minInput"].focus()}}),a("legend",[[[37,39,38,40],function(a){a=37===a||38===a?-1:1;!b.highlightLegendItem(b.highlightedLegendItemIx+a)&&1<b.legend.allItems.length&&this.init(a)}],[[13,32],function(){t(b.legend.allItems[b.highlightedLegendItemIx].legendItem.element.parentNode)}]],{validate:function(){return b.legend&&b.legend.allItems&&b.legend.display&&!(b.colorAxis&&b.colorAxis.length)&&!1!==
(b.options.legend&&b.options.legend.keyboardNavigation&&b.options.legend.keyboardNavigation.enabled)},init:function(a){h(b.legend.allItems,function(a){a.legendGroup.element.setAttribute("tabindex","-1");a.legendGroup.element.setAttribute("role","button");a.legendGroup.element.setAttribute("aria-label",b.langFormat("accessibility.legendItem",{chart:b,itemName:r(a.name)}))});b.highlightLegendItem(0<a?0:b.legend.allItems.length-1)}})]};a.Chart.prototype.addExitAnchor=function(){var a=this;a.tabExitAnchor=
k.createElement("div");a.tabExitAnchor.setAttribute("tabindex","0");l(!0,a.tabExitAnchor.style,{position:"absolute",left:"-9999px",top:"auto",width:"1px",height:"1px",overflow:"hidden"});a.renderTo.appendChild(a.tabExitAnchor);return g(a.tabExitAnchor,"focus",function(b){b=b||f.event;a.exiting?a.exiting=!1:(a.renderTo.focus(),b.preventDefault(),a.keyboardNavigationModuleIndex=a.keyboardNavigationModules.length-1,b=a.keyboardNavigationModules[a.keyboardNavigationModuleIndex],b.validate&&!b.validate()?
b.move(-1):b.init(-1))})};a.Chart.prototype.resetKeyboardNavigation=function(){var a=this.keyboardNavigationModules&&this.keyboardNavigationModules[this.keyboardNavigationModuleIndex||0];a&&a.terminate&&a.terminate();this.focusElement&&this.focusElement.removeFocusBorder();this.keyboardNavigationModuleIndex=0;this.keyboardReset=!0};a.addEvent(a.Series,"destroy",function(){var a=this.chart;a.highlightedPoint&&a.highlightedPoint.series===this&&(delete a.highlightedPoint,a.focusElement&&a.focusElement.removeFocusBorder())});
a.Chart.prototype.callbacks.push(function(a){var b=a.options.accessibility;b.enabled&&b.keyboardNavigation.enabled&&(e=!!a.renderTo.getElementsByTagName("g")[0].focus,a.addKeyboardNavigationModules(),a.keyboardNavigationModuleIndex=0,a.container.hasAttribute&&!a.container.hasAttribute("tabIndex")&&a.container.setAttribute("tabindex","0"),a.tabExitAnchor||(a.unbindExitAnchorFocus=a.addExitAnchor()),a.unbindKeydownHandler=g(a.renderTo,"keydown",function(b){b=b||f.event;var c=a.keyboardNavigationModules[a.keyboardNavigationModuleIndex];
a.keyboardReset=!1;c&&c.run(b)&&b.preventDefault()}),a.unbindBlurHandler=g(k,"mouseup",function(){a.keyboardReset||a.pointer&&a.pointer.chartPosition||a.resetKeyboardNavigation()}),g(a,"destroy",function(){a.resetKeyboardNavigation();a.unbindExitAnchorFocus&&a.tabExitAnchor&&a.unbindExitAnchorFocus();a.unbindKeydownHandler&&a.renderTo&&a.unbindKeydownHandler();a.unbindBlurHandler&&a.unbindBlurHandler()}))})})(r)});
