import React from "react";
import Table from "../Table";
import "./style.css"

function UserTable(props) {
    return (
      <div className="datatable mt-5 bg-primary">
        <table
          id="table"
          className="table table-striped table-hover table-condensed"
        >
          <thead>
            <tr>
              <th></th>
              <th onClick={props.sortName}>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>DOB</th>
            </tr>
          </thead>
  
          <Table users={props.users}/>
        </table>
      </div>
    );
  }
  
  export default UserTable;