	$('#btnRun3').click(function() {

		$.ajax({
			url: "libs/php/children.php",
			type: 'POST',
			dataType: 'json',
			data: {
				country: $('#selChildren').val(),
				
			},
			success: function(result) {

				console.log(result);

				if (result.status.name == "ok") {

					$('#txtNameCh').html(result['data'][0]['name']);
					$('#txtLat1').html(result['data'][0]['lat']);
					$('#txtGeonameId1').html(result['data'][0]['geonameId']);
					
					$('#txtfcode').html(result['data'][0]['fcode']);
				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
			}
		}); 
	

	});