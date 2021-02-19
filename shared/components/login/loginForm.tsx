import * as React from "react";
import { MDBBtn } from "mdbreact";
import { withFormik } from "formik";
import InnerForm, { FormValues } from "./formInhalt";
import * as helpers from "./helpers";

/**
 * @description Diese Komponente stellt die Login-Seite der Anwendung dar. Der Anwender
 * kann in validierten Textfeldern einen usernamen und ein Passwort eingeben. Wird submit geklickt,
 * so wird ein Login versucht, gelingt dieser leitet die Seite wieder auf den Hauptpfad ("/") zurück.
 * @return {JSX.Element} Form um eine Anmeldung durchzuführen
 */
const LoginPage = (): JSX.Element => {
  return (
    <div>
      <MDBBtn>
        TODO!!!!!
      </MDBBtn>
    </div>
  );
};

/**
 * @description eine Formik Form, mit der die LoginForm um Funktionalität erweitert wird.
 */
/** 
const LoginForm = withFormik<{}, FormValues>({
  mapPropsToValues: helpers.mapPropsToValues,
  validationSchema: helpers.yupValidationSchema,
  handleSubmit: helpers.handleSubmit,
})(InnerForm);
**/

export default LoginPage;
export {  };
