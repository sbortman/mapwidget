<%--
  Created by IntelliJ IDEA.
  User: sbortman
  Date: 10/29/14
  Time: 2:00 PM
--%>

<%@ page contentType="text/html;charset=UTF-8" %>
<html ng-app="MapWidgetApp">
<head>
    <title>Map Widget</title>
    <asset:stylesheet src="mapwidget.css"/>
</head>

<body>

<div class="ui-layout-center">
    <div id="map" ng-controller="MapWidgetController as mapWidget"></div>
</div>

<div class="ui-layout-north">
    <div class="securityBanner">Unclassified</div>
</div>

<div class="ui-layout-south">
    <div class="securityBanner">Unclassified</div>
</div>

<div class="ui-layout-east"></div>

<div class="ui-layout-west"></div>

<asset:javascript src="mapwidget.js"/>
</body>
</html>