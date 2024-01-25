import { useEffect, useRef, useState } from "react";
import Modal from "react-modal";
import "./save_segment.css";
// import Select from "react-dropdown-select";
import { Multiselect } from "multiselect-react-dropdown";
// import axios from "axios";

Modal.setAppElement("#root");

function SaveSegment(props) {
  const { openModal, closeModal } = props;
  const [segmentName, setSegmentName] = useState("");
  const [showSegmentName, setShowSegmentName] = useState("");
  const [list, setList] = useState([]);
  const [addList, setAddList] = useState([]);
  const multiselectRef = useRef();
  const [data, setData] = useState({});

  const handleaddSchema = () => {
    multiselectRef.current.resetSelectedValues();
    setAddList(list);
    // console.log(list);
    setShowSegmentName(segmentName);

    setData((prevData) => ({
      ...prevData,
      segment_name: segmentName,
      schema: {
        ...prevData.schema,
        ...list,
      },
    }));

    setSegmentName("");
  };

  const handleSubmit = (e) => {
    // axios.post("https://webhook.site/743b30e5-4127-4d1e-9f1d-654c8a87eb23",
    // {data})
    // .then(res => console.log(res) )
    // .catch(err => console.log(err.message))
    e.preventDefault();

    console.log(data);
    alert(
      "As mentioned earlier through mail, I'm not able to send the required data through backend api, so i printed the data in the CONSOLE"
    );
    setShowSegmentName("");
  };

  const schemas = [
    { value: "first_name", label: "FirstName" },
    { value: "last_name", label: "LastName" },
    { value: "gender", label: "Gender" },
    { value: "age", label: "Age" },
    { value: "account_name", label: "Account Name" },
    { value: "city", label: "City" },
    { value: "state", label: "State" },
  ];
  const [options] = useState(schemas);

  useEffect(() => {}, []);

  return (
    <>
      <Modal
        isOpen={openModal}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => {
          closeModal(false);
        }}
        style={{
          overlay: { backgroundColor: "grey" },
          content: { padding: "0", margin: "0" },
        }}
      >
        <div className="heading">
          <h2>Saving Segment</h2>
        </div>
        <div className="container">
          <div className="left-container">
            <h2>Enter the name of the Segment</h2>
            <div style={{ marginTop: "25px" }}>
              <input
                className="input_val"
                type="text"
                placeholder="Name of the segment"
                value={segmentName}
                onChange={(e) => setSegmentName(e.target.value)}
              />
            </div>
            <div style={{ marginTop: "25px" }}>
              <p>
                To save your segment, you need to add the schemas to build the
                query.
              </p>
            </div>
            <div style={{ width: "70%", marginTop: "25px" }}>
              <Multiselect
                options={options}
                displayValue="label"
                placeholder="Add schema to segment"
                ref={multiselectRef}
                onSelect={(e) => setList(e)}
              />

              <br />
              <div>
                <a onClick={handleaddSchema} style={{ cursor: "pointer" }}>
                  +Add new schema
                </a>
              </div>
            </div>
            <br />
            <br />
          </div>
          <div className="right-container">
            <div className="blue_box">
              {showSegmentName !== "" ? (
                <select className="segmentlist">
                  <option value="">{showSegmentName}</option>
                  {addList.map((item, index) => (
                    <option key={index} disabled>
                      {item.label}
                    </option>
                  ))}
                </select>
              ) : (
                ""
              )}
            </div>

            <div className="btn">
              <button onClick={handleSubmit}>Save the Segment</button>
              <button onClick={() => closeModal(false)}>Close</button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default SaveSegment;
