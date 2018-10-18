<%@taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<body>
	<div style="border: 1px solid black;">

		<tiles:insertAttribute name="body" />
		<div style="border: 1px solid black;">

			<tiles:insertAttribute name="form" />
			<div style="border: 1px solid black;">

				<tiles:insertAttribute name="lista" />
			</div>
		</div>
	</div>