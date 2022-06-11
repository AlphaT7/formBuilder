const a = {
  data: `<tr>
          <td><label for="elData">Data</td>
          <td><input id="elData" data-attrtype="data" type="text" placeholder="data" name="attributeValue"/></td>
        </tr>`,
  class: `<tr>
            <td><label for="elClass">Class</label></td>
            <td><input id="elClass" data-attrtype="text" type="text" placeholder="class" name="attributeValue"/></td>
          </tr>`,
  id: `<tr>
          <td><label for="elId">Id</label></td>
          <td><input id="elId" data-attrtype="id" type="text" placeholder="id" name="attributeValue"/></td>
        </tr>`,
  name: `<tr>
          <td><label for="elName">Name</label></td>
          <td><input id="elName" data-attrtype="name" type="text" placeholder="name" name="attributeValue"/></td>
        </tr>`,
  option: `<tr>
            <td><label for="elOption">Option</label></td>
            <td><textarea id="elOption" data-attrtype="option" type="text" placeholder="name:value1,&#13;name:value2,&#13;name:value3,&#13;name:value4,&#13;etc..." rows="5" name="attributeValue"></textarea></td>
          </tr>`,
  value: `<tr>
             <td><label for="elValue">Value</label></td>
             <td><input id="elValue" data-attrtype="value" type="text" placeholder="value" name="attributeValue"/></td>
          </tr>`,
  min: `<tr>
          <td><label for="elMin">Min</label></td>
          <td><input id="elMin" data-attrtype="min" type="text" placeholder="min" name="attributeValue"></td>
        </tr>`,
  max: `<tr>
          <td><label for="elMax">Max</label></td>
          <td><input id="elMax" data-attrtype="max" type="text" placeholder="max" name="attributeValue"></td>
        </tr>`,
  step: `<tr>
          <td><label for="elStep">Step</label></td>
          <td><input id="elStep" data-attrtype="step" type="text" placeholder="step" name="attributeValue"></td>
        </tr>`,
  pattern: `<tr>
              <td><label for="elPattern">Pattern</label></td>
              <td><input id="elPattern" data-attrtype="pattern" type="text" placeholder="pattern" name="attributeValue"></td>
            </tr>`,
  accept: `<tr>
              <td><label for="elAccept">Accept</label></td>
              <td><input id="elAccept" data-attrtype="accept" type="text" placeholder="accept" name="attributeValue"></td>
            </tr>`,
  rows: `<tr>
            <td><label for="elRows">Rows</label></td>
            <td><input id="elRows" data-attrtype="rows" type="text" placeholder="rows" name="attributeValue"></td>
        </tr>`,
  cols: `<tr>
            <td><label for="elCols">Cols</label></td>
            <td><input id="elCols" data-attrtype="cols" type="text" placeholder="cols" name="attributeValue"></td>
          </tr>`,
  wrap: `<tr>
            <td><label for="elWrap">Wrap</label></td>
            <td><input id="elWrap" data-attrtype="wrap" type="text" placeholder="wrap" name="attributeValue"></td>
        </tr>`,
  multiple: `<tr>
              <td><label for="elMultiple">Multiple</label></td> 
              <td>
                <select id="elMultiple" data-attrtype="multiple" name="attributeValue">
                  <option value="true">Multiple = True</option>
                  <option value="false" selected>Multiple = False</option>
                </select>
              </td>
            </tr>`,
  minlength: `<tr>
                <td><label for="elMinLength">MinLength</label></td>
                <td><input id="elMinLength" data-attrtype="minlength" type="text" placeholder="minlength" name="attributeValue"></td>
              </tr>`,
  maxlength: `<tr>
                <td><label for="elMaxLength">MaxLength</label></td>
                <td><input id="elMaxLength" data-attrtype="maxlength" type="text" placeholder="maxlength" name="attributeValue"></td>
              </tr>`,
  required: `<tr>
              <td><label for="elRequired">Required</label></td>
              <td>
                <select id="elRequired" data-attrtype="required" name="attributeValue">
                  <option value="true">Required = True</option>
                  <option value="false" selected>Required = False</option>
                </select>
              </td>
            </tr>`,
  checked: `<tr>
              <td><label for="elChecked">Checked</label></td>
              <td>
                <select id="elChecked" data-attrtype="checked" name="attributeValue">
                  <option value="true">Checked = True</option>
                  <option value="false" selected>Checked = False</option>
                </select>
              </td>
            </tr>`,
  list: `<tr>
          <td><label for="elList">List</label></td>
          <td><input id="elList" data-attrtype="list" type="text" placeholder="list" name="attributeValue"></td>
        </tr>`,
  labelname: `<tr>
                <td><label for="elLabelName">LabelName</label></td>
                <td><input id="elLabelName" data-attrtype="labelname" type="text" placeholder="labelname" name="attributeValue"></td>
              </tr>`,
  formenctype: `<tr>
                  <td><label for="elFormEnctype">FormEnctype</label></td>
                  <td>
                    <select id="elFormEnctype" data-attrtype="formenctype" name="attributeValue">
                      <option value="" selected>Choose Formenctype</option>
                      <option value="application/x-www-form-urlencoded">application/x-www-form-urlencoded</option>
                      <option value="multipart/form-data">multipart/form-data</option>
                      <option value="text/plain">text/plain</option>
                    </select>
                  </td>
                </tr>`,
  formmethod: `<tr>
                  <td><label for="elFormMethod">FormMethod</label></td>
                  <td>
                    <select id="elFormMethod" data-attrtype="formmethod" name="attributeValue">
                      <option value="" selected>Choose Formmethod</option>
                      <option value="get">get</option>
                      <option value="post">post</option>
                      </select>
                  </td>
                </tr>`,
};

