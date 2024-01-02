import moment from "moment";

export const getAntdFormInputRules = 
  [{
    required: true,
    message: "Required",
  },
];

export const getDateFormat = (date) => {
  return moment(date).format("DD-MM-YYYY, hh:mm A");
}