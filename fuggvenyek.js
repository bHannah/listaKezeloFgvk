export function tablazatLetrehoz(lista) {
  let txt = "<div class='table-responsive'><table class='table table-striped'>";
  txt +=
    "<thead><tr><th>Név</th><th>Kor</th><th>Nem</th><th></th></tr></thead>";
  txt += "<tbody>";
  lista.forEach((elem, index) => {
    txt += `<tr>
        <td>${elem.nev}</td>
        <td>${elem.kor}</td>
        <td>${elem.nem ? "Férfi" : "Nő"}</td>
        <td><button id="${index}">🗑️</button></td>
        </tr>`;
  });
  txt += "</tbody></table></div>";
  return txt;
}

export function megjelenit(txt) {
  const ELEM = $(".adatok");
  ELEM.html(txt);
}
