import React, { useEffect, useRef, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { InputText } from "primereact/inputtext";
import { MultiSelect } from "primereact/multiselect";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Toast } from "primereact/toast";

function Tabel({ columns = [], dataTabel = [], namaTabel = "unknown" }) {
  const [filters, setFilters] = useState(null);
  const [globalFilterValue, setGlobalFilterValue] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);
  const [visibleColumns, setVisibleColumns] = useState(columns);
  const [rowsToAction, setRowsToAction] = useState([]);
  const [deleteAllDataSelected, setDeleteAllDataSelected] = useState(false);
  const [dataDialog, setDataDialog] = useState("");
  const dt = useRef(null);
  const toast = useRef(null);

  //   filter setting

  useEffect(() => {
    initFilters();
  }, []);

  const initFilters = () => {
    let filterSetting = {
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    };
    columns.forEach((col) => {
      filterSetting[col.field] = {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
      };
    });
    setFilters(filterSetting);
    setGlobalFilterValue("");
  };

  const clearFilter = () => {
    initFilters();
  };

  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };

    _filters["global"].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  //   column select

  const onColumnToggle = (e) => {
    const selectedColumns = e.value;
    const orderedSelectedColumns = columns.filter((col) =>
      selectedColumns.some((sCol) => sCol.field === col.field)
    );

    setVisibleColumns(orderedSelectedColumns);
  };

  //   export setting
  const exportColumns = visibleColumns.map((col) => ({
    title: col.header,
    dataKey: col.field,
  }));

  const exportCSV = (selectionOnly) => {
    dt.current.exportCSV({ selectionOnly });
  };

  const exportPdf = () => {
    import("jspdf").then((jsPDF) => {
      import("jspdf-autotable").then(() => {
        const doc = new jsPDF.default(0, 0);

        doc.autoTable({
          columns: exportColumns,
          body: selectedRows.length ? selectedRows : dataTabel,
        });
        doc.save(`${namaTabel}.pdf`);
      });
    });
  };

  const exportExcel = () => {
    const splitVisibleColumnsFromSelected = () => {
      let tempData = [];
      selectedRows.forEach((row) => {
        let tempRow = {};
        visibleColumns.forEach((col) => {
          if (Object.keys(row).includes(col.field)) {
            tempRow[col.field] = row[col.field];
          }
        });
        tempData.push(tempRow);
      });
      return tempData;
    };

    const dataExcel =
      visibleColumns.length == columns.length
        ? selectedRows
        : splitVisibleColumnsFromSelected();

    import("xlsx").then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(
        dataExcel.length ? dataExcel : dataTabel
      );
      const workbook = { Sheets: { data: worksheet }, SheetNames: ["data"] };
      const excelBuffer = xlsx.write(workbook, {
        bookType: "xlsx",
        type: "array",
      });

      saveAsExcelFile(excelBuffer, namaTabel);
    });
  };

  const saveAsExcelFile = (buffer, fileName) => {
    import("file-saver").then((module) => {
      if (module && module.default) {
        let EXCEL_TYPE =
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
        let EXCEL_EXTENSION = ".xlsx";
        const data = new Blob([buffer], {
          type: EXCEL_TYPE,
        });

        module.default.saveAs(
          data,
          fileName + "_export_" + new Date().getTime() + EXCEL_EXTENSION
        );
      }
    });
  };

  //   action rows

  // delete row
  const actionBodyTemplate = (rowData) => (
    <div>
      <Button
        icon="pi pi-pencil"
        rounded
        outlined
        className="mr-2 rounded-circle"
        onClick={() => editData(rowData)}
      />
      <Button
        className="rounded-circle"
        icon="pi pi-trash"
        rounded
        outlined
        severity="danger"
        onClick={() => confirmDeleteData(rowData)}
      />
    </div>
  );

  const confirmDeleteData = (dataTabel) => {
    setRowsToAction(dataTabel);
    setDataDialog("DELETE");
  };

  const deleteRowDialogFooter = () => (
    <div className="d-flex gap-2 justify-content-end">
      <Button
        className="rounded-2"
        label="Batal"
        icon="pi pi-times"
        outlined
        onClick={() => setDataDialog("")}
      />
      <Button
        className="rounded-2"
        label="Ya"
        icon="pi pi-check"
        severity="danger"
        onClick={deleteData}
      />
    </div>
  );

  const deleteData = () => {
    // console.log(selectedRows);
    setDataDialog("");
    setSelectedRows([]);
    setRowsToAction([]);

    toast.current.show({
      severity: "success",
      summary: "Successful",
      detail: "Data Deleted",
      life: 3000,
    });
  };

  const saveData = () => {
    toast.current.show({
      severity: "success",
      summary: "Successful",
      detail: "Data has been Uploaded",
      life: 3000,
    });
    setDataDialog();
  };

  const editData = (rowData) => {
    console.log(rowData.id);
    setDataDialog("EDIT");
  };

  const dataDialogFooter = (
    <div>
      <Button
        label="Cancel"
        icon="pi pi-times"
        className="rounded-2"
        outlined
        onClick={() => setDataDialog()}
      />
      <Button
        label={dataDialog == "ADD" ? "Tambah" : "Simpan"}
        icon="pi pi-check"
        className="rounded-2 mx-2"
        onClick={saveData}
      />
    </div>
  );

  useEffect(() => {
    setDeleteAllDataSelected(selectedRows.length > 1);
  }, [selectedRows]);

  //   header Tabel

  const header = (
    <div className="flex d-flex flex-wrap align-items-center justify-content-between gap-2">
      <div className="col-12">
        <div className="row">
          <div className="col-12 col-lg-4">
            <span className="text-xl text-900 font-bold">{namaTabel}</span>
          </div>

          <div className="col-12 col-lg-8 d-flex gap-2 justify-content-end top-rightTabel">
            <span className="p-input-icon-left mr-4 searchText">
              <i className="pi pi-search"></i>
              <InputText
                value={globalFilterValue}
                onChange={onGlobalFilterChange}
                placeholder="Keyword Search"
              />
            </span>
            <Button
              className="rounded-circle"
              icon="pi pi-refresh"
              rounded
              raised
            />
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className="row">
          <div className="col-md-8 col-12 d-flex">
            <div className="filter col-md-6 col-3">
              <Button
                className="rounded-2"
                type="button"
                icon="pi pi-filter-slash"
                label="Clear"
                outlined
                onClick={clearFilter}
              />
            </div>
            <div className="col-md-6 col-9">
              <MultiSelect
                value={visibleColumns}
                options={columns}
                optionLabel="header"
                onChange={onColumnToggle}
                className="w-100 sm:w-20rem"
                display="chip"
              />
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="col-12 d-flex gap-3 justify-content-end exportBtn">
              <Button
                type="button"
                className="rounded-circle"
                icon="pi pi-file"
                rounded
                onClick={() => exportCSV(selectedRows.length > 0)}
                data-pr-tooltip="CSV"
              />
              <Button
                type="button"
                className="rounded-circle"
                icon="pi pi-file-excel"
                severity="success"
                rounded
                onClick={exportExcel}
                data-pr-tooltip="XLS"
              />
              <Button
                type="button"
                icon="pi pi-file-pdf"
                className="rounded-circle"
                severity="warning"
                rounded
                onClick={exportPdf}
                data-pr-tooltip="PDF"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className="flex flex-wrap gap-2">
          <Button
            label="New"
            icon="pi pi-plus"
            severity="success"
            className="rounded-2"
            onClick={() => setDataDialog("ADD")}
          />
          {deleteAllDataSelected && (
            <Button
              label="Delete"
              icon="pi pi-trash"
              severity="danger"
              className="rounded-2 mx-2"
              onClick={() => {
                setRowsToAction(selectedRows);
                setDataDialog("DELETE");
              }}
            />
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="TabelDashboard">
      <Toast ref={toast} />
      <DataTable
        header={header}
        value={dataTabel}
        ref={dt}
        scrollable
        scrollHeight="500px"
        resizableColumns
        selectionMode="multiple"
        selection={selectedRows}
        onSelectionChange={(e) => setSelectedRows(e.value)}
        dataKey="id"
        filters={filters}
        globalFilterFields={["name", "company"]}
        emptyMessage="No data found"
        stripedRows
        paginator
        removableSort
        rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
        tableStyle={{ minWidth: "50rem" }}>
        <Column
          selectionMode="multiple"
          headerStyle={{ widows: "3rem" }}></Column>
        {visibleColumns.map((col, idx) => (
          <Column
            field={col.field}
            header={col.header}
            filter
            key={idx}
            sortable></Column>
        ))}
        <Column
          header="Aksi"
          body={actionBodyTemplate}
          headerStyle={{
            width: "10%",
            minWidth: "8rem",
            justifyContent: "center",
          }}
          bodyStyle={{ textAlign: "center" }}></Column>
      </DataTable>

      <Dialog
        visible={dataDialog == "DELETE"}
        style={{ width: "32rem" }}
        breakpoints={{ "960px": "75vw", "641px": "90vw" }}
        header="Hapus Data"
        modal
        footer={deleteRowDialogFooter}
        onHide={() => setDataDialog("")}>
        <div className="confirmation-content d-flex">
          <i
            className="pi pi-exclamation-triangle mx-3"
            style={{ fontSize: "2rem" }}
          />
          {rowsToAction.length > 1 ? (
            <span>
              Apakah kamu yakin menghapus {rowsToAction.length} data ini?
            </span>
          ) : (
            <span>
              Apakah kamu yakin menghapus data pada baris yang kamu pilih?
            </span>
          )}
        </div>
      </Dialog>

      <Dialog
        visible={dataDialog == "ADD" || dataDialog == "EDIT"}
        style={{ width: "32rem" }}
        breakpoints={{ "960px": "75vw", "641px": "90vw" }}
        header="Data Details"
        modal
        className="p-fluid"
        footer={dataDialogFooter}
        onHide={() => setDataDialog()}>
        <form
          action=""
          className="py-3 form-input-tabel">
          {columns.map((col, i) => (
            <div
              className="input-group mb-3"
              key={i}>
              <span className="input-group-text col-12">{col.header}</span>
              {col.type == "text" && (
                <input
                  type="text"
                  placeholder={`Isi data ${col.field}`}
                  className="form-control"
                />
              )}
            </div>
          ))}
        </form>
      </Dialog>
    </div>
  );
}

export default Tabel;
