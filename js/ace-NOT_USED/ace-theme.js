  $(function() {
    $('#theme').change(function() {
	  if ($(this).prop('checked') == true) {
	    editor.setTheme("ace/theme/tomorrow_night");
	  } else {
	    editor.setTheme("ace/theme/tomorrow");
	  }
    })
  })
