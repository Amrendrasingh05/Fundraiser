import React from "react";
import { Box } from "rebass";
import { FormComponent, FormContainer } from "react-authorize-net";
import R from "ramda";

let clientKey = "5FcB6WrfHGS76gHW3v7btBCE3HuuBuke9Pj96Ztfn5R32G5ep42vne7MCWZtAucY";
let apiLoginId = "5KP3u95bQpv";

const Payment = ({ history }) => {

    const  onSuccessHandler = (data) => {
        console.log(data)
      };

      const  onErrorHandler = (data) => {
        console.log(data)

      };

    return (
        <Box className="App" p={3}>
            <FormContainer
                environment="sandbox"
                onError={onErrorHandler}
                onSuccess={onSuccessHandler}
                amount={23}
                component={FormComponent}
                clientKey={clientKey}
                apiLoginId={apiLoginId}
            />
        </Box>
    );
};

export default Payment;