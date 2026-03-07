type FormData = {
  name?: string;
  email: string;
  password: string;
  confirmPassword?: string;
  IsAccepted?: boolean;
};

type Errors = {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  IsAccepted?: string;
};

export const validate = (data: FormData, type: string): Errors => {
  const errors: Errors = {};

  if (!data.email) {
    errors.email = "Email is Required!";
  } else if (
    !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      String(data.email).toLowerCase()
    )
  ) {
    errors.email = "Email address is invalid!";
  }

  if (!data.password) {
    errors.password = "Password is Required";
  } else if (data.password.length < 6) {
    errors.password = "Password needs to be 6 character or more";
  }

  if (type === "signUp") {
    if (!data.name?.trim()) {
      errors.name = "Username is Required!";
    }

    if (!data.confirmPassword) {
      errors.confirmPassword = "Confirm the Password";
    } else if (data.confirmPassword !== data.password) {
      errors.confirmPassword = "Password is not match!";
    }

    if (!data.IsAccepted) {
      errors.IsAccepted = "Accept terms!";
    }
  }

  return errors;
};