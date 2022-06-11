import { elementDecisionTree } from "./js/modules/attributes_html.js";

const log = console.log.bind(console);

/* -- attributes variables -- */

document.querySelectorAll(".pushElement").forEach((button) => {
  button.addEventListener("click", function (e) {
    chooseElement(e);
  });
});

function closeAddElement() {
  document.querySelector("#addElementBG").style.display = "none";
  document.querySelector("#addElementTable").style.display = "none";
  document.querySelector("#elements_table").style.filter = "blur(0px)";
}

function createEl() {
  let attributeArray = Array.from(
    document.querySelectorAll("[name='attributeValue']")
  );
  let el = attributeArray.filter((el) => {
    return el.type == "hidden";
  });
  let elType = el[0].dataset.eltype;
  let isInput = el[0].dataset.isinput;

  if (isInput) {
    let element = `
      <input type="${elType}"/>
    `;
    log(element);
  } else {
    alert("Not an Input");
  }
}

function chooseElement(e) {
  let title = `<thead class="panelTitle">
                  <th colspan="2">
                      ${e.target.dataset.eltype}
                      <input type="hidden" data-eltype="${e.target.dataset.eltype}" data-isinput="${e.target.dataset.isinput})" name="attributeValue" />
                  </th>
                </thead>
                <tbody>`;

  let elementAttributes = elementDecisionTree[e.target.dataset.eltype].join("");

  let submitButton = `<tr>
                        <td colspan="2">
                            <input
                              type="button"
                              value="Add ${e.target.dataset.eltype}"
                              id="createEl"
                              onclick="createEl();"
                            />
                            <input type="button" value="Cancel" id="cancelEl" onclick="closeAddElement()"/>
                          </td>
                      </tr>
                      </tbody>`;

  document.querySelector("#addElementBG").style.display = "block";
  document.querySelector("#addElementTable").style.display = "table";
  document.querySelector("#elements_table").style.filter = "blur(5px)";
  document.querySelector("#addElementTable").innerHTML =
    title + elementAttributes + submitButton;
}
