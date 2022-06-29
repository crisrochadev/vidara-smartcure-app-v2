

export const useHandleInfo = (value) => {

            const regexEmail = /\S+@\S+\.\S+/;
            let valid = regexEmail.test(value) ? false : true


        return valid

}