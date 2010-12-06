var conn;
var maxNumRows = 50;
var connect = function() {
  if (window["WebSocket"]) {
    conn = new WebSocket("ws://127.0.0.1:8000");
	conn.onopen = function() {
		//alert('Connected to the WebSocket!!'); // Uncomment this if you're in doubt that your browser supports WebSockets
	};
	conn.onmessage = function(evt) {
		data = JSON.parse(evt.data);
		$('#messagesTable > tbody:last').prepend('<tr class="row"><td>'+
		data['date']+'</td><td>'+
		data['host']+'</td><td>'+
		data['severity']+'</td><td>'+
		data['facility']+'</td><td class="message"><div class="hideextra">'+
		data['message']+'</div></td></tr>');
		$('tr.row:first').click(function() {
			$(this).toggleClass('message_expanded');
			$(this).children('td.message').children('div').toggleClass('hideextra');
		});
		var num_rows = $('#messagesTable > tbody > tr').size();
		if (num_rows > maxNumRows) {
			$('#messagesTable > tbody:last > tr:last').remove();
		}
	};
  }
};

window.onload = connect;
