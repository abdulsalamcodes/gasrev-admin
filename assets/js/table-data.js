$(function(e) {
	//file export datatable

	/*************************************************************
	 * Datatable template with buttons. Used in multilple files in this project.
	 */
	var table = $('#example').DataTable({
		buttons: [ 'excel', 'pdf'],
		lengthChange: true,
		responsive: true,
		"pageLength": 5,
		language: {
			searchPlaceholder: 'Search...',
			sSearch: '',
			lengthMenu: '_MENU_ ',
		}
	});
	table.buttons().container()
	.appendTo( '#example_wrapper .col-md-6:eq(0)' );		
	
	/********************************************
	 * Datatable for outlets table with buttons.
	 */
	var table = $('#outlet').DataTable({
		buttons: [ 'excel', 'pdf'],
		lengthChange: true,
		responsive: true,
		"pageLength": 5,
		language: {
			searchPlaceholder: 'Search...',
			sSearch: '',
			lengthMenu: '_MENU_ ',
		}
	});

	table.buttons().container()
	.appendTo( '#outlet_wrapper .col-md-6:eq(0)' );		
	
	/********************************************
	 * Datatable for outlets table with buttons.
	 */
	var table = $('#outlet1').DataTable({
		buttons: [ 'excel', 'pdf'],
		lengthChange: true,
		responsive: true,
		"pageLength": 5,
		language: {
			searchPlaceholder: 'Search...',
			sSearch: '',
			lengthMenu: '_MENU_ ',
		}
	});

	table.buttons().container()
	.appendTo( '#outlet1_wrapper .col-md-6:eq(0)' );

	/********************************************
	 * Datatable for outlets table with buttons.
	 */
	var table = $('#outletDeliveries').DataTable({
		buttons: [ 'excel', 'pdf'],
		lengthChange: true,
		responsive: true,
		"pageLength": 5,
		language: {
			searchPlaceholder: 'Search...',
			sSearch: '',
			lengthMenu: '_MENU_ ',
		}
	});
	table.buttons().container()
	.appendTo( '#outletDeliveries_wrapper .col-md-6:eq(0)' );
	
	/********************************************
	 * Datatable for outlets table with buttons.
	 */
	var table = $('#outletDeliveries1').DataTable({
		buttons: [ 'excel', 'pdf'],
		lengthChange: true,
		responsive: true,
		"pageLength": 5,
		language: {
			searchPlaceholder: 'Search...',
			sSearch: '',
			lengthMenu: '_MENU_ ',
		}
	});
	table.buttons().container()
	.appendTo( '#outletDeliveries1_wrapper .col-md-6:eq(0)' );		
	



	/********************************************
	 * Datatable for ratings table with buttons. Used in multiple files in this project
	 */
	var table = $('#ratings').DataTable({
		buttons: [ 'excel', 'pdf'],
		"pageLength": 5,
		lengthChange: true,
		responsive: true,
		language: {
			searchPlaceholder: 'Search...',
			sSearch: '',
			lengthMenu: '_MENU_',
		}
	});
	table.buttons().container()
	.appendTo( '#ratings_wrapper .col-md-6:eq(0)' );	

	/********************************************
	 * Datatable for Orders table with buttons.
	 */
	var table = $('#orders').DataTable({
		buttons: [ 'excel', 'pdf'],
		"pageLength": 5,
		lengthChange: true,
		responsive: true,
		language: {
			searchPlaceholder: 'Search...',
			sSearch: '',
			lengthMenu: '_MENU_',
		}
	});
	table.buttons().container()
	.appendTo( '#orders_wrapper .col-md-6:eq(0)' );	



	var table = $('#example-paginate').DataTable({
		responsive: true,
		"pageLength": 3,
		lengthChange: true,
		language: {
			// searchPlaceholder: 'Search...',
			sSearch: '',
			lengthMenu: '_MENU_',
		}
	});
	
	


	var table = $('#example-delete').DataTable({
		responsive: true,
		language: {
			searchPlaceholder: 'Search...',
			sSearch: '',
			lengthMenu: '_MENU_',
		}
	}); 
    $('#example-delete tbody').on( 'click', 'tr', function () {
        if ( $(this).hasClass('selected') ) {
            $(this).removeClass('selected');
        }
        else {
            table.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
    } );
 
    $('#button').click( function () {
        table.row('.selected').remove().draw( false );
    } );
	
	//Details display datatable
	$('#example-1').DataTable( {

		responsive: true,
		language: {
			searchPlaceholder: 'Search...',
			sSearch: '',
			lengthMenu: '_MENU_',
		},
		responsive: {
			details: {
				display: $.fn.dataTable.Responsive.display.modal( {
					header: function ( row ) {
						var data = row.data();
						return 'Details for '+data[0]+' '+data[1];
					}
				} ),
				renderer: $.fn.dataTable.Responsive.renderer.tableAll( {
					tableClass: 'table border mb-0'
				} )
			}
		}
	} );
});