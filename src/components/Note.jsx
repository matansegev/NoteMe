import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

/**
 * Individual note component that displays note content with delete functionality
 */
function Note(props) {
  /**
   * Handles the delete button click to remove the note
   */
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
