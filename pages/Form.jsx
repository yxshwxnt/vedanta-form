import React, { useState } from "react";
import { database } from "../lib/firebase";
import { ref, set } from "firebase/database";

function Form() {
  const [formData, setFormData] = useState({});
  const [tableData, setTableData] = useState({});
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmitName(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  const handleChangeTable = (e) => {
    setTableData({
      ...tableData,
      [e.target.name]: e.target.value,
    });
    console.log(tableData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      set(ref(database, "pm-audit/" + name), {
        tableData,
        formData,
      });
      setFormData({});
      setTableData({});
      setName("");
      alert("Form submitted successfully!");
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData);
  };

  if (name === null || !submitted) {
    return (
      <form onSubmit={handleSubmitName}>
        <label>
          Enter your name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }

  return (
    <>
      <div className="flex flex-col text-center items-center">
        <div className="text-center items-center">
          <table cellSpacing={0} border={0}>
            <colgroup span={6} width={64} />
            <colgroup width={183} />
            <colgroup span={2} width={64} />
            <tbody>
              <tr>
                <td
                  style={{
                    borderTop: "2px solid #000000",
                    borderLeft: "2px solid #000000",
                    borderRight: "2px solid #000000",
                  }}
                  colSpan={9}
                  height={32}
                  align="center"
                  valign="middle"
                  bgcolor="#FCD5B5"
                >
                  <b>
                    <font size={5} color="#000000">
                      PM Quality Checklist
                    </font>
                  </b>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    borderTop: "2px solid #000000",
                    borderBottom: "1px solid #000000",
                    borderLeft: "2px solid #000000",
                    borderRight: "1px solid #000000",
                  }}
                  colSpan={4}
                  height={20}
                  align="left"
                  valign="middle"
                >
                  <b>
                    <font color="#000000">EQUIPMENT DESCRIPTION :</font>
                  </b>
                </td>
                <td
                  style={{
                    borderTop: "2px solid #000000",
                    borderBottom: "1px solid #000000",
                    borderLeft: "1px solid #000000",
                    borderRight: "1px solid #000000",
                  }}
                  colSpan={2}
                  align="left"
                  valign="middle"
                >
                  <input
                    type="text"
                    name="eq-desc"
                    onChange={handleChangeTable}
                  />
                </td>
                <td
                  style={{
                    borderTop: "2px solid #000000",
                    borderBottom: "1px solid #000000",
                    borderLeft: "1px solid #000000",
                    borderRight: "1px solid #000000",
                  }}
                  align="left"
                  valign="middle"
                >
                  <b>
                    <font color="#000000">EQUIPMENT CODE</font>
                  </b>
                </td>
                <td
                  style={{
                    borderTop: "2px solid #000000",
                    borderBottom: "1px solid #000000",
                    borderLeft: "1px solid #000000",
                    borderRight: "2px solid #000000",
                  }}
                  colSpan={2}
                  align="left"
                  valign="middle"
                >
                  <input
                    type="text"
                    name="eq-code"
                    onChange={handleChangeTable}
                  />
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    borderTop: "1px solid #000000",
                    borderBottom: "1px solid #000000",
                    borderLeft: "2px solid #000000",
                    borderRight: "1px solid #000000",
                  }}
                  colSpan={4}
                  height={19}
                  align="left"
                  valign="middle"
                >
                  <b>
                    <font color="#000000">PM DESCRIPTION :</font>
                  </b>
                </td>
                <td
                  style={{
                    borderTop: "2px solid #000000",
                    borderBottom: "1px solid #000000",
                    borderLeft: "1px solid #000000",
                    borderRight: "1px solid #000000",
                  }}
                  colSpan={2}
                  align="left"
                  valign="middle"
                >
                  <input
                    type="text"
                    name="pm-dec"
                    onChange={handleChangeTable}
                  />
                </td>
                <td
                  style={{
                    borderTop: "1px solid #000000",
                    borderBottom: "1px solid #000000",
                    borderLeft: "1px solid #000000",
                    borderRight: "1px solid #000000",
                  }}
                  align="left"
                  valign="middle"
                >
                  <b>
                    <font color="#000000">PM Type (Elect/Mech/ C&amp;I)</font>
                  </b>
                </td>
                <td
                  style={{
                    borderTop: "1px solid #000000",
                    borderBottom: "1px solid #000000",
                    borderLeft: "1px solid #000000",
                    borderRight: "2px solid #000000",
                  }}
                  colSpan={2}
                  align="left"
                  valign="middle"
                >
                  <input
                    type="text"
                    name="pm-type"
                    onChange={handleChangeTable}
                  />
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    borderTop: "1px solid #000000",
                    borderBottom: "1px solid #000000",
                    borderLeft: "2px solid #000000",
                    borderRight: "1px solid #000000",
                  }}
                  colSpan={4}
                  height={19}
                  align="left"
                  valign="middle"
                >
                  <b>
                    <font color="#000000">AREA : </font>
                  </b>
                </td>
                <td
                  style={{
                    borderBottom: "1px solid #000000",
                    borderLeft: "1px solid #000000",
                    borderRight: "1px solid #000000",
                  }}
                  colSpan={2}
                  align="left"
                  valign="middle"
                >
                  <input type="text" name="area" onChange={handleChangeTable} />
                </td>
                <td
                  style={{
                    borderTop: "1px solid #000000",
                    borderBottom: "1px solid #000000",
                    borderLeft: "1px solid #000000",
                    borderRight: "1px solid #000000",
                  }}
                  align="left"
                  valign="middle"
                >
                  <b>
                    <font color="#000000">SUB AREA</font>
                  </b>
                </td>
                <td
                  style={{
                    borderTop: "1px solid #000000",
                    borderBottom: "1px solid #000000",
                    borderLeft: "1px solid #000000",
                    borderRight: "2px solid #000000",
                  }}
                  colSpan={2}
                  align="left"
                  valign="middle"
                >
                  <input
                    type="text"
                    name="sub-area"
                    onChange={handleChangeTable}
                  />
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    borderTop: "1px solid #000000",
                    borderBottom: "1px solid #000000",
                    borderLeft: "2px solid #000000",
                    borderRight: "1px solid #000000",
                  }}
                  colSpan={4}
                  height={19}
                  align="left"
                  valign="middle"
                >
                  <b>
                    <font color="#000000">ENGINEER INCHARGE:</font>
                  </b>
                </td>
                <td
                  style={{
                    borderTop: "1px solid #000000",
                    borderBottom: "1px solid #000000",
                    borderLeft: "1px solid #000000",
                    borderRight: "1px solid #000000",
                  }}
                  colSpan={2}
                  align="left"
                  valign="middle"
                >
                  <input
                    type="text"
                    name="engg-incharge"
                    onChange={handleChangeTable}
                  />
                </td>
                <td
                  style={{
                    borderTop: "1px solid #000000",
                    borderBottom: "1px solid #000000",
                    borderLeft: "1px solid #000000",
                    borderRight: "1px solid #000000",
                  }}
                  align="left"
                  valign="middle"
                >
                  <b>
                    <font color="#000000">INSPECTION BY: </font>
                  </b>
                </td>
                <td
                  style={{
                    borderTop: "1px solid #000000",
                    borderBottom: "1px solid #000000",
                    borderLeft: "1px solid #000000",
                    borderRight: "2px solid #000000",
                  }}
                  colSpan={2}
                  align="left"
                  valign="middle"
                >
                  <input
                    type="text"
                    name="inspection-by"
                    onChange={handleChangeTable}
                  />
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    borderTop: "1px solid #000000",
                    borderBottom: "2px solid #000000",
                    borderLeft: "2px solid #000000",
                    borderRight: "1px solid #000000",
                  }}
                  colSpan={4}
                  height={20}
                  align="left"
                  valign="middle"
                >
                  <b>
                    <font color="#000000">DATE:</font>
                  </b>
                </td>
                <td
                  style={{
                    borderTop: "1px solid #000000",
                    borderBottom: "2px solid #000000",
                    borderLeft: "1px solid #000000",
                    borderRight: "1px solid #000000",
                  }}
                  colSpan={2}
                  align="left"
                  valign="middle"
                  sdnum="1033;1033;M/D/YYYY"
                >
                  <input type="date" name="date" onChange={handleChangeTable} />
                </td>
                <td
                  style={{
                    borderTop: "1px solid #000000",
                    borderBottom: "2px solid #000000",
                    borderLeft: "1px solid #000000",
                    borderRight: "1px solid #000000",
                  }}
                  align="left"
                  valign="middle"
                >
                  <b>
                    <font color="#000000">SHIFT</font>
                  </b>
                </td>
                <td
                  style={{
                    borderTop: "1px solid #000000",
                    borderBottom: "2px solid #000000",
                    borderLeft: "1px solid #000000",
                    borderRight: "2px solid #000000",
                  }}
                  colSpan={2}
                  align="left"
                  valign="middle"
                >
                  <input
                    type="time"
                    name="shift"
                    onChange={handleChangeTable}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto mt-8">
          <div className="mb-4 flex gap-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              PM compliance for schedule and duration
            </label>
            <input
              type="text"
              name="pm-comp"
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4 flex gap-4">
            <label
              htmlFor="text"
              className="block text-gray-700 font-bold mb-2"
            >
              PM checklist/tasklist site availbility during PM
            </label>
            <input
              type="text"
              name="pm-site-avail"
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4 flex gap-4">
            <label
              htmlFor="text"
              className="block text-gray-700 font-bold mb-2"
            >
              Is PM tasklist / SMP comprehensive, considering specfic measurable
              and check points
            </label>
            <input
              type="text"
              name="pm-smp-cp"
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4 flex gap-4">
            <label
              htmlFor="text"
              className="block text-gray-700 font-bold mb-2"
            >
              PM checklist / tasklist field execution compliance, filled data -
              quality & actual duration
            </label>
            <input
              type="text"
              name="pm-quality-actual-duration"
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4 flex gap-4">
            <label
              htmlFor="text"
              className="block text-gray-700 font-bold mb-2"
            >
              PM tasklist activity / process compliance as per SMP requirements
              & SMP availabilitty
            </label>
            <input
              type="text"
              name="pm-smp-req-avail"
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4 flex gap-4">
            <label
              htmlFor="text"
              className="block text-gray-700 font-bold mb-2"
            >
              PM manpower & technicians knowledge / competency for task list
            </label>
            <input
              type="text"
              name="pm-manpower"
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4 flex gap-4">
            <label
              htmlFor="text"
              className="block text-gray-700 font-bold mb-2"
            >
              Engineer presence / supervion at work site during PM
            </label>
            <input
              type="text"
              name="pm-supervision"
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4 flex gap-4">
            <label
              htmlFor="text"
              className="block text-gray-700 font-bold mb-2"
            >
              Availability of tools & tackles as per PM tasklist
            </label>
            <input
              type="text"
              name="pm-tools"
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4 flex gap-4">
            <label
              htmlFor="text"
              className="block text-gray-700 font-bold mb-2"
            >
              PM activity and observation not addressed due to manpower / time /
              spare / consumable
            </label>
            <input
              type="text"
              name="pm-activity-obser-not-addressed"
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4 flex gap-4">
            <label
              htmlFor="text"
              className="block text-gray-700 font-bold mb-2"
            >
              Equipment related defects / observations availability and closure
              during PM
            </label>
            <input
              type="text"
              name="pm-eqp-defect"
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4 flex gap-4">
            <label
              htmlFor="text"
              className="block text-gray-700 font-bold mb-2"
            >
              Abnormalities observed recorded, if not attended during the PM
              converted into MA
            </label>
            <input
              type="text"
              name="pm-abnornalities"
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4 flex gap-4">
            <label
              htmlFor="text"
              className="block text-gray-700 font-bold mb-2"
            >
              During & before PM closure, equipment related CLTI activities
              compliance
            </label>
            <input
              type="text"
              name="pm-clti-activities"
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline m-4"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;
