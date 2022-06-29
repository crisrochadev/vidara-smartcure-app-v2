import React, { useState } from "react";

export const usePass = (value, isRegister) => {

    if (isRegister) {
      let testLength =
        value.length >= 6 && value.length <= 8 ? true : false;
      const regexNumber = /[0-9]/;
      let testNumber = regexNumber.test(value);
      const regexUpper =/[A-Z]/;
      let testUper = regexUpper.test(value);

      return {testLength,testNumber,testUper}
    }

    
};
