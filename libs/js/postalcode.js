	$('#btnRun2').click(function() {

		$.ajax({
			url: "libs/php/getPostalCode.php",
			type: 'POST',
			dataType: 'json',
			data: {
				country: $('#Country').val(),
			
			},
			success: function(result) {

				console.log(result);

				if (result.status.name == "ok") {
						
						
						
					$('#txtCountryName1').html(result['data'][0]['countryName']);

					$('#txtCountryCode1').html(result['data'][0]['countryCode']);
					
					$('#txtGeonameId1').html(result['data'][0]['geonameId']);
				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
			}
		}); 
	

	});