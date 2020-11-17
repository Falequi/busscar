<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Buscar de Colombia SAS</title>
</head>
<body>

    <form action="#" method="post">

       <p>
       BUSSTAR DD:    <input type="radio" value="busstardd" name="carroceria" id="carroceria"> <br>
       BUSSTAR 360:   <input type="radio" value="busstar360" name="carroceria" id="carroceria"> <br>
       BUSSTAR PLUS:  <input type="radio" value="fussionplus" name="carroceria" id="carroceria"> <br>
        </p>

        <label for="votos"># VOTOS</label>
        <input type="text" name="votos" id="votos"> 
        <br>
        <input type="button" value="VOTAR" id="votar">

        <table>
        <tr>
            <th>BUSSTAR DD</th>
            <td id="vbusstardd"></td>
        </tr>
        <tr>
            <th>BUSSTAR 360</th>
            <td id="vbusstar360"></td>
        </tr>
        <tr>
            <th>BUSSTAR PLUS</th>
            <td id="vfussionplus"></td>
        </tr>
        </table>
    </form>    

    <script src="resources/js/jquery.js"></script>
    <script src="resources/js/gestion.js"></script>
</body>
</html>