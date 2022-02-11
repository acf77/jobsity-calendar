import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDialog } from "react-mui-dialog";
import TimePicker from "react-time-picker";
import DatePicker from "react-datepicker";
import moment from "moment";

import {
  Form,
  FormLabel,
  FormControl,
  Button,
  Container,
  Col,
} from "react-bootstrap";

import { addReminder } from "../redux/3 - actions/ReminderActions";

import "react-datepicker/dist/react-datepicker.css";

export const ReminderForm = ({ onCancel }) => {
  const dispatch = useDispatch();

  const { closeDialog } = useDialog();

  const formattedDate = new Date();

  const [description, setDescription] = useState();
  const [city, setCity] = useState();
  const [time, setTime] = useState();
  const [date, setDate] = useState(formattedDate);

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleCity = async (e) => {
    setCity(e.target.value);
  };

  const handleTime = async (e) => {
    setTime(e.target.value);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    dispatch(addReminder(city, description, time, date));
    closeDialog();
  }

  return (
    <Container className="p-4" fluid>
      <Col>
        <Form onSubmit={handleSubmit}>
          <FormLabel>Description</FormLabel>
          <FormControl
            onChange={handleDescription}
            type="text"
            placeholder="ex: Weekly code review"
          />
          <FormLabel>City</FormLabel>
          <FormControl
            onChange={handleCity}
            type="text"
            placeholder="ex: Quito"
          />
          <FormLabel>Pick date</FormLabel>
          <DatePicker selected={date} onSelect={setDate} onChange={setDate} />
          <FormLabel>Pick time</FormLabel>
          <TimePicker onChange={setTime} value={time} />
          <Button variant="secondary" className="m-3" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit" disabled={description === "" || undefined}>
            Save
          </Button>
        </Form>
      </Col>
    </Container>
  );
};
