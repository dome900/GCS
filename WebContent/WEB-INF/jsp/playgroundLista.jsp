<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>

<script>

</script>

<div class="container">
	<div id="reloadTable">
		<table class="table" id="table">
			<tr>

				<th>Id utente</th>
				<th>desc</th>

			</tr>
			<c:forEach items="${playLista}" var="playground"
				varStatus="rowCounter">
				<td id="listidId${rowCounter.index}">${playground.id}</td>
				<td id="listDesc${rowCounter.index}">${playground.desc}</td>

			</c:forEach>
		</table>



	</div>
</div>





