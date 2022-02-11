import React from "react";
import { useSelector } from "react-redux";
import { Card } from "react-bootstrap";

export const ReminderAdd = () => {
  const reminderFromState = useSelector((state) => state.addReminder);
  const { reminder } = reminderFromState;

  const temp = reminder.weather.data.main.temp;
  const city = reminder.city;
  const description = reminder.description;
  const time = reminder.time;
  const date = reminder.date;

  return (
    <Card className="card border-primary mb-3" style={{ maxWidth: 500 }}>
      <Card.Body className="p-3">
        <Card.Title>{description}</Card.Title>
        <Card.Text>
          <strong>Reminder city:</strong> {city}
        </Card.Text>
        <Card.Text>
          <strong>Temperature:</strong> {temp} Celsius{" "}
          <i>(provided by OpenWeather)</i>
        </Card.Text>
        <Card.Text>
          <strong>Date and time:</strong> {JSON.stringify(date)} {time}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ReminderAdd;
