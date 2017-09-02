# OvenCalculator

<html>
<head>
	<title>Oven Calculator</title>
	<meta charset="utf-8">
	<link href="https://fonts.googleapis.com/css?family=Pacifico" rel="stylesheet"> 
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
	<link rel="stylesheet" type="text/css" href="style.css">
	<script type="text/javascript" src="javascript.js"></script>
</head>
<body>


	<div class="row, col-sm-12" id="banner">
	<h1>Oven Calculator</h1>
	</div>
	<div id= "kuva">
		
	</div>
	<div class="form-container">
		<form>
			Meat:<br>
			<select id="choice" name="meat">
				<option selected="selected">-----</option>
				<option value="lamb">Lamb</option>
				<OPTION value="beefRare">Beef - rare</OPTION>
				<OPTION value="beefMedium">Beef - medium</OPTION>
				<OPTION value="beefWellDone">Beef - well done</OPTION>
				<option value="pork">Pork</option>
				<option value="chicken">Chicken</option>
				<option value="duck">Duck</option>
				<option value="turkey">Turkey</option>
			</select><br>
			Weight (g):<br>
			<input id ="weight" type="number" value="0"><br>
			Oven: <br>
			<select id ="oven" name="ahi">
			<option selected="selected">-----</option> 
			<option value="gas">Gas</option>
			<option value="electric">Electric</option>
			<option value="microWave">Microwave</option>
			</select>

		</form>
		<br>
		<button type="button" onclick="calculate()">Calculate</button>
		</div>
	<div id="Display">
			<!-- Tsitaadid käivad siin -->
		</div>
		

	</div>
	<footer>
	The above baking times are approximate and subject to variation based on oven size, condition, and thickness of meat.
	</footer>
	
</body>
</html>
