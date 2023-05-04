import React from "react";

function Table({ tableData, setTableData }) {
  // const [tableData, setTableData] = useState({});

  const handleChangeTable = (e) => {
    setTableData({
      ...tableData,
      [e.target.name]: e.target.value,
    });
    console.log(tableData);
  };
  return (
    <>
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
                <input type="text" name="eq-desc" onChange={handleChangeTable} />
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
                <input type="text" name="eq-code" onChange={handleChangeTable} />
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
                <input type="text" name="pm-dec" onChange={handleChangeTable} />
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
                <input type="text" name="pm-type" onChange={handleChangeTable} />
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
                <input type="text" name="sub-area" onChange={handleChangeTable} />
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
                <input type="time" name="shift" onChange={handleChangeTable} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
