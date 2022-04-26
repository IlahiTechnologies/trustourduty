//receipt-generator
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import easyinvoice from 'easyinvoice';

import { getFirestore } from "firebase/firestore";
import { Input } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { Formik, Field } from "formik";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../app/firebaseApp";
import React from "react";

export default function ReceiptGenerator() {
  return (
    <Formik
      enableReinitialize={true}
      initialValues={{ name: "Sasuke" }}
      onSubmit={async (values, actions) => {
        debugger;
        try {
          var data = {
            "images": {
              "logo": "https://raw.githubusercontent.com/abhinavbansal19961996/trustourduty/main/public/logo-comp.jpeg?raw=true"
            },
            "sender": {
              "company": "TrustOurDuty",
              "address": "puducherry",
              "zip": "605001",
              "city": "puducherry",
              "country": "India"
            
          },
          "client": {
            "company": values.name,
            "address": values.residing_at,
            "panno": values.pan_no
        },
        "information": {
          // Invoice number
          "number": "2021.0001",
          // Invoice data
          "date": "12-12-2021",
          "due-date": "Already Paid"

          
      },
      "products": [
        {
            "quantity": 1,
            "description": "Donation for" + values.purpose,
            "price": values.amount,
            "tax-rate": 0
        }
      ]
      ,
      "bottom-notice": "Thank you so much for donating for a great cause.",
      "settings": {
        "currency": "INR" // See documentation 'Locales and Currency' for more info. Leave empty for no currency.
    }
          };
          const result = await easyinvoice.createInvoice(data);
          easyinvoice.download('myInvoice.pdf', result.pdf);


          // const docRef = await addDoc(collection(db, "receipts"), {
          //   purpose: values.purpose,
          //   received_by: values.received_by,
          //   sum_of: values.sum_of,
          //   residing_at: values.residing_at,
          //   pan_no: values.pan_no,
          //   name: values.name,
          //   email: values.email,
          //   amount: values.amount,
          // });
          // console.log("Document written with ID: ", docRef, docRef.id);

        } catch (e) {
          console.error("Error adding document: ", e);
        }
        console.log("sdsdssd", values);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <FormControl>
            <Field name="name">
              {({ field, form }) => (
                <FormControl>
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Input {...field} id="name" placeholder="name" />
                </FormControl>
              )}
            </Field>

            <Field name="purpose">
              {({ field, form }) => (
                <FormControl>
            <FormLabel htmlFor="Purpose">Purpose</FormLabel>
            <Input {...field} id="Purpose" placeholder="Purpose" />
            </FormControl>
            )}
            </Field>


            <Field name="received_by">
              {({ field, form }) => (
                <FormControl>
            <FormLabel htmlFor="Received">Received By</FormLabel>
            <Input {...field} id="name" placeholder="Received By" />
            </FormControl>
            )}
            </Field>


            <Field name="sum_of">
              {({ field, form }) => (
                <FormControl>
            <FormLabel htmlFor="Sum">Sum of</FormLabel>
            <Input {...field} id="name" placeholder="Sum" />
            </FormControl>
            )}
            </Field>

            <Field name="amount">
              {({ field, form }) => (
                <FormControl>
            <FormLabel htmlFor="Amount">Amount</FormLabel>
            <Input {...field} id="name" placeholder="Amount" />
            </FormControl>
            )}
            </Field>

            <Field name="pan_no">
              {({ field, form }) => (
                <FormControl>

            <FormLabel htmlFor="Pan">Pan No</FormLabel>
            <Input {...field} id="name" placeholder="Pan" />

            </FormControl>
            )}
            </Field>
            <Field name="email">
              {({ field, form }) => (
                <FormControl>
            <FormLabel htmlFor="email">Email address</FormLabel>
            <Input {...field} id="email" type="email" />
            
            </FormControl>
            )}
            </Field>
            
            <FormHelperText>We'll never share your email.</FormHelperText>
            
            <Field name="residing_at">
              {({ field, form }) => (
                <FormControl>
            <FormLabel htmlFor="country">Residing at</FormLabel>
            <Select {...field} id="country" placeholder="Select country">
              <option>United Arab Emirates</option>
              <option>Nigeria</option>
            </Select>
            </FormControl>
            )}
            </Field>
            
            
            <Button
              mt={4}
              colorScheme="teal"
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </Button>
          </FormControl>
        </form>
      )}
    </Formik>
  );
}
