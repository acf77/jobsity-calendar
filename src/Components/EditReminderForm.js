import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDialog } from "react-mui-dialog";
import TimePicker from "react-time-picker";
import DatePicker from "react-datepicker";

import {
  Form,
  FormLabel,
  FormControl,
  Button,
  Container,
  Col,
} from "react-bootstrap";

import { editReminder } from "../redux/3 - actions/ReminderActions";

export const EditReminderForm = ({ onCancel, handleSubmit }) => {
  const dispatch = useDispatch();

  const { closeDialog } = useDialog();

  const reminderFromState = useSelector((state) => state.addReminder);
  const { reminder } = reminderFromState;

  useEffect(() => {
    setDescription(reminder.description);
    setCity(reminder.city);
    setTime(reminder.time);
    setDate(reminder.date);
  }, [reminder.description, reminder.city, reminder.time]);

  const [description, setDescription] = useState();
  const [city, setCity] = useState();
  const [time, setTime] = useState();
  const [date, setDate] = useState();

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleCity = async (e) => {
    setCity(e.target.value);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    dispatch(editReminder(city, description, time));
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
            value={description}
          />
          <FormLabel>City</FormLabel>
          <FormControl
            onChange={handleCity}
            type="text"
            placeholder="ex: Quito"
            value={city}
          />
          <FormLabel>Pick date</FormLabel>
          <DatePicker selected={date} onSelect={setDate} onChange={setDate} />
          <FormLabel>Pick time</FormLabel>
          <TimePicker onChange={setTime} value={time} />
          <Button variant="secondary" className="m-3" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit">Save</Button>
        </Form>
      </Col>
    </Container>
  );
};
