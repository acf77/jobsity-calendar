import React, { useState, useEffect } from "react";

import { datesGenerator } from "dates-generator";
import { useDialog } from "react-mui-dialog";
import { Container, Button, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import moment from "moment";

import ConfirmationDialog from "./ConfirmationDialog";
import ReminderAdd from "./ReminderAdd";
import EditReminder from "./EditReminder";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Calendar = () => {
  const { openDialog, closeDialog } = useDialog();

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [dates, setDates] = useState([]);
  const [calendar, setCalendar] = useState({
    month: selectedDate.getMonth(),
    year: selectedDate.getFullYear(),
  });

  useEffect(() => {
    const body = {
      month: calendar.month,
      year: calendar.year,
    };
    const { dates, nextMonth, nextYear, previousMonth, previousYear } =
      datesGenerator(body);

    setDates([...dates]);
    setCalendar({
      ...calendar,
      nextMonth,
      nextYear,
      previousMonth,
      previousYear,
    });
  }, []);

  const onClickNext = () => {
    const body = { month: calendar.nextMonth, year: calendar.nextYear };
    const { dates, nextMonth, nextYear, previousMonth, previousYear } =
      datesGenerator(body);

    setDates([...dates]);
    setCalendar({
      ...calendar,
      month: calendar.nextMonth,
      year: calendar.nextYear,
      nextMonth,
      nextYear,
      previousMonth,
      previousYear,
    });
  };

  const onClickPrevious = () => {
    const body = { month: calendar.previousMonth, year: calendar.previousYear };
    const { dates, nextMonth, nextYear, previousMonth, previousYear } =
      datesGenerator(body);

    setDates([...dates]);
    setCalendar({
      ...calendar,
      month: calendar.previousMonth,
      year: calendar.previousYear,
      nextMonth,
      nextYear,
      previousMonth,
      previousYear,
    });
  };

  const onSelectDate = (date) => {
    setSelectedDate(new Date(date.year, date.month, date.date));
  };

  const reminderFromState = useSelector((state) => state.addReminder);
  const { reminder } = reminderFromState;

  return (
    <div style={{ width: "100%", paddingTop: 50 }}>
      <Container>
        <div style={{ padding: 10 }}>
          <Button
            onClick={onClickPrevious}
            style={{ float: "left", width: "20%" }}
          >
            Previous
          </Button>
          <Button
            onClick={onClickNext}
            style={{ float: "right", width: "20%" }}
          >
            Next
          </Button>
        </div>
        <h2 style={{ textAlign: "center" }}>{months[calendar.month]}</h2>
        <div>
          <div>
            <Table
              style={{ height: "600px" }}
              striped
              bordered
              hover
              responsive
            >
              <tbody>
                <tr className="table-primary">
                  {days.map((day) => (
                    <td key={day} style={{ padding: "5px 0" }}>
                      <div style={{ textAlign: "center", padding: "5px 0" }}>
                        <strong>{day}</strong>
                      </div>
                    </td>
                  ))}
                </tr>

                {dates.length > 0 &&
                  dates.map((week) => (
                    <tr key={JSON.stringify(week[0])}>
                      {week.map((each) => (
                        <td
                          key={JSON.stringify(each)}
                          style={{
                            padding: "10px",
                            marginTop: "10px",
                          }}
                        >
                          <div
                            onClick={openDialog}
                            style={{
                              textAlign: "left",
                              padding: "10px 0",
                            }}
                          >
                            <ConfirmationDialog>
                              <strong>{each.date}</strong>
                            </ConfirmationDialog>
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
              </tbody>
            </Table>
          </div>
        </div>
        <div style={{ maxWidth: 500, padding: 10 }} onClick={openDialog}>
          {reminder &&
            Array(reminder).map((r, index) => (
              <EditReminder>
                <ReminderAdd {...r} key={index} index={index} reminderAdd={r} />
              </EditReminder>
            ))}
        </div>
      </Container>
    </div>
  );
};

export default Calendar;
