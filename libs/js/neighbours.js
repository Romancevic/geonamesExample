$('#btnRun1').click(function() {

		$.ajax({
			url: "libs/php/neighbours.php",
			type: 'POST',
			dataType: 'json',
			data: {
				country: $('#selNeigbours').val(),
				
			},
			success: function(result) {

				console.log(result);

				if (result.status.name == "ok") {
					
					
					$('#txtTotalResultsCount').html(result['data'][0]['totalResultsCount']);
					$('#txtLat').html(result['data'][0]['lat']);
					$('#txtName').html(result['data'][0]['name']);
					$('#txtgeonameId').html(result['data'][0]['geonameId']);
					$('#txtContinent').html(result['data'][0]['continent']);

				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
			}
		}); 
	

	});