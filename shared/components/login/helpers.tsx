import * as yup from "yup";
import { FormikBag } from "formik";
import { FormValues } from "./formInhalt";
import { userService } from "../../../Routing/utilities/user.service";
import { history } from "../../../Routing/utilities/history";
import Constants from "../../utils/textConstants";

const yupValidationSchema = yup.object().shape({
  username: yup
    .string()
    .min(2, Constants.MINLENGTH2)
    .max(100, Constants.MAXLENGTH)
    .required(Constants.PFLICHTFELD),
  password: yup
    .string()
    .min(6, Constants.MINLENGTH6)
    .required(Constants.PFLICHTFELD),
});

/**
 * @description Helper-Funktion, setzt die initial-Werte der Form.
 */
const mapPropsToValues = (): FormValues => {
  return {
    username: "",
    password: "",
  };
};

/**
 * @description Helper-Funktion, liefert die Submission-Funktionalität der Form.
 * Nimmt den Usernamen und das Passwort aus der Form und ruft damit eine Login-Funktion auf.
 * Wenn erfolgreich, leitet die Funktion auf die Hauptseite der Anwendung ("/").
 * @param {FormValues} values Die Werte aus der Form
 * @param {FormikBag<{}, FormValues>} formikBag
 */
const handleSubmit = (
  values: FormValues,
  formikBag: FormikBag<{}, FormValues>
): void => {
  const { setSubmitting, setErrors } = formikBag;
  setSubmitting(true);

  userService.login(values.username, values.password).then(
    (user) => {
      history.push("/");
    },
    (error) => {
      const errormessage = Constants.LOGINFAILED;
      setErrors({
        username: errormessage,
        password: errormessage,
      });
      setSubmitting(false);
    }
  );
};

export { yupValidationSchema, handleSubmit, mapPropsToValues };
