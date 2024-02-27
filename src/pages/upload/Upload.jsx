import { useState } from "react";

import frame_icon from "../../assets/icons/Frame.png";
import crossIcon from "../../assets/icons/crossIcon.png";
import dropdownIcon from "../../assets/icons/dropdownIcon.png";
import uploadIcon from "../../assets/icons/uploadWhite.png";
import loadingIcon from "../../assets/icons/loadingIcon.png";

import "./Upload.scss";

const tableHeaderNames = [
  "Sl No.",
  "Links",
  "Prefix",
  "Add Tags",
  "Selected Tags",
];

const commonOptions = ["Technology", "Food", "Fashion", "Travel", "Sports"];

const rows = [
  {
    slNo: "01",
    link: {
      label: "www.google.com",
      href: "https://www.thetimes.co.uk/",
    },
    prefix: "QB0GaK7",
    select: {
      label: "Select Tags",
      options: commonOptions,
    },
    tags: ["Technology", "Food", "Fashion", "Travel"],
  },
  {
    slNo: "02",
    link: {
      label: "www.google.com",
      href: "https://www.merriam-webster.com/",
    },
    prefix: "8oUTDyz",
    select: {
      label: "Select Tags",
      options: commonOptions,
    },
    tags: ["Food", "Sports"],
  },
  {
    slNo: "03",
    link: {
      label: "www.google.com",
      href: "https://www.newyorker.com/",
    },
    prefix: "Z9i2o9o",
    select: {
      label: "Select Tags",
      options: commonOptions,
    },
    tags: ["Sports", "Travel", "Fashion", "Food"],
  },
  {
    slNo: "04",
    link: {
      label: "www.google.com",
      href: "https://www.angelfire.lycos.com/",
    },
    prefix: "pW44f49",
    select: {
      label: "Select Tags",
      options: commonOptions,
    },
    tags: ["Technology"],
  },
  {
    slNo: "05",
    link: {
      label: "www.google.com",
      href: "https://www.rambler.ru/",
    },
    prefix: "w1vDJvP",
    select: {
      label: "Select Tags",
      options: commonOptions,
    },
    tags: ["Travel", "Fashion", "Food"],
  },
];

function Upload() {
  const [state, setState] = useState({
    selectedFileName: "",
    selectedRowSelect: "",
    isRemoved: false,
  });

  const onFileInpChange = ({ target }) => {
    const { files } = target;
    if (files.length) {
      handleStateUpdate({ selectedFileName: files[0].name });
    } else {
      handleStateUpdate({ selectedFileName: "" });
    }
  };

  const handleStateUpdate = (newState) =>
    setState((prevState) => ({ ...prevState, ...newState }));

  return (
    <main className="upload-container">
      <section className="upload-mobile-view">
        <p className="title">Upload CSV</p>
      </section>
      <section className="input-container">
        <div className="input-inner-container">
          <div>
            <img src={frame_icon} alt="excel icon" height={36} width={36} />
            <p>
              {state.selectedFileName
                ? state.selectedFileName
                : "Drop your excel sheet here or"}
              {!state.selectedFileName && (
                <label htmlFor="select-file"> browse</label>
              )}
            </p>
            {state.selectedFileName && (
              <p
                className="remove-text"
                onClick={() =>
                  handleStateUpdate({ selectedFileName: "", isRemoved: true })
                }
              >
                Remove
              </p>
            )}
            <input
              type="file"
              id="select-file"
              accept=".xlsx"
              onChange={onFileInpChange}
            />
          </div>
        </div>

        <button
          onClick={() => {
            if (state.selectedFileName) {
              handleStateUpdate({
                selectedFileName: "",
                isRemoved: true,
              });
            } else {
              handleStateUpdate({
                selectedFileName: "upload-template.xlsx",
              });
            }
          }}
          disabled={state.isRemoved}
        >
          <img
            src={state.selectedFileName ? loadingIcon : uploadIcon}
            alt={state.selectedFileName ? "Loading Icon" : "Upload Button"}
          />
          {!state.selectedFileName && <span>Upload</span>}
        </button>
      </section>

      {state.isRemoved && (
        <section className="uploaded-files-container">
          <p className="title">Uploads</p>

          <div className="upload-table">
            <section className="upload-table-header">
              {tableHeaderNames.map((headerName) => (
                <p key={headerName}>{headerName}</p>
              ))}
            </section>

            {rows.map((row) => (
              <section key={row.slNo} className="upload-table-row">
                <p>{row.slNo}</p>
                <a href={row.link.href} className="upload-link">
                  {row.link.label}
                </a>
                <p className="upload-prefix">{row.prefix}</p>

                <div
                  className="upload-table-select-container"
                  onClick={() =>
                    handleStateUpdate({
                      selectedRowSelect:
                        state.selectedRowSelect === row.slNo ? "" : row.slNo,
                    })
                  }
                >
                  <p>{row.select.label}</p>
                  <img src={dropdownIcon} alt="Dropdown Icon" />

                  {row.slNo === state.selectedRowSelect && (
                    <div className="option-container">
                      {row.select.options.map((option) => (
                        <p key={option}>{option}</p>
                      ))}
                    </div>
                  )}
                </div>
                <div className="upload-table-tags-container">
                  {row.tags.map((tag) => (
                    <div key={tag}>
                      {tag}
                      <img src={crossIcon} alt="crossIcon" />
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

export default Upload;
