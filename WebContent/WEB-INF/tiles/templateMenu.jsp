<%@taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<tiles:insertAttribute name="header" />

<body>

	<tiles:insertAttribute name="navbar" />



	<div id="exTab1" class="container">
		<ul class="nav nav-pills">
			<li class="active"><a href="#1a" data-toggle="tab">MOTORI</a></li>
			<li><a href="#2a" data-toggle="tab">IMPRESE</a></li>
			<li><a href="#3a" data-toggle="tab">IMMOBILI</a></li>

		</ul>

		<div class="tab-content clearfix">
			<div class="tab-pane active" id="1a">
				<tiles:insertAttribute name="body" />
			</div>
		</div>
	</div>

	<tiles:insertAttribute name="footer" />
</body>
</html>
