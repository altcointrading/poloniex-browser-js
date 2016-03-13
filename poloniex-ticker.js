<head>
  <script src="//code.jquery.com/jquery-1.12.0.min.js"></script>
</head>
<body>
  <div id="f"></div>
  <script type="text/javascript">
    $.get( "https://poloniex.com/public?command=returnTicker",
    function( data ) {$( "#f" ).append( '<span>' + data.BTC_1CR.last + '</span>' );}, "json" );
  </script>
</body>
