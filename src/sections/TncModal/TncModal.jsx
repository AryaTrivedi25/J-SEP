import React, { useState } from "react";
import styles from "./TncModalStyles.module.css";

function TncModal() {
  const [showModal, setShowModal] = useState(true);
  console.log(showModal);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const closeTab = () => {
    window.opener = null;
    window.open("", "_self");
    window.close();
  };

  const MyModal = () => {
    return (
      <div>
        <div className={styles.wrapper}></div>
        <div className={styles.container} style={{ position: "absolute" }}>
          <p>
            The owner of this web site does not wish to represent anyone
            desiring representation based solely upon viewing this website.
          </p>
          <br />
          <br />
          <p>
            This website is not intended to be a source of advertising or
            solicitation and the contents of the web site should not be
            construed as legal advice. The reader should not consider this
            information to be an invitation for a lawyer-client relationship and
            should not rely on information provided herein and should always
            seek the advice of a competent counsel licensed to practice in the
            reader's country/state.
          </p>
          <br />
          <br />
          <p>
            The owner of this web site does not wish to disclose any information
            without explicit request from you. In case you wish to view
            information about the firm J-Sep legal, Advocates & Solicitors, you
            may Accept. Alternatively, you may exit this page by clicking on the
            Decline button below.
          </p>
          <button className={styles.button} onClick={toggleModal}>
            Accept
          </button>
        </div>
      </div>
    );
  };

  return <>{showModal && <MyModal />}</>;
}

export default TncModal;
