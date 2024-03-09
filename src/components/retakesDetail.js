import React from 'react'
import Modal from "@mui/joy/Modal";
import { CloseOutlined } from "@mui/icons-material";

function retakesDetail() {
  return (
    <Modal
    open={true}
    sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    closeAfterTransition
    onClose={handleClose}
  >
     <div className="close">
            <CloseOutlined onClick={handleClose} />
          </div>
</Modal>
  )
}

export default retakesDetail