const elementDecisionTree = {
  button: [a.id, a.class, a.name, a.data, a.value, a.labelname],
  checkbox: [a.id, a.class, a.name, a.data, a.checked, a.labelname],
  color: [a.id, a.class, a.name, a.data, a.value, a.labelname, a.required],
  datalist: [a.id, a.option],
  date: [
    a.id,
    a.class,
    a.name,
    a.data,
    a.value,
    a.min,
    a.max,
    a.pattern,
    a.labelname,
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
    a.labelname,
    a.required,
  ],
  email: [
    a.id,
    a.class,
    a.name,
    a.data,
    a.value,
    a.pattern,
    a.labelname,
    a.required,
  ],
  file: [
    a.id,
    a.class,
    a.name,
    a.data,
    a.value,
    a.accept,
    a.multiple,
    a.labelname,
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
    a.labelname,
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
    a.labelname,
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
    a.labelname,
    a.required,
  ],
  radio: [a.id, a.class, a.name, a.data, a.value, a.labelname, a.checked],
  range: [
    a.id,
    a.class,
    a.name,
    a.data,
    a.value,
    a.min,
    a.max,
    a.step,
    a.labelname,
    a.list,
  ],
  reset: [a.id, a.class, a.name, a.data, a.labelname, a.value],
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
    a.labelname,
    a.required,
  ],
  select: [
    a.id,
    a.class,
    a.name,
    a.data,
    a.value,
    a.multiple,
    a.labelname,
    a.option,
  ],
  submit: [
    a.id,
    a.class,
    a.name,
    a.data,
    a.value,
    a.formmethod,
    a.labelname,
    a.formenctype,
  ],
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
    a.labelname,
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
    a.labelname,
    a.required,
  ],
  textarea: [
    a.id,
    a.class,
    a.name,
    a.data,
    a.rows,
    a.cols,
    a.wrap,
    a.labelname,
    a.required,
  ],
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
    a.labelname,
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
    a.labelname,
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
    a.labelname,
    a.required,
  ],
};

export { elementDecisionTree };
