const log = console.log.bind(console);

/* -- attributes variables -- */

const a = {
  data: `<tr>
          <td><input type="text" placeholder="data" /></td>
        </tr>`,
  class: `<tr>
            <td><input type="text" placeholder="class" /></td>
          </tr>`,
  id: `<tr>
          <td><input type="text" placeholder="id" /></td>
        </tr>`,
  name: `<tr>
          <td><input type="text" placeholder="name" /></td>
        </tr>`,
  "option-values": `<tr>
                      <td><textarea type="text" placeholder="option-value1,&#13;option-value2,&#13;option-value3,&#13;option-value4,&#13;etc..." rows="5"></textarea></td>
                    </tr>`,
  value: `<tr>
          <td><input type="text" placeholder="value" /></td>
        </tr>`,
  min: `<tr>
          <td><input type="text" placeholder="min" /></td>
        </tr>`,
  max: `<tr>
          <td><input type="text" placeholder="max" /></td>
        </tr>`,
  step: `<tr>
          <td><input type="text" placeholder="step" /></td>
        </tr>`,
  pattern: `<tr>
              <td><input type="text" placeholder="pattern" /></td>
            </tr>`,
  accept: `<tr>
              <td><input type="text" placeholder="accept" /></td>
            </tr>`,
  rows: `<tr>
              <td><input type="text" placeholder="rows" /></td>
            </tr>`,
  cols: `<tr>
              <td><input type="text" placeholder="cols" /></td>
            </tr>`,
  wrap: `<tr>
              <td><input type="text" placeholder="wrap" /></td>
            </tr>`,
  multiple: `<tr>
              <td>
                <select>
                  <option value="true">Multiple = True</option>
                  <option value="false" selected>Multiple = False</option>
                </select>
              </td>
            </tr>`,
  minlength: `<tr>
                <td><input type="text" placeholder="minlength" /></td>
              </tr>`,
  maxlength: `<tr>
                <td><input type="text" placeholder="maxlength" /></td>
              </tr>`,
  required: `<tr>
              <td>
                <select>
                  <option value="true">Required = True</option>
                  <option value="false" selected>Required = False</option>
                </select>
              </td>
            </tr>`,
  checked: `<tr>
              <td>
                <select>
                  <option value="true">Checked = True</option>
                  <option value="false" selected>Checked = False</option>
                </select>
              </td>
            </tr>`,
  list: `<tr>
          <td><input type="text" placeholder="list" /></td>
        </tr>`,
  formenctype: `<tr>
                  <td>
                    <select>
                      <option value="" selected>Choose Formenctype</option>
                      <option value="application/x-www-form-urlencoded">application/x-www-form-urlencoded</option>
                      <option value="multipart/form-data">multipart/form-data</option>
                      <option value="text/plain">text/plain</option>
                    </select>
                  </td>
                </tr>`,
  formmethod: `<tr>
                  <td>
                    <select>
                      <option value="" selected>Choose Formmethod</option>
                      <option value="get">get</option>
                      <option value="post">post</option>
                      </select>
                  </td>
                </tr>`,
};

const elementDecisionTree = {
  button: [a.id, a.class, a.name, a.data, a.value],
  checkbox: [a.id, a.class, a.name, a.data, a.checked],
  color: [a.id, a.class, a.name, a.data, a.value, a.required],
  "datalist-input": [
    a.id,
    a.class,
    a.name,
    a.data,
    a.list,
    a.value,
    a.required,
  ],
  datalist: [a.id, a["option-values"]],
  date: [
    a.id,
    a.class,
    a.name,
    a.data,
    a.value,
    a.min,
    a.max,
    a.pattern,
    a.required,
  ],
  "datetime-local": [
    a.id,
    a.class,
    a.name,
    a.data,
    a.value,
    a.min,
    a.max,
    a.step,
    a.required,
  ],
  email: [a.id, a.class, a.name, a.data, a.value, a.pattern, a.required],
  file: [
    a.id,
    a.class,
    a.name,
    a.data,
    a.value,
    a.accept,
    a.multiple,
    a.required,
  ],
  hidden: [a.id, a.name, a.data, a.value],
  month: [
    a.id,
    a.name,
    a.data,
    a.class,
    a.value,
    a.min,
    a.max,
    a.list,
    a.step,
    a.pattern,
    a.required,
  ],
  number: [
    a.id,
    a.name,
    a.class,
    a.data,
    a.value,
    a.min,
    a.max,
    a.step,
    a.pattern,
    a.list,
    a.required,
  ],
  password: [
    a.id,
    a.name,
    a.class,
    a.data,
    a.min,
    a.max,
    a.pattern,
    a.required,
  ],
  radio: [a.id, a.class, a.name, a.data, a.value, a.checked],
  range: [a.id, a.class, a.name, a.data, a.value, a.min, a.max, a.step, a.list],
  reset: [a.id, a.class, a.name, a.data, a.value],
  search: [
    a.id,
    a.class,
    a.name,
    a.data,
    a.list,
    a.value,
    a.minlength,
    a.maxlength,
    a.pattern,
    a.required,
  ],
  select: [
    a.id,
    a.class,
    a.name,
    a.data,
    a.value,
    a.multiple,
    a["option-values"],
  ],
  submit: [a.id, a.class, a.name, a.data, a.value, a.formmethod, a.formenctype],
  tel: [
    a.id,
    a.class,
    a.name,
    a.data,
    a.value,
    a.list,
    a.maxlength,
    a.minlength,
    a.pattern,
    a.required,
  ],
  text: [
    a.id,
    a.class,
    a.name,
    a.data,
    a.value,
    a.list,
    a.minlength,
    a.maxlength,
    a.pattern,
    a.required,
  ],
  textarea: [a.id, a.class, a.name, a.data, a.rows, a.cols, a.wrap, a.required],
  time: [
    a.id,
    a.class,
    a.name,
    a.data,
    a.list,
    a.step,
    a.minlength,
    a.maxlength,
    a.pattern,
    a.required,
  ],
  url: [
    a.id,
    a.class,
    a.name,
    a.data,
    a.value,
    a.pattern,
    a.list,
    a.minlength,
    a.maxlength,
    a.required,
  ],
  week: [
    a.id,
    a.class,
    a.name,
    a.data,
    a.value,
    a.min,
    a.max,
    a.list,
    a.required,
  ],
};

document.querySelectorAll(".pushElement").forEach((button) => {
  button.addEventListener("click", function (e) {
    chooseElement(e);
  });
});

document
  .querySelector("#addElementPanel")
  .addEventListener("click", function () {
    document.querySelector("#addElementPanel").style.display = "none";
    document.querySelector("#addElementTable").style.display = "none";
    document.querySelector("#elements_table").style.filter = "blur(0px)";
  });

function chooseElement(e) {
  let title = `<tr class="panelTitle">
                  <td>${e.target.dataset.eltype}</td>
                </tr>`;

  let elementAttributes = elementDecisionTree[e.target.dataset.eltype].join("");

  let submitButton = `<tr>
                        <td><input type="button" value="Add" /></td>
                      </tr>`;

  document.querySelector("#addElementPanel").style.display = "block";
  document.querySelector("#addElementTable").style.display = "block";
  document.querySelector("#elements_table").style.filter = "blur(5px)";
  document.querySelector("#addElementTable").innerHTML =
    title + elementAttributes + submitButton;
}
