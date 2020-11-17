$(document).ready(function() {
    var busstardd,
        busstar360,
        fussionplus;

    if (isNaN(busstardd))
        busstardd = 0;
    if (isNaN(busstar360))
        busstar360 = 0;
    if (isNaN(fussionplus))
        fussionplus = 0;

    $("#votar").click(function() {
        voto = $("input:radio[name=carroceria]:checked").val();

        if (voto == "busstardd")
            busstardd++;
        if (voto == "busstar360")
            busstar360++;
        if (voto == "fussionplus")
            fussionplus++;

        cantidadvotos = busstardd + busstar360 + fussionplus;

        if (busstardd > 0) {
            busstarddp = (busstardd / cantidadvotos) * 100;
            busstarddp = busstarddp.toFixed(2);
            $("#vbusstardd").text(busstarddp + "%");
        }
        if (busstar360 > 0) {
            busstar360p = (busstar360 / cantidadvotos) * 100;
            busstar360p = busstar360p.toFixed(2);
            $("#vbusstar360").text(busstar360p + "%");
        }
        if (fussionplus > 0) {
            fussionplusp = (fussionplus / cantidadvotos) * 100;
            fussionplusp = fussionplusp.toFixed(2);
            $("#vfussionplus").text(fussionplusp + "%");
        }

        $("#votos").val(cantidadvotos);

        document.querySelectorAll('[name=carroceria]').forEach((x) => x.checked = false);

    });
});